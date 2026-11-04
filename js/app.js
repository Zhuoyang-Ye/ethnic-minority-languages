/* 页面与路由（#/ 开头的地址）
   #/                     首页
   #/course/:cid          课程地图
   #/lesson/:cid/:lid     课程开始页
   #/play/:cid/:lid       做练习（调试用：#/play/yi/y1-1?step=12 直接跳到第 12 步）
   #/text/:cid/:lid       课文（词表 + 会话 + 讲解）
   #/review/:cid          复习到期的词；#/review/:cid/extra 加练最薄弱的词
   #/script/:cid          文字表与转换工具
   #/words/:cid           词表
   #/method               学习方法 */
(function () {
  'use strict';
  var U = LX.util, esc = U.esc;
  var app = document.getElementById('app');

  /* ---------- 通用片段 ---------- */
  function sc(cid) { return LX.scriptClass(cid); }

  function nav(active) {
    var links = [['#/', '首页']].concat(
      LX.courseOrder.map(function (cid) { return ['#/course/' + cid, LX.courses[cid].name]; }),
      [['#/method', '学习方法']]
    );
    return '<header class="top"><div class="top-inner"><a class="brand" href="#/"><span class="brand-mark"><span class="yi">ꆈ</span><span class="bo">བོད</span></span><span>少数名族语言学堂</span></a><nav>' +
      links.map(function (l) { return '<a href="' + l[0] + '"' + (l[0] === active ? ' class="on"' : '') + '>' + l[1] + '</a>'; }).join('') +
      '</nav><label class="theme-control">主题<select name="theme" aria-label="选择主题">' +
      '<option value="auto">跟随系统</option><option value="light">浅色</option><option value="dark">深色</option></select></label></div></header>';
  }

  function bindThemeControl() {
    var theme = document.querySelector('.top .theme-control select');
    if (!theme) return;
    theme.value = LX.store.data.settings.theme;
    theme.addEventListener('change', function () {
      LX.store.data.settings.theme = theme.value;
      LX.store.save();
      applyTheme();
    });
  }

  function page(active, body, course) {
    document.body.dataset.course = course || '';
    app.innerHTML = nav(active) + '<main class="wrap">' + body + '</main>' +
      '<footer class="foot">个人学习用 · 进度保存在本机浏览器 · <a href="#/method">学习方法与来源说明</a></footer>';
    bindThemeControl();
    window.scrollTo(0, 0);
  }

  function lessonHref(cid, l) { return '#/lesson/' + cid + '/' + l.id; }

  function nextUndone(cid) {
    var ls = LX.courses[cid].lessons;
    for (var i = 0; i < ls.length; i++) if (!LX.store.lesson(cid, ls[i].id)) return ls[i];
    return null;
  }

  function boxDots(key) {
    var r = LX.srs.get(key);
    if (!r) return '<span class="box none">未学</span>';
    var dots = '';
    for (var i = 1; i <= 6; i++) dots += '<i class="' + (i <= r.box ? 'on' : '') + '"></i>';
    var due = r.due <= Date.now() ? ' due' : '';
    return '<span class="box' + due + '" title="复习盒子 ' + r.box + ' / 6">' + dots + '</span>';
  }

  /* ---------- 词卡、会话：练习和课文页共用 ---------- */
  LX.itemCardHTML = function (cid, item) {
    var html = '<div class="ic-script"><span class="' + sc(cid) + ' huge">' + esc(item.s) + '</span></div>';
    if (cid === 'yi' || cid === 'lisu' || cid === 'ug') {
      if (item.t === 'letter') {
        html += '<div class="ic-roman">字母 <b>' + esc(item.w || LX.roman(cid, item)) + '</b>　读 <b>' + esc(item.p || item.m) + '</b></div>';
      } else {
        html += '<div class="ic-roman">' + esc(LX.roman(cid, item)) + '</div>';
      }
    } else if (item.t === 'letter') {
      html += '<div class="ic-roman">字母名 <b>' + esc(item.w) + '</b>　读 <b>' + esc(item.p) + '</b>' +
        (item.tone ? '　<span class="tone-' + item.tone + '">' + (item.tone === 'high' ? '高调' : '低调') + '</span>' : '') + '</div>';
    } else {
      var wLabel = cid === 'mn' ? '传统蒙文转写 ' : '威利转写 ';
      html += '<div class="ic-roman">' + esc(item.p || '') + '<small>' + wLabel + esc(item.w || '') + '</small></div>';
    }
    if (item.t !== 'letter') html += '<div class="ic-mean">' + esc(item.m) + '</div>';
    if (cid === 'yi') html += yiBreakdown(item.s);
    if (item.ex) {
      html += '<div class="ic-ex">例词：<span class="' + sc(cid) + '">' + esc(item.ex.s) + '</span> ' + esc(item.ex.p || '') +
        (item.ex.w ? ' <small>(' + esc(item.ex.w) + ')</small>' : '') + ' ' + esc(item.ex.m) + '</div>';
    }
    html += '<div class="ic-tools">' + audioBtn(cid, item.s) + recBtn() + '</div>';
    return '<div class="item-card">' + html + '</div>';
  };

  /* 彝文逐字拆成 声母 + 韵母 + 声调 */
  function yiBreakdown(s) {
    var P = LX.YI_PHON;
    var chars = Array.from(LX.tileLabel(s)).filter(LX.isYi);
    if (!chars.length) return '';
    return '<table class="mini breakdown">' + chars.map(function (ch) {
      var py = LX.YI_SYLLABLES[ch], p = LX.yiParse(py);
      if (!p) return '<tr><td class="yi">' + esc(ch) + '</td><td colspan="3">' + esc(py) + '（重复号：把前一个字再读一遍）</td></tr>';
      var ini = P.initials[p.ini], vow = P.vowels[p.vow], tone = P.tones[p.tone];
      return '<tr><td class="yi">' + esc(ch) + '</td><td><b>' + esc(py) + '</b></td>' +
        '<td>' + (p.ini || '∅') + ' [' + ini.ipa + '] + ' + p.vow + ' [' + vow.ipa + ']</td>' +
        '<td>' + esc(tone.name) + ' ' + tone.value + '</td></tr>';
    }).join('') + '</table>';
  }

  LX.itemSummaryHTML = function (cid, item) {
    if (!item) return '';
    var r = (cid === 'bo' || cid === 'mn') && item.t !== 'letter' ? [item.p, item.w].filter(Boolean).join(' · ') : LX.roman(cid, item);
    return '<span class="' + sc(cid) + '">' + esc(item.s) + '</span> <span class="rom-inline">' + esc(r) + '</span> ' +
      (item.t === 'letter' ? esc(item.m) : '= ' + esc(item.m));
  };

  function audioBtn(cid, s) {
    var src = LX.audioFor(cid, s);
    return src ? '<button class="mini-btn play" data-src="' + esc(src) + '" title="播放录音">▶ 录音</button>' : '';
  }
  function recBtn() {
    return (navigator.mediaDevices && window.MediaRecorder) ? '<button class="mini-btn rec" title="录下自己的发音并回放">🎙 跟读</button>' : '';
  }

  function referenceAudioHTML(l) {
    var tracks = l && l.referenceAudio;
    if (!tracks || !tracks.length) return '';
    var source = LX.SLR158 && LX.SLR158.source;
    return '<section class="reference-audio card" aria-labelledby="reference-audio-title">' +
      '<div class="reference-head"><div><h2 id="reference-audio-title">SLR158 拓展跟读：先听，再跟读</h2>' +
      '<p class="muted">这些是拉萨话真实朗读片段，不是本课对话的逐句配音。先播放一遍，需要时用「重播」，然后点击同一条旁边的「跟读」录下自己并自动回放。</p></div>' +
      (source ? '<span class="badge">' + esc(source.license) + '</span>' : '') + '</div>' +
      '<div class="reference-list">' + tracks.map(function (track) {
        return '<article class="reference-track">' +
          '<div class="reference-copy"><strong class="' + sc('bo') + '">' + esc(track.utterance) + '</strong>' +
          '<span class="muted">' + esc(track.meaning) + '</span><small>SLR158 语料编号：' + esc(track.corpusId) + '</small></div>' +
          '<audio controls preload="metadata" src="' + esc(track.path) + '" aria-label="播放 ' + esc(track.meaning) + ' 的 SLR158 参考音频"></audio>' +
          '<div class="reference-actions"><button class="mini-btn reference-replay" data-src="' + esc(track.path) + '">↻ 重播</button>' + recBtn() + '</div>' +
          '</article>';
      }).join('') + '</div>' +
      (source ? '<p class="src">来源：<a href="' + esc(source.url) + '" target="_blank" rel="noopener">' + esc(source.title) + '</a> · ' +
      '<a href="' + esc(source.licenseUrl) + '" target="_blank" rel="noopener">' + esc(source.license) + '</a> · ' +
      esc(source.attribution) + ' · ' + esc(source.dialect) + '。' + esc(source.note) + '</p>' : '') +
      '</section>';
  }

  LX.dialogueHTML = function (cid, d) {
    var s = LX.settings();
    var people = d.people || {};
    return '<div class="dlg' + (s.hideTrans ? ' no-trans' : '') + '">' +
      '<div class="dlg-tools"><label><input type="checkbox" class="t-trans"' + (s.hideTrans ? '' : ' checked') + '> 显示翻译</label>' +
      '<label><input type="checkbox" class="t-ilin"> 逐词</label></div>' +
      (d.scene ? '<p class="scene">' + esc(d.scene) + '</p>' : '') +
      d.lines.map(function (l) {
        var name = people[l.who];
        return '<div class="dl-line"><div class="who"><span>' + esc(l.who) + '</span>' + (name ? '<span class="who-native ' + sc(cid) + '">' + esc(name) + '</span>' : '') + '</div>' +
          '<div class="dl-body"><div class="dl-s">' + LX.lineHTML(cid, l) + '</div>' +
          (s.roman ? '<div class="rom">' + esc(LX.lineRoman(cid, l)) + '</div>' : '') +
          '<div class="dl-ilin">' + LX.interlinearHTML(cid, l) + '</div>' +
          '<div class="dl-m">' + esc(l.m) + (l.adapted ? ' <span class="badge" title="按原句替换词语改编，未经母语者核对">改编</span>' : '') + '</div></div>' +
          '<div class="dl-tools">' + audioBtn(cid, l.s) + recBtn() + '</div></div>';
      }).join('') + '</div>';
  };

  /* ---------- 首页 ---------- */
  function home() {
    var st = LX.store, day = st.day(), goal = st.data.settings.goal, streak = st.streak();
    var cards = LX.courseOrder.map(function (cid, idx) {
      var c = LX.courses[cid];
      var done = c.lessons.filter(function (l) { return st.lesson(cid, l.id); }).length;
      var cnt = LX.srs.counts(cid);
      var next = nextUndone(cid);
      var spanClass = idx < 2 ? 'course-major' : 'course-compact';
      var stageBadges = c.stages.map(function (s) {
        return '<span class="stg-pill"><b>' + esc(s.level) + '</b> ' + esc(s.title) + ' (' + s.lessons.length + ')</span>';
      }).join('');
      return '<div class="course-card ' + spanClass + '" data-course="' + cid + '">' +
        '<div class="cc-top">' +
        '<div class="cc-head"><div class="cc-title"><h2>' + esc(c.name) + '</h2><small class="cc-var">' + esc(c.variety) + '</small></div>' +
        '<span class="' + sc(cid) + ' endonym">' + esc(c.endonym) + '</span></div>' +
        '<div class="stg-pills">' + stageBadges + '</div>' +
        '<div class="progress"><i style="width:' + Math.round(done / c.lessons.length * 100) + '%"></i></div>' +
        '<p class="cc-meta muted">已完成 <b>' + done + '</b> / ' + c.lessons.length + ' 课 · 已学 <b>' + cnt.learned + '</b> 词' + (cnt.strong ? '（' + cnt.strong + ' 牢固）' : '') + '</p>' +
        '</div>' +
        '<div class="cc-bottom">' +
        '<div class="cc-actions">' +
        (next ? '<a class="btn primary" href="' + lessonHref(cid, next) + '">' + (done ? '继续：' : '开始：') + esc(next.title) + '</a>' : '<span class="muted">已学完本门全部 ' + c.lessons.length + ' 课！</span>') +
        '<a class="btn' + (cnt.due ? ' due' : '') + '" href="#/review/' + cid + '">复习' + (cnt.due ? '（' + cnt.due + '）' : '') + '</a></div>' +
        '<div class="cc-links"><a href="#/course/' + cid + '">课程地图</a><a href="#/script/' + cid + '">文字表</a><a href="#/words/' + cid + '">词表</a></div>' +
        '</div></div>';
    }).join('');
    page('#/', '<section class="hero card"><div class="hero-copy"><h1>少数名族语言学堂</h1>' +
      '<p>多民族语言互动学习站（彝语、藏语、傈僳语、维吾尔语、蒙古语）：短课、真实会话、中文语法与文化讲解、主动回忆练习、莱特纳间隔复习。</p></div>' +
      '<div class="stats-box"><div class="stat-item"><span class="stat-label">连续学习</span><strong class="stat-val">🔥 ' + streak + ' 天</strong></div>' +
      '<div class="stat-item"><span class="stat-label">今日得分</span><strong class="stat-val">' + day.xp + ' <small>/ ' + goal + ' 分</small></strong>' +
      '<span class="goalbar"><i style="width:' + Math.min(100, Math.round(day.xp / goal * 100)) + '%"></i></span></div>' +
      '</div></section>' +
      '<section class="courses">' + cards + '</section>' +
      '<section class="card how"><div class="how-head"><h2>每天怎么学</h2><a class="how-more" href="#/method">完整的学习框架和路线图 →</a></div>' +
      '<div class="how-grid">' +
      '<div class="how-step"><span class="how-num">1</span><div><b>先清到期复习（5 分钟）</b><p class="muted">点「复习」把今天到期的词卡过一遍，按 1→2→4→7→14→30 天巩固记忆。</p></div></div>' +
      '<div class="how-step"><span class="how-num">2</span><div><b>再学一课新课（10–15 分钟）</b><p class="muted">按「新词认读 → 语法讲解 → 拼词配对 → 会话排句」循序渐进掌握真实表达。</p></div></div>' +
      '<div class="how-step"><span class="how-num">3</span><div><b>打开课文朗读与跟读</b><p class="muted">在「课文」页切换逐词注释，用「🎙 跟读」录下自己的发音并回放对比。</p></div></div>' +
      '</div></section>');
  }

  /* ---------- 课程地图 ---------- */
  function course(cid) {
    var c = LX.courses[cid];
    if (!c) return notFound();
    var cnt = LX.srs.counts(cid);
    var done = c.lessons.filter(function (l) { return LX.store.lesson(cid, l.id); }).length;
    var next = nextUndone(cid);
    var stages = c.stages.map(function (stg) {
      var ls = stg.lessons.map(function (l, i) {
        var r = LX.store.lesson(cid, l.id);
        return '<a class="lesson-row' + (r ? ' done' : '') + '" href="' + lessonHref(cid, l) + '">' +
          '<span class="ln">' + (r ? '✓' : i + 1) + '</span><span class="lt"><b>' + esc(l.title) + '</b><small>' + esc(l.goal) + '</small></span>' +
          '<span class="lm">' + (r ? '最好 ' + Math.round(r.best * 100) + '%' : (l.minutes || 10) + ' 分钟') + '</span></a>';
      }).join('');
      var planned = (stg.planned || []).map(function (t) { return '<div class="lesson-row planned"><span class="ln">·</span><span class="lt"><b>' + esc(t) + '</b><small>规划中</small></span></div>'; }).join('');
      return '<section class="stage card"><div class="stage-head"><h2><span class="lvl">' + esc(stg.level) + '</span>' + esc(stg.title) + '</h2><span class="stage-cnt muted">共 ' + stg.lessons.length + ' 课</span></div><p class="muted stage-desc">' + esc(stg.desc) + '</p><div class="lesson-grid">' + ls + planned + '</div></section>';
    }).join('');
    var res = c.resources.map(function (r) {
      return '<li>' + (r.url ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener"><b>' + esc(r.title) + '</b></a>' : '<b>' + esc(r.title) + '</b>') + '<br><small>' + esc(r.note || '') + '</small></li>';
    }).join('');
    page('#/course/' + cid, '<section class="course-hero card"><div class="course-head"><div class="ch-main"><h1>' + esc(c.name) + '</h1><p class="muted">' + esc(c.variety) + '</p></div><span class="' + sc(cid) + ' endonym">' + esc(c.endonym) + '</span></div>' +
      '<p class="course-sum">' + esc(c.summary) + '</p>' +
      '<div class="course-bar-row"><div class="progress"><i style="width:' + Math.round(done / c.lessons.length * 100) + '%"></i></div><span class="muted">已完成 ' + done + ' / ' + c.lessons.length + ' 课</span></div>' +
      '<div class="cc-actions">' +
      (next ? '<a class="btn primary" href="' + lessonHref(cid, next) + '">' + (done ? '继续：' : '开始学习：') + esc(next.title) + '</a>' : '') +
      '<a class="btn' + (cnt.due ? ' due' : '') + '" href="#/review/' + cid + '">复习' + (cnt.due ? '（' + cnt.due + '）' : '') + '</a><a class="btn" href="#/script/' + cid + '">文字表与转换工具</a><a class="btn" href="#/words/' + cid + '">词表（' + cnt.learned + ' 已学）</a></div></section>' +
      stages + '<section class="card"><h2>学习资源与参考资料</h2><ul class="res">' + res + '</ul></section>', cid);
  }

  /* ---------- 课程开始页 ---------- */
  function lessonStart(cid, lid) {
    var l = LX.getLesson(cid, lid);
    if (!l) return notFound();
    var r = LX.store.lesson(cid, lid);
    var words = (l.words || []).map(function (w) {
      return '<span class="chip"><span class="' + sc(cid) + '">' + esc(w.s) + '</span> <span class="chip-m">' + esc(w.t === 'letter' ? w.w : w.m) + '</span></span>';
    }).join('');
    page('#/course/' + cid, '<div class="card lesson-start">' +
      '<p class="muted"><a href="#/course/' + cid + '">← 返回' + esc(LX.courses[cid].name) + '课程地图</a> · ' + esc(stageOf(cid, l).level) + ' · ' + esc(stageOf(cid, l).title) + '</p>' +
      '<h1>' + esc(l.title) + '</h1><p class="goal">🎯 ' + esc(l.goal) + '</p>' +
      '<div class="ls-meta"><span>⏱ 约 ' + (l.minutes || 10) + ' 分钟</span><span>📚 ' + (l.words || []).length + ' 个' + (l.kind === 'script' ? '字/词' : '新词') + '</span>' +
      (l.dialogue ? '<span>💬 1 段情景会话</span>' : '') +
      (r ? '<span>✅ 已学 ' + r.count + ' 次（最佳 ' + Math.round(r.best * 100) + '%）</span>' : '') + '</div>' +
      '<div class="chips">' + words + '</div>' +
      '<div class="cc-actions"><a class="btn primary big" href="#/play/' + cid + '/' + lid + '">' + (r ? '再练一遍' : '开始学习') + '</a>' +
      '<a class="btn big" href="#/text/' + cid + '/' + lid + '">看课文与讲解</a></div>' +
      referenceAudioHTML(l) +
      (l.source ? '<p class="src">来源：' + (l.source.url ? '<a href="' + esc(l.source.url) + '" target="_blank" rel="noopener">' + esc(l.source.title) + '</a>' : esc(l.source.title)) + '</p>' : '') +
      '</div>', cid);
  }

  function stageOf(cid, l) { return LX.courses[cid].stages.filter(function (s) { return s.id === l.stage; })[0]; }

  /* ---------- 做练习 ---------- */
  function play(cid, lid, q) {
    var l = LX.getLesson(cid, lid);
    if (!l) return notFound();
    document.body.dataset.course = cid;
    app.innerHTML = '';
    var p = new LX.Player(app, {
      cid: cid, steps: LX.buildLesson(cid, l), mode: 'lesson', exitHref: '#/lesson/' + cid + '/' + lid,
      onFinish: function (res) {
        var score = res.graded ? res.correct / res.graded : 1;
        LX.store.finishLesson(cid, lid, score);
        (l.words || []).forEach(function (w) { LX.srs.learn(LX.itemKey(cid, w)); });
        LX.store.save();
        var next = LX.nextLesson(cid, lid);
        page('#/course/' + cid, '<div class="card done-card"><div class="big-emoji">🎉</div><h1>完成「' + esc(l.title) + '」</h1>' +
          '<p class="score">答对 <b>' + res.correct + '</b> / ' + res.graded + '（' + Math.round(score * 100) + '%）</p>' +
          '<p>本课的 ' + (l.words || []).length + ' 个' + (l.kind === 'script' ? '字/词' : '词') + '已经加入复习，明天开始按间隔提醒你复习。</p>' +
          missedHTML(cid, res.missed) +
          '<div class="cc-actions">' + (next ? '<a class="btn primary" href="' + lessonHref(cid, next) + '">下一课：' + esc(next.title) + '</a>' : '') +
          '<a class="btn" href="#/text/' + cid + '/' + lid + '">看课文</a><a class="btn" href="#/course/' + cid + '">返回课程</a></div></div>', cid);
      }
    });
    p.start(q.step ? +q.step - 1 : 0);
  }

  function missedHTML(cid, missed) {
    var seen = {}, list = missed.filter(function (it) { var k = LX.itemKey(cid, it); if (seen[k]) return false; seen[k] = 1; return true; });
    if (!list.length) return '';
    return '<div class="missed"><h3>这些还要多练：</h3><ul>' + list.map(function (it) { return '<li>' + LX.itemSummaryHTML(cid, it) + '</li>'; }).join('') + '</ul></div>';
  }

  /* ---------- 课文 ---------- */
  function text(cid, lid) {
    var l = LX.getLesson(cid, lid);
    if (!l) return notFound();
    var words = '<table class="wordtable">' + (l.words || []).map(function (w) {
      var r = (cid === 'bo' || cid === 'mn') ? (w.t === 'letter' ? w.w + ' · 读 ' + w.p : (w.p || '') + ' · ' + (w.w || '')) : LX.roman(cid, w);
      return '<tr><td class="' + sc(cid) + '">' + esc(w.s) + '</td><td class="rom-inline">' + esc(r) + '</td><td>' + esc(w.m) +
        (w.ex ? '<br><small>例：<span class="' + sc(cid) + '">' + esc(w.ex.s) + '</span> ' + esc(w.ex.p || '') + ' ' + esc(w.ex.m) + '</small>' : '') + '</td><td>' + audioBtn(cid, w.s) + '</td></tr>';
    }).join('') + '</table>';
    var tips = (l.tips || []).map(function (t) {
      return '<div class="card tip tip-' + (t.kind || 'grammar') + '"><div class="tip-kind">' + ({ pron: '发音', grammar: '语法', culture: '文化' }[t.kind] || '提示') + '</div><h3>' + esc(t.title) + '</h3><div class="tip-body">' + (typeof t.html === 'function' ? t.html() : t.html) + '</div></div>';
    }).join('');
    var next = LX.nextLesson(cid, lid);
    page('#/course/' + cid, '<div class="card text-head"><p class="muted"><a href="#/course/' + cid + '">← ' + esc(LX.courses[cid].name) + '</a> · ' + esc(stageOf(cid, l).title) + '</p>' +
      '<h1>' + esc(l.title) + '</h1><p class="goal">🎯 ' + esc(l.goal) + '</p>' +
      '<div class="cc-actions"><a class="btn primary" href="#/play/' + cid + '/' + lid + '">进入互动练习</a>' + (next ? '<a class="btn" href="' + lessonHref(cid, next) + '">下一课：' + esc(next.title) + '</a>' : '') + '</div></div>' +
      (l.dialogue ? '<section class="card"><h2>会话原文</h2>' + LX.dialogueHTML(cid, l.dialogue) + '</section>' : '') +
      referenceAudioHTML(l) +
      '<section class="card"><h2>' + (l.kind === 'script' ? '字和词' : '本课生词') + '</h2>' + words + '</section>' +
      (tips ? '<section class="tips-sec"><h2>发音、语法与文化讲解</h2><div class="tips-grid">' + tips + '</div></section>' : '') +
      (l.source ? '<p class="src">来源：' + (l.source.url ? '<a href="' + esc(l.source.url) + '" target="_blank" rel="noopener">' + esc(l.source.title) + '</a>' : esc(l.source.title)) + '</p>' : ''), cid);
  }

  /* ---------- 复习 ---------- */
  function review(cid, extra, q) {
    var c = LX.courses[cid];
    if (!c) return notFound();
    var entries = extra ? LX.srs.weakest(cid, 12) : LX.srs.dueItems(cid).slice(0, 20);
    if (!entries.length) {
      var cnt = LX.srs.counts(cid);
      return page('#/course/' + cid, '<div class="card done-card"><div class="big-emoji">☕</div><h1>' + esc(c.name) + '：现在没有要复习的词</h1>' +
        (cnt.learned ? '<p>已学 ' + cnt.learned + ' 个词，下一批明天到期。想多练可以加练最薄弱的词。</p><div class="cc-actions"><a class="btn primary" href="#/review/' + cid + '/extra">加练 12 个最薄弱的词</a><a class="btn" href="#/course/' + cid + '">返回课程</a></div>'
          : '<p>先去学一课吧，学过的词会自动加入复习。</p><div class="cc-actions"><a class="btn primary" href="#/course/' + cid + '">去课程地图</a></div>') + '</div>', cid);
    }
    document.body.dataset.course = cid;
    app.innerHTML = '';
    var p = new LX.Player(app, {
      cid: cid, steps: LX.buildReview(cid, entries), mode: extra ? 'practice' : 'review', exitHref: '#/course/' + cid,
      onFinish: function (res) {
        LX.store.day().reviews += res.graded;
        LX.store.save();
        var left = LX.srs.counts(cid).due;
        page('#/course/' + cid, '<div class="card done-card"><div class="big-emoji">✅</div><h1>复习完成</h1>' +
          '<p class="score">答对 <b>' + res.correct + '</b> / ' + res.graded + '</p>' +
          (extra ? '<p>加练不会改变复习间隔。</p>' : '<p>答对的词会隔更久再出现，答错的词 10 分钟后再复习。</p>') +
          missedHTML(cid, res.missed) +
          '<div class="cc-actions">' + (left ? '<a class="btn primary" href="#/review/' + cid + '">还有 ' + left + ' 个到期，继续</a>' : '') +
          '<a class="btn" href="#/course/' + cid + '">返回课程</a><a class="btn" href="#/">首页</a></div></div>', cid);
      }
    });
    p.start(q.step ? +q.step - 1 : 0);
  }

  /* ---------- 文字表 ---------- */
  function script(cid, q) {
    if (cid === 'yi') return yiScript(q);
    if (cid === 'bo') return boScript();
    if (cid === 'lisu') return lisuScript();
    if (cid === 'ug') return ugScript();
    if (cid === 'mn') return mnScript();
    notFound();
  }

  function yiScript(q) {
    var P = LX.YI_PHON;
    var tone = q.tone != null ? q.tone : '';
    var tabs = P.toneOrder.map(function (t) {
      return '<a class="tab' + (t === tone ? ' on' : '') + '" href="#/script/yi?tone=' + t + '">' + (t ? '-' + t : '不标调') + ' ' + P.tones[t].name + '</a>';
    }).join('');
    var head = '<tr><th></th>' + P.vowelOrder.map(function (v) { return '<th>' + v + '</th>'; }).join('') + '</tr>';
    var rows = '';
    [{ name: '零声母', initials: [''] }].concat(P.series).forEach(function (s) {
      rows += '<tr class="series"><th colspan="11">' + esc(s.name) + '</th></tr>';
      s.initials.forEach(function (ini) {
        rows += '<tr><th>' + (ini || '∅') + '</th>' + P.vowelOrder.map(function (v) {
          var py = ini + v + tone, ch = LX.yiChar(py);
          return ch ? '<td><button class="syl" data-py="' + py + '"><span class="yi">' + ch + '</span><small>' + py + '</small></button></td>' : '<td></td>';
        }).join('') + '</tr>';
      });
    });
    page('#/course/yi', '<div class="card"><h1>彝文音节表</h1>' +
      '<p>规范彝文有 819 个基本字，Unicode 收录 1165 个（含 x 调字和重复号 <span class="yi">ꀕ</span>）。选一个声调，点任意一个字看读音。</p>' +
      LX.tpl.yiToneTable() + '</div>' +
      '<section class="card tool"><h2>彝文 ⇄ 拼音转换</h2><p class="muted">贴入彝文得到拼音；输入拼音（音节之间空格，例如 <code>nga op rro bbo</code>）得到彝文。</p>' +
      '<textarea class="conv-in" rows="3" placeholder="ꉢ ꀒꎂ ꁧ 或 nga op rro bbo"></textarea><div class="conv-out yi"></div></section>' +
      '<section class="card"><h2>音节检索表</h2><div class="tabs">' + tabs + '</div><div class="syl-info card" hidden></div>' +
      '<div class="table-scroll"><table class="syltable">' + head + rows + '</table></div></section>', 'yi');
    var info = app.querySelector('.syl-info');
    app.querySelectorAll('.syl').forEach(function (b) {
      b.addEventListener('click', function () {
        var py = b.dataset.py, p = LX.yiParse(py), ch = LX.yiChar(py);
        info.hidden = false;
        info.innerHTML = '<span class="yi huge">' + ch + '</span><div><b class="rom-big">' + py + '</b><br>' +
          '声母 <b>' + (p.ini || '∅') + '</b> [' + P.initials[p.ini].ipa + ']：' + esc(P.initials[p.ini].hint) + '<br>' +
          '韵母 <b>' + p.vow + '</b> [' + P.vowels[p.vow].ipa + ']：' + esc(P.vowels[p.vow].hint) + '<br>' +
          '声调：' + esc(P.tones[p.tone].name) + ' ' + P.tones[p.tone].value + '</div>';
        info.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    });
    var inp = app.querySelector('.conv-in'), out = app.querySelector('.conv-out');
    inp.addEventListener('input', function () {
      var v = inp.value;
      if (Array.from(v).some(LX.isYi)) { out.className = 'conv-out'; out.textContent = LX.yiPinyin(v); }
      else { out.className = 'conv-out yi'; out.textContent = LX.yiFromPinyin(v); }
    });
  }

  function boScript() {
    var A = LX.BO_ALPHA;
    page('#/course/bo', '<div class="card"><h1>藏文字母表</h1><p class="muted">包含 30 个辅音字母（按高低声调着色）、4 个元音符号、前后加字与上下加字叠字表。</p></div>' +
      '<section class="card tool"><h2>藏文 → 威利转写</h2><p class="muted">贴入藏文，自动转成威利转写（Wylie / EWTS 的常用部分），可以用来核对拼写。</p>' +
      '<textarea class="conv-in bo" rows="3" placeholder="བཀྲ་ཤིས་བདེ་ལེགས།"></textarea><div class="conv-out"></div></section>' +
      '<section class="card"><h2>30 个辅音字母</h2>' + LX.tpl.boConsonantTable(0, 30) + '</section>' +
      '<section class="card"><h2>4 个元音符号</h2>' + LX.tpl.boVowelTable() + '</section>' +
      '<section class="card"><h2>前加字与后加字</h2><p>前加字（5 个）：<span class="bo big">' + A.prefixes.join(' ') + '</span>，写在基字前面，不发音。</p>' +
      '<p>第二后加字：<span class="bo big">' + A.postsuffixes.join(' ') + '</span>（现代只用 ས，不发音）。</p>' + LX.tpl.boSuffixTable() + '</section>' +
      '<section class="card"><h2>叠字</h2>' + LX.tpl.boStackTable() + '</section>', 'bo');
    var inp = app.querySelector('.conv-in'), out = app.querySelector('.conv-out');
    inp.addEventListener('input', function () { out.textContent = LX.boWylie(inp.value); });
  }

  function lisuScript() {
    page('#/course/lisu', '<div class="card"><h1>老傈僳文（富能仁字母）字母表</h1>' +
      '<p>老傈僳文（Fraser Script，Unicode <code>U+A4D0–U+A4FF</code>）由正写与倒转的大写拉丁字母组成，包含 30 个辅音字母、10 个元音字母和 6 个标点式声调符号。</p></div>' +
      '<section class="card tool"><h2>老傈僳文 ⇄ 拼音转换</h2><p class="muted">贴入老傈僳文得到拉丁转写；输入拼音（如 <code>li-su</code> 或 <code>at-pa</code>）得到老傈僳文。</p>' +
      '<textarea class="conv-in lisu" rows="3" placeholder="ꓡꓲ-ꓢꓴ 或 li-su"></textarea><div class="conv-out"></div></section>' +
      '<section class="card"><h2>30 个辅音字母</h2>' + LX.tpl.lisuConsonantTable(0, 30) + '</section>' +
      '<section class="card"><h2>10 个元音字母</h2>' + LX.tpl.lisuVowelTable() + '</section>' +
      '<section class="card"><h2>6 个声调符号</h2>' + LX.tpl.lisuToneTable() + '</section>', 'lisu');
    var inp = app.querySelector('.conv-in'), out = app.querySelector('.conv-out');
    inp.addEventListener('input', function () {
      var v = inp.value;
      if (Array.from(v).some(LX.isLisu)) { out.className = 'conv-out'; out.textContent = LX.lisuRoman(v); }
      else { out.className = 'conv-out lisu'; out.textContent = LX.lisuFromRoman(v); }
    });
  }

  function ugScript() {
    page('#/course/ug', '<div class="card"><h1>维吾尔文字母表（老维文 ⇄ 拉丁维文 ULY）</h1>' +
      '<p>现代维吾尔文字母表共 32 个字母（8 个元音、24 个辅音），从右往左书写。与阿拉伯文不同，维吾尔文把所有元音都完整写出来，词首元音前固定加静音隔音符 <span class="ug">ئ</span>（hemze）。</p></div>' +
      '<section class="card tool"><h2>维吾尔文 ⇄ 拉丁维文（ULY）转换</h2><p class="muted">贴入维吾尔文自动转成拉丁维文（ULY）；输入拉丁维文（如 <code>yaxshimusiz</code>）转成维吾尔文。</p>' +
      '<textarea class="conv-in ug" rows="3" placeholder="ياخشىمۇسىز 或 yaxshimusiz"></textarea><div class="conv-out"></div></section>' +
      '<section class="card"><h2>8 个元音字母（和谐分组）</h2>' + LX.tpl.ugVowelTable() + '</section>' +
      '<section class="card"><h2>24 个辅音字母</h2>' + LX.tpl.ugConsonantTable(0, 24) + '</section>', 'ug');
    var inp = app.querySelector('.conv-in'), out = app.querySelector('.conv-out');
    inp.addEventListener('input', function () {
      var v = inp.value;
      if (Array.from(v).some(LX.isUg)) { out.className = 'conv-out'; out.textContent = LX.ugULY(v); }
      else { out.className = 'conv-out ug'; out.textContent = LX.ugFromULY(v); }
    });
  }

  function mnScript() {
    page('#/course/mn', '<div class="card"><h1>传统蒙文字母表（胡都木蒙文）</h1>' +
      '<p>传统蒙古文（Hudum Mongolian，Unicode <code>U+1800–U+18AF</code>）包含 7 个基本元音和 20 多个辅音字母，严格遵循元音和谐律（阳性、阴性、中性元音）与格助词黏着规则。</p></div>' +
      '<section class="card tool"><h2>传统蒙文 ⇄ 拉丁转写转换</h2><p class="muted">贴入传统蒙文转成拉丁转写；输入拉丁转写（如 <code>sayin bayin-a</code>）转成传统蒙文。</p>' +
      '<textarea class="conv-in mn" rows="3" placeholder="ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ 或 sayin bayin-a"></textarea><div class="conv-out"></div></section>' +
      '<section class="card"><h2>7 个元音字母与元音和谐</h2>' + LX.tpl.mnVowelTable() + '</section>' +
      '<section class="card"><h2>常用辅音字母</h2>' + LX.tpl.mnConsonantTable(0, 20) + '</section>' +
      '<section class="card"><h2>常用格助词与后缀</h2>' + LX.tpl.mnCaseTable() + '</section>', 'mn');
    var inp = app.querySelector('.conv-in'), out = app.querySelector('.conv-out');
    inp.addEventListener('input', function () {
      var v = inp.value;
      if (Array.from(v).some(LX.isMn)) { out.className = 'conv-out'; out.textContent = LX.mnWylie(v); }
      else { out.className = 'conv-out mn'; out.textContent = LX.mnFromWylie(v); }
    });
  }

  /* ---------- 词表 ---------- */
  function words(cid, q) {
    var c = LX.courses[cid];
    if (!c) return notFound();
    var all = LX.allItems(cid);
    var rows = all.map(function (x) {
      var w = x.item;
      var r = (cid === 'bo' || cid === 'mn') ? (w.t === 'letter' ? w.w + ' · 读 ' + w.p : (w.p || '') + ' · ' + (w.w || '')) : LX.roman(cid, w);
      var rec = LX.srs.get(x.key);
      var state = !rec ? 'new' : (rec.due <= Date.now() ? 'due' : 'learned');
      return '<tr data-state="' + state + '" data-text="' + esc((w.s + ' ' + r + ' ' + w.m).toLowerCase()) + '">' +
        '<td class="' + sc(cid) + '">' + esc(w.s) + '</td><td class="rom-inline">' + esc(r) + '</td><td>' + esc(w.m) + '</td>' +
        '<td><a href="#/text/' + cid + '/' + x.lesson.id + '">' + esc(x.lesson.title) + '</a></td><td>' + boxDots(x.key) + '</td></tr>';
    }).join('');
    page('#/course/' + cid, '<div class="card"><h1>' + esc(c.name) + '词表</h1>' +
      '<div class="filters"><input class="w-search" type="search" placeholder="搜索文字、注音或意思">' +
      '<select class="w-filter"><option value="all">全部（' + all.length + '）</option><option value="learned">已学</option><option value="due">到期待复习</option><option value="new">未学</option></select></div>' +
      '<div class="table-scroll"><table class="wordtable full"><tr><th>文字</th><th>' + esc(c.romanName) + '</th><th>意思</th><th>课</th><th>复习</th></tr>' + rows + '</table></div>' +
      '<p class="muted">复习盒子 1–6：答对一次升一格，间隔依次是 1、2、4、7、14、30 天；答错回到第 1 格。</p></div>', cid);
    var s = app.querySelector('.w-search'), f = app.querySelector('.w-filter');
    function apply() {
      var t = s.value.trim().toLowerCase(), v = f.value;
      app.querySelectorAll('.wordtable tr[data-state]').forEach(function (tr) {
        var ok = (!t || tr.dataset.text.indexOf(t) >= 0) &&
          (v === 'all' || (v === 'learned' ? tr.dataset.state !== 'new' : tr.dataset.state === v));
        tr.hidden = !ok;
      });
    }
    s.addEventListener('input', apply);
    f.addEventListener('change', apply);
  }

  /* ---------- 学习方法 ---------- */
  function method() {
    var stageList = LX.courseOrder.map(function (cid) {
      var c = LX.courses[cid];
      return '<div class="roadmap-item"><h3>' + esc(c.name) + ' <small class="muted">（' + esc(c.variety) + '）</small></h3><ol>' + c.stages.map(function (s) {
        return '<li><b>' + esc(s.level) + ' · ' + esc(s.title) + '</b>：' + esc(s.desc) +
          (s.lessons.length ? '（共 ' + s.lessons.length + ' 课）' : '（规划中）') + '</li>';
      }).join('') + '</ol></div>';
    }).join('');
    page('#/method', '<div class="card"><h1>学习方法与课程路线图</h1>' +
      '<p class="muted">借鉴 Babbel 的对话式微课设计与莱特纳间隔复习法，帮助你在每天 15 分钟内扎实掌握多民族语言的文字、发音与日常交流。</p></div>' +
      '<section class="card"><h2>Babbel 式学习的六个要点</h2><ol class="method">' +
      '<li><b>短课。</b>每课 10–15 分钟，只学 8–12 个新词或字母，学完就能用上。</li>' +
      '<li><b>从对话出发。</b>会话课围绕一个真实场景（路上相遇、做客、买东西），新词都出现在对话里。</li>' +
      '<li><b>用母语讲解。</b>发音、语法、文化点用中文讲，穿插在练习中间：讲完马上练。</li>' +
      '<li><b>主动回忆，逐步加难。</b>先看新词，马上认读（选意思），再反过来产出（选文字）、配对、拼词、写拼音，最后在句子里补词、排句子。</li>' +
      '<li><b>错了再来。</b>答错的题会在本课最后再出一次，课程结束时列出需要多练的词。</li>' +
      '<li><b>间隔复习。</b>学过的词进入复习盒子，答对后间隔 1、2、4、7、14、30 天再出现，答错回到第一格。每天先复习、再学新课。</li></ol></section>' +
      '<section class="card"><h2>五门语言课程路线图</h2><div class="roadmap-grid">' + stageList + '</div></section>' +
      '<section class="card"><h2>建议的节奏与来源说明</h2><ul>' +
      '<li><b>每天 15–20 分钟：</b>先清空到期复习，再学一课。宁可每天少一点，也不要一周突击一次。</li>' +
      '<li><b>多语言学习：</b>先把一门的「文字与发音」阶段学完再开始另一门；进入会话阶段后可以隔天交替。</li>' +
      '<li><b>朗读和跟读：</b>每课学完打开「课文」页，大声朗读会话，用「跟读」按钮录音对比。</li>' +
      '<li><b>内容来源：</b>彝语会话取自 BabelStone《600 Phrases in the Liangshan Yi Dialect》（《凉山彝语会话六百句》英译本）及凉山传统谚语；藏语、傈僳语、维吾尔语、蒙古语会话根据标准教材与词典编写，并用自动转写程序逐词核对拼写。</li></ul></section>');
  }

  /* ---------- 设置 ---------- */
  function settings() {
    var s = LX.store.data.settings;
    page('#/settings', '<div class="card"><h1>设置与进度管理</h1><section class="form">' +
      '<label><input type="checkbox" name="roman"' + (s.roman ? ' checked' : '') + '> 在题目和会话里显示拼音 / 注音</label>' +
      '<label>藏文与蒙文的拉丁字母写法 <select name="boRoman"><option value="p">简易注音（口语读音）</option><option value="w">书面转写（威利 / 拉丁转写）</option><option value="both">两种都显示</option></select></label>' +
      '<label>每日目标 <select name="goal"><option value="15">15 分</option><option value="30">30 分</option><option value="50">50 分</option><option value="80">80 分</option></select></label>' +
      '<label><input type="checkbox" name="big"' + (s.big ? ' checked' : '') + '> 大字号</label>' +
      '</section></div><section class="card"><h2>进度备份</h2><p class="muted">进度只存在这台设备的浏览器里。换设备或清理浏览器数据前，先导出备份。</p>' +
      '<div class="cc-actions"><button class="btn primary" data-act="export">导出进度 (.json)</button><label class="btn">导入进度<input type="file" accept="application/json,.json" hidden data-act="import"></label>' +
      '<button class="btn danger" data-act="reset">清空所有进度</button></div><p class="msg muted"></p></section>');
    ['boRoman', 'goal'].forEach(function (k) { app.querySelector('[name=' + k + ']').value = String(s[k]); });
    app.querySelectorAll('.form input, .form select').forEach(function (el) {
      el.addEventListener('change', function () {
        s[el.name] = el.type === 'checkbox' ? el.checked : (el.name === 'goal' ? +el.value : el.value);
        LX.store.save();
        applyTheme();
      });
    });
    var msg = app.querySelector('.msg');
    app.querySelector('[data-act=export]').addEventListener('click', function () {
      var blob = new Blob([LX.store.exportJSON()], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'yi-bo-progress-' + U.today() + '.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    app.querySelector('[data-act=import]').addEventListener('change', function (e) {
      var f = e.target.files[0];
      if (!f) return;
      f.text().then(function (t) {
        try { LX.store.importJSON(t); msg.textContent = '导入成功。'; applyTheme(); }
        catch (err) { msg.textContent = '导入失败：' + err.message; }
      });
    });
    app.querySelector('[data-act=reset]').addEventListener('click', function () {
      if (confirm('确定清空所有学习进度和复习记录吗？这一步无法撤销。')) { LX.store.reset(); msg.textContent = '已清空。'; applyTheme(); }
    });
  }

  function notFound() {
    page('', '<div class="card done-card"><h1>找不到这个页面</h1><p><a class="btn primary" href="#/">回首页</a></p></div>');
  }

  /* ---------- 全局交互：查词、跟读、播放、会话开关 ---------- */
  var pop = document.createElement('div');
  pop.className = 'gloss-pop';
  pop.hidden = true;
  document.body.appendChild(pop);

  document.addEventListener('click', function (e) {
    var tok = e.target.closest('.tok[data-tok]');
    if (tok) {
      var cid = document.body.dataset.course;
      var g = cid && LX.glossary(cid)[tok.dataset.tok];
      var r = cid === 'yi' ? LX.yiPinyin(tok.dataset.tok)
        : cid === 'lisu' ? LX.lisuRoman(tok.dataset.tok)
        : cid === 'ug' ? LX.ugULY(tok.dataset.tok)
        : cid === 'mn' ? LX.mnWylie(tok.dataset.tok)
        : LX.boWylie(tok.dataset.tok);
      pop.innerHTML = '<b class="' + sc(cid) + '">' + esc(tok.dataset.tok) + '</b> <small>' + esc(r) + '</small><br>' + (g ? esc(g.join('；')) : '<span class="muted">（词表里还没有这个词）</span>');
      var rc = tok.getBoundingClientRect();
      pop.hidden = false;
      pop.style.left = Math.max(8, Math.min(window.innerWidth - 260, rc.left + window.scrollX)) + 'px';
      pop.style.top = (rc.bottom + window.scrollY + 6) + 'px';
      e.stopPropagation();
      return;
    }
    if (!e.target.closest('.gloss-pop')) pop.hidden = true;
    var play = e.target.closest('.play[data-src]');
    if (play) LX.playAudio(play.dataset.src);
    var referenceReplay = e.target.closest('.reference-replay[data-src]');
    if (referenceReplay) LX.playAudio(referenceReplay.dataset.src);
    var rec = e.target.closest('.rec');
    if (rec) recorder(rec);
  });

  document.addEventListener('change', function (e) {
    var d = e.target.closest('.dlg');
    if (!d) return;
    if (e.target.classList.contains('t-trans')) {
      d.classList.toggle('no-trans', !e.target.checked);
      LX.store.data.settings.hideTrans = !e.target.checked;
      LX.store.save();
    }
    if (e.target.classList.contains('t-ilin')) d.classList.toggle('ilin-on', e.target.checked);
  });

  /* 跟读：录 8 秒以内，停止后自动回放（录音不保存） */
  var recState = null;
  function recorder(btn) {
    if (recState) { recState.rec.stop(); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var chunks = [], rec = new MediaRecorder(stream);
      recState = { rec: rec, btn: btn };
      btn.classList.add('on');
      btn.textContent = '■ 停止';
      rec.ondataavailable = function (ev) { chunks.push(ev.data); };
      rec.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        btn.classList.remove('on');
        btn.textContent = '🎙 跟读';
        recState = null;
        var url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType }));
        new Audio(url).play();
      };
      rec.start();
      setTimeout(function () { if (recState && recState.rec === rec) rec.stop(); }, 8000);
    }).catch(function () { alert('无法使用麦克风：请在浏览器里允许录音。'); });
  }

  function applyTheme() {
    var s = LX.store.data.settings;
    document.documentElement.dataset.theme = s.theme;
    document.documentElement.classList.toggle('big', !!s.big);
  }

  /* ---------- 路由 ---------- */
  function route() {
    var h = location.hash.replace(/^#/, '') || '/';
    var qi = h.indexOf('?'), q = {};
    if (qi >= 0) {
      h.slice(qi + 1).split('&').forEach(function (kv) { var p = kv.split('='); q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
      h = h.slice(0, qi);
    }
    var p = h.split('/').filter(Boolean);
    pop.hidden = true;
    if (recState) recState.rec.stop();
    switch (p[0]) {
      case undefined: return home();
      case 'course': return course(p[1]);
      case 'lesson': return lessonStart(p[1], p[2]);
      case 'play': return play(p[1], p[2], q);
      case 'text': return text(p[1], p[2]);
      case 'review': return review(p[1], p[2] === 'extra', q);
      case 'script': return script(p[1], q);
      case 'words': return words(p[1], q);
      case 'method': return method();
      case 'settings': return settings();
      default: return notFound();
    }
  }

  LX.store.load();
  applyTheme();
  window.addEventListener('hashchange', route);
  route();
})();
