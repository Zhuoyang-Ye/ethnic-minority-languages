/* 练习模块
   1. LX.buildLesson / LX.buildReview：把一课（或到期的复习词）排成 Babbel 式的练习队列；
   2. LX.Player：一步一步显示练习、判分，答错的题会在最后再出一次。 */
(function () {
  'use strict';
  var U = LX.util, esc = U.esc;

  /* ---------- 小工具 ---------- */
  function sc(cid) { return LX.scriptClass(cid); }
  function scriptHTML(cid, s, extra) { return '<span class="' + sc(cid) + (extra ? ' ' + extra : '') + '">' + esc(s) + '</span>'; }
  function romanLine(cid, item) {
    if (!LX.settings().roman) return '';
    var r = LX.roman(cid, item);
    return r ? '<div class="rom">' + esc(r) + '</div>' : '';
  }
  function sameKind(a, b) { return !!a.t === !!b.t && !!a.tone === !!b.tone; }
  function labelOf(item) { return item.t === 'letter' ? item.w : item.m; }

  /* 从本课、再从整门课里找干扰项：field 的值不能和正确答案一样 */
  function distractors(item, pool, field, n, ok) {
    var seen = {}, out = [];
    seen[item[field]] = 1;
    [U.shuffle(pool.lesson), U.shuffle(pool.all)].forEach(function (list) {
      list.forEach(function (x) {
        if (out.length >= n || x === item || !x[field] || seen[x[field]]) return;
        if (ok && !ok(x)) return;
        seen[x[field]] = 1;
        out.push(x);
      });
    });
    return out;
  }

  /* 字形干扰项：优先挑音节数相同的 */
  function scriptDistractors(cid, item, pool, n) {
    var len = LX.pieces(cid, item.s).length;
    var cands = distractors(item, pool, 's', 12, function (x) { return sameKind(x, item) && labelOf(x) !== labelOf(item); });
    cands.sort(function (a, b) {
      return Math.abs(LX.pieces(cid, a.s).length - len) - Math.abs(LX.pieces(cid, b.s).length - len);
    });
    return U.shuffle(cands.slice(0, n));
  }

  function mc(title, prompt, items, correctItem, render, extra) {
    return Object.assign({
      kind: 'mc', title: title, prompt: prompt,
      options: U.shuffle(items).map(function (x) { return { html: render(x), correct: x === correctItem }; })
    }, extra || {});
  }

  /* ---------- 各种题型 ---------- */

  /* 认读：看文字 → 选意思（字母：选名称） */
  function stepRecognize(cid, item, pool) {
    var ds = distractors(item, pool, item.t === 'letter' ? 'w' : 'm', 3, function (x) { return sameKind(x, item); });
    return mc(item.t === 'letter' ? '这个字母叫什么？' : '这是什么意思？',
      '<div class="prompt-script">' + scriptHTML(cid, item.s, 'big') + (item.t === 'letter' ? '' : romanLine(cid, item)) + '</div>',
      [item].concat(ds), item, function (x) { return esc(labelOf(x)); },
      { key: LX.itemKey(cid, item), item: item });
  }

  /* 产出：看意思 → 选文字 */
  function stepProduce(cid, item, pool) {
    var ds = scriptDistractors(cid, item, pool, 3);
    return mc(item.t === 'letter' ? '哪个是这个字母？' : '怎么说？',
      '<div class="prompt-text">' + esc(labelOf(item)) + '</div>',
      [item].concat(ds), item, function (x) { return scriptHTML(cid, x.s); },
      { key: LX.itemKey(cid, item), item: item, optClass: 'opt-script' });
  }

  /* 字母的读音：看字母 → 选「读音 · 声调」 */
  function stepLetterSound(cid, item, pool) {
    var ds = distractors(item, pool, 'm', 3, function (x) { return sameKind(x, item); });
    return mc('这个字母怎么读？', '<div class="prompt-script">' + scriptHTML(cid, item.s, 'big') + '</div>',
      [item].concat(ds), item, function (x) { return esc(x.m); },
      { key: LX.itemKey(cid, item), item: item });
  }

  /* 拼读：看注音 → 选文字 */
  function stepRomanToScript(cid, item, pool) {
    var r = LX.roman(cid, item);
    var ds = scriptDistractors(cid, item, pool, 3).filter(function (x) { return LX.roman(cid, x) !== r; });
    return mc('哪个读作「' + r + '」？', '<div class="prompt-text rom-big">' + esc(r) + '</div>',
      [item].concat(ds), item, function (x) { return scriptHTML(cid, x.s); },
      { key: LX.itemKey(cid, item), item: item, optClass: 'opt-script' });
  }

  /* 认音：看文字 → 选注音 */
  function stepScriptToRoman(cid, item, pool) {
    var r = LX.roman(cid, item);
    var ds = distractors(item, pool, 's', 8, function (x) { return sameKind(x, item) && LX.roman(cid, x) !== r; });
    var seen = {}; seen[r] = 1;
    ds = ds.filter(function (x) { var k = LX.roman(cid, x); if (seen[k]) return false; seen[k] = 1; return true; }).slice(0, 3);
    return mc('这个怎么读？', '<div class="prompt-script">' + scriptHTML(cid, item.s, 'big') + '</div>',
      [item].concat(ds), item, function (x) { return esc(LX.roman(cid, x)); },
      { key: LX.itemKey(cid, item), item: item });
  }

  /* 拼词：把音节卡片排成一个词 */
  function stepBuildWord(cid, item, pool) {
    var pieces = LX.pieces(cid, item.s);
    if (pieces.length < 2) return null;
    var extra = [];
    U.shuffle(pool.lesson.concat(pool.all)).some(function (x) {
      if (x.t === 'letter') return false;
      LX.pieces(cid, x.s).forEach(function (p) { if (pieces.indexOf(p) < 0 && extra.indexOf(p) < 0 && extra.length < 2) extra.push(p); });
      return extra.length >= 2;
    });
    return {
      kind: 'build', title: '拼出这个词', key: LX.itemKey(cid, item), item: item,
      prompt: '<div class="prompt-text">' + esc(item.m) + '</div>' + romanLine(cid, item),
      target: pieces, tiles: U.shuffle(pieces.concat(extra))
    };
  }

  /* 写拼音：看彝文 → 输入彝文拼音 */
  function stepType(cid, item) {
    var ans = LX.yiPinyin(LX.tileLabel(item.s));
    return {
      kind: 'type', title: '写出彝文拼音', key: LX.itemKey(cid, item), item: item,
      prompt: '<div class="prompt-script">' + scriptHTML(cid, item.s, 'big') + '</div><div class="prompt-sub">' + esc(item.m) + '</div>',
      answers: [ans], placeholder: '例如 nga、zzyr muo（声调字母 t/x/p 要写）'
    };
  }

  /* 配对：文字 ↔ 意思 */
  function stepMatch(cid, items) {
    return {
      kind: 'match', title: '把左右两边配成对',
      pairs: items.map(function (x) { return { a: scriptHTML(cid, x.s), b: esc(labelOf(x)), key: LX.itemKey(cid, x) }; })
    };
  }

  /* 会话：补全句子里缺的词 */
  function stepFill(cid, lesson, line, labelPool) {
    var labels = LX.tokens(line).map(LX.tileLabel);
    var words = (lesson.words || []).map(function (w) { return LX.tileLabel(w.s); });
    var idxs = labels.map(function (l, i) { return i; }).filter(function (i) { return labels[i] && words.indexOf(labels[i]) >= 0; });
    if (!idxs.length) idxs = labels.map(function (l, i) { return i; }).filter(function (i) { return labels[i]; });
    if (!idxs.length) return null;
    var idx = U.pick(idxs), ans = labels[idx];
    var others = U.sample(labelPool.filter(function (x) { return x !== ans && labels.indexOf(x) < 0; }), 2);
    if (others.length < 2) return null;
    return {
      kind: 'fill', title: '补全对话', line: line, idx: idx,
      options: U.shuffle([ans].concat(others)).map(function (o) { return { label: o, correct: o === ans }; })
    };
  }

  /* 会话：把打乱的词排成句子 */
  function stepBuildLine(cid, line, labelPool) {
    var labels = LX.tokens(line).map(LX.tileLabel).filter(Boolean);
    if (labels.length < 3 || labels.length > 8) return null;
    var extra = labels.length <= 5 ? U.sample(labelPool.filter(function (x) { return labels.indexOf(x) < 0; }), 1) : [];
    return {
      kind: 'build', title: '把句子排好', line: line,
      prompt: '<div class="prompt-text">' + esc(line.m) + '</div>',
      target: labels, tiles: U.shuffle(labels.concat(extra))
    };
  }

  /* 会话：看句子 → 选意思 */
  function stepTranslateLine(cid, line, lines) {
    var others = U.sample(U.uniq(lines.map(function (l) { return l.m; })).filter(function (m) { return m !== line.m; }), 2);
    var roman = LX.settings().roman ? '<div class="rom">' + esc(LX.lineRoman(cid, line)) + '</div>' : '';
    return {
      kind: 'mc', title: '这句话是什么意思？',
      prompt: '<div class="prompt-line">' + LX.lineHTML(cid, line) + roman + '</div>',
      options: U.shuffle([line.m].concat(others)).map(function (m) { return { html: esc(m), correct: m === line.m }; })
    };
  }

  /* 课文里写好的选择题 */
  function stepCustom(cid, ex) {
    if (ex.type !== 'choice') return null;
    return {
      kind: 'mc', title: '想一想', prompt: '<div class="prompt-text">' + esc(ex.q) + '</div>',
      optClass: ex.script ? 'opt-script ' + sc(cid) : '',
      options: U.shuffle(ex.options.map(function (o, i) { return { html: esc(o), correct: i === ex.answer }; })),
      explain: ex.explain
    };
  }

  function practiceStep(cid, w, pool, scriptLesson, j) {
    if (w.t === 'letter') return (w.tone && j % 2) ? stepLetterSound(cid, w, pool) : stepProduce(cid, w, pool);
    if (scriptLesson) {
      var fns = [stepRomanToScript, stepScriptToRoman];
      if (cid === 'yi') fns.push(stepType);
      return fns[j % fns.length](cid, w, pool);
    }
    if (j % 2 === 0) return stepBuildWord(cid, w, pool) || stepProduce(cid, w, pool);
    return stepProduce(cid, w, pool);
  }

  function evenly(list, k) {
    if (list.length <= k) return list;
    var out = [];
    for (var i = 0; i < k; i++) out.push(list[Math.round(i * (list.length - 1) / (k - 1))]);
    return out;
  }

  function dialogueSteps(cid, lesson) {
    var seen = {};
    var lines = lesson.dialogue.lines.filter(function (l) { if (seen[l.s]) return false; seen[l.s] = 1; return true; });
    var labelPool = U.uniq([].concat.apply([], lines.map(function (l) { return LX.tokens(l).map(LX.tileLabel); }))).filter(Boolean);
    var steps = [];
    evenly(lines, 6).forEach(function (line, t) {
      var s = null, kind = ['build', 'fill', 'translate'][t % 3];
      if (kind === 'build') s = stepBuildLine(cid, line, labelPool);
      if (!s && kind !== 'translate') s = stepFill(cid, lesson, line, labelPool);
      if (!s) s = stepTranslateLine(cid, line, lines);
      steps.push(s);
    });
    return steps;
  }

  function uniqueBy(list, f) {
    var seen = {};
    return list.filter(function (x) { var k = f(x); if (seen[k]) return false; seen[k] = 1; return true; });
  }

  /* ---------- 一课的练习队列 ---------- */
  LX.buildLesson = function (cid, lesson) {
    var words = lesson.words || [];
    var pool = { lesson: words, all: LX.allItems(cid).map(function (x) { return x.item; }) };
    var steps = [];
    var tips = lesson.tips || [];
    function tipsAt(at) {
      tips.forEach(function (t) { if ((t.at || 'start') === at) steps.push({ kind: 'tip', tip: t }); });
    }
    var scriptLesson = lesson.kind === 'script';

    tipsAt('start');
    // ① 学新词：每 3 个一组，先看再马上认一遍
    for (var i = 0; i < words.length; i += 3) {
      var g = words.slice(i, i + 3);
      g.forEach(function (w) { steps.push({ kind: 'intro', item: w }); });
      U.shuffle(g).forEach(function (w) { steps.push(stepRecognize(cid, w, pool)); });
    }
    tipsAt('mid');
    // ② 巩固：配对 + 反向练习（文字课每个都练）
    var matchItems = uniqueBy(U.shuffle(words), labelOf).slice(0, 5);
    if (matchItems.length >= 3) steps.push(stepMatch(cid, matchItems));
    var rest = scriptLesson ? words : words.filter(function (w) { return matchItems.indexOf(w) < 0; });
    U.shuffle(rest).forEach(function (w, j) {
      var s = practiceStep(cid, w, pool, scriptLesson, j);
      if (s) steps.push(s);
    });
    // ③ 会话：先读一遍，再做补全、排序、理解
    if (lesson.dialogue) {
      steps.push({ kind: 'dialogue', dialogue: lesson.dialogue });
      dialogueSteps(cid, lesson).forEach(function (s) { steps.push(s); });
    }
    // ④ 课文里的思考题
    (lesson.exercises || []).forEach(function (ex) { var s = stepCustom(cid, ex); if (s) steps.push(s); });
    tipsAt('end');
    return steps;
  };

  /* ---------- 复习队列：盒子越高，题目越难 ---------- */
  LX.buildReview = function (cid, entries) {
    var pool = { lesson: entries.map(function (x) { return x.item; }), all: LX.allItems(cid).map(function (x) { return x.item; }) };
    return entries.map(function (x, j) {
      var r = LX.srs.get(x.key) || { box: 1 };
      var w = x.item, s = null;
      if (w.t === 'letter') s = r.box <= 2 ? stepRecognize(cid, w, pool) : (w.tone && j % 2 ? stepLetterSound(cid, w, pool) : stepProduce(cid, w, pool));
      else if (r.box <= 2) s = stepRecognize(cid, w, pool);
      else if (r.box <= 4) s = (j % 2 ? stepBuildWord(cid, w, pool) : null) || stepProduce(cid, w, pool);
      else s = (cid === 'yi' && j % 2 ? stepType(cid, w) : stepBuildWord(cid, w, pool)) || stepProduce(cid, w, pool);
      return s;
    });
  };

  /* ---------- 播放器 ---------- */
  var KIND_NAME = { pron: '发音', grammar: '语法', culture: '文化' };

  function Player(root, opts) {
    this.root = root;
    this.cid = opts.cid;
    this.steps = opts.steps;
    this.mode = opts.mode || 'lesson';
    this.exitHref = opts.exitHref || '#/';
    this.onFinish = opts.onFinish;
    this.i = 0;
    this.correct = 0;
    this.graded = 0;
    this.missed = [];
  }

  Player.prototype.start = function (at) {
    this.i = Math.max(0, Math.min(at || 0, this.steps.length - 1));
    this.render();
  };

  Player.prototype.shell = function (body, foot) {
    var total = this.steps.length;
    var pct = Math.round(this.i / total * 100);
    this.root.innerHTML =
      '<div class="player">' +
      '<div class="p-top"><a class="p-close" href="' + this.exitHref + '" title="退出（进度不保存）">✕</a>' +
      '<div class="p-bar"><i style="width:' + pct + '%"></i></div><span class="p-count">' + (this.i + 1) + ' / ' + total + '</span></div>' +
      '<div class="p-body">' + body + '</div>' +
      '<div class="p-foot"><div class="p-fb"></div>' + (foot || '<button class="btn primary p-go">继续</button>') + '</div>' +
      '</div>';
    var go = this.root.querySelector('.p-go');
    if (go) go.focus({ preventScroll: true });
  };

  Player.prototype.render = function () {
    if (this.i >= this.steps.length) return this.finish();
    var st = this.steps[this.i];
    this.cur = st;
    st.done = false;
    var fn = this['render_' + st.kind];
    fn.call(this, st);
    var self = this;
    var go = this.root.querySelector('.p-go');
    if (go) go.addEventListener('click', function () { self.onGo(); });
  };

  Player.prototype.onGo = function () {
    var st = this.cur;
    if (st.check && !st.done) return st.check();
    this.i += 1;
    this.render();
  };

  /* 判分：每道题只算第一次；答错的题复制一份放到最后 */
  Player.prototype.grade = function (ok, st, correctHTML) {
    if (st.done) return;
    st.done = true;
    if (!st.retry) {
      this.graded += 1;
      if (ok) this.correct += 1;
      if (this.mode === 'review' && st.key) LX.srs.grade(st.key, ok);
      if (!ok) {
        if (st.item) this.missed.push(st.item);
        var copy = Object.assign({}, st, { retry: true, done: false });
        if (copy.options) copy.options = U.shuffle(copy.options.map(function (o) { return Object.assign({}, o); }));
        if (copy.tiles) copy.tiles = U.shuffle(copy.tiles);
        delete copy.check;
        this.steps.push(copy);
      }
    }
    if (ok) LX.store.addXP(1);
    LX.store.save();
    var foot = this.root.querySelector('.p-foot');
    foot.classList.add(ok ? 'ok' : 'bad');
    var fb = this.root.querySelector('.p-fb');
    fb.innerHTML = ok ? '<b>答对了！</b>' + (correctHTML ? '<div>' + correctHTML + '</div>' : '')
      : '<b>正确答案：</b><div>' + (correctHTML || '') + '</div>' + (st.retry ? '' : '<small>这道题稍后会再出现一次。</small>');
    var go = this.root.querySelector('.p-go');
    go.textContent = '继续';
    go.disabled = false;
    go.focus({ preventScroll: true });
  };

  Player.prototype.finish = function () {
    if (this.onFinish) this.onFinish({ correct: this.correct, graded: this.graded, missed: this.missed });
  };

  /* --- 讲解卡 --- */
  Player.prototype.render_tip = function (st) {
    var t = st.tip;
    var html = typeof t.html === 'function' ? t.html() : t.html;
    this.shell('<div class="card tip tip-' + (t.kind || 'grammar') + '"><div class="tip-kind">' + (KIND_NAME[t.kind] || '提示') + '</div>' +
      '<h2>' + esc(t.title) + '</h2><div class="tip-body">' + html + '</div></div>');
  };

  /* --- 新词卡 --- */
  Player.prototype.render_intro = function (st) {
    this.shell('<div class="card intro"><div class="intro-label">' + (st.item.t === 'letter' ? '新字母' : '新词') + '</div>' +
      LX.itemCardHTML(this.cid, st.item) + '</div>');
  };

  /* --- 会话通读 --- */
  Player.prototype.render_dialogue = function (st) {
    this.shell('<div class="card dialogue-card"><div class="intro-label">会话</div>' + LX.dialogueHTML(this.cid, st.dialogue, { compact: false }) +
      '<p class="hint">先把会话读一遍：点词可以查意思，点「逐词」看每个词的注释。</p></div>');
  };

  /* --- 选择题 --- */
  Player.prototype.render_mc = function (st) {
    var self = this;
    this.shell('<h2 class="q-title">' + esc(st.title) + '</h2>' + st.prompt +
      '<div class="opts">' + st.options.map(function (o, i) {
        return '<button class="opt ' + (st.optClass || '') + '" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd>' + o.html + '</button>';
      }).join('') + '</div>', '<button class="btn primary p-go" disabled>继续</button>');
    var btns = this.root.querySelectorAll('.opt');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (st.done) return;
        var o = st.options[+b.dataset.i];
        btns.forEach(function (x) { x.disabled = true; if (st.options[+x.dataset.i].correct) x.classList.add('right'); });
        if (!o.correct) b.classList.add('wrong');
        var right = st.options.filter(function (x) { return x.correct; })[0];
        var extra = st.item ? LX.itemSummaryHTML(self.cid, st.item) : right.html;
        if (st.explain) extra += '<div class="explain">' + esc(st.explain) + '</div>';
        self.grade(o.correct, st, extra);
      });
    });
  };

  /* --- 补全对话 --- */
  Player.prototype.render_fill = function (st) {
    var self = this, cid = this.cid;
    var toks = LX.tokens(st.line);
    var lineHTML = toks.map(function (t, i) {
      var inner = i === st.idx ? '<span class="blank">＿＿</span>' + esc(LX.tokenTail(t)) : esc(t);
      return '<span class="tok">' + inner + '</span>' + (cid === 'bo' && i < toks.length - 1 && !/་$/.test(t) ? ' ' : '');
    }).join('');
    this.shell('<h2 class="q-title">' + esc(st.title) + '</h2>' +
      '<div class="prompt-line">' + (st.line.who ? '<div class="who">' + esc(st.line.who) + '</div>' : '') +
      '<span class="' + sc(cid) + ' line-s">' + lineHTML + '</span><div class="prompt-sub">' + esc(st.line.m) + '</div></div>' +
      '<div class="opts">' + st.options.map(function (o, i) {
        return '<button class="opt opt-script ' + sc(cid) + '" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd>' + esc(o.label) + '</button>';
      }).join('') + '</div>', '<button class="btn primary p-go" disabled>继续</button>');
    var btns = this.root.querySelectorAll('.opt');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (st.done) return;
        var o = st.options[+b.dataset.i];
        btns.forEach(function (x) { x.disabled = true; if (st.options[+x.dataset.i].correct) x.classList.add('right'); });
        if (!o.correct) b.classList.add('wrong');
        self.root.querySelector('.blank').outerHTML = '<span class="filled ' + (o.correct ? 'right' : 'wrong') + '">' + esc(o.label) + '</span>';
        self.grade(o.correct, st, LX.lineHTML(cid, st.line) + '<div class="rom">' + esc(LX.lineRoman(cid, st.line)) + '</div>');
      });
    });
  };

  /* --- 排序（拼词 / 排句子） --- */
  Player.prototype.render_build = function (st) {
    var self = this, cid = this.cid;
    var used = [];
    this.shell('<h2 class="q-title">' + esc(st.title) + '</h2>' + st.prompt +
      '<div class="build-ans ' + sc(cid) + '"></div><div class="build-bank ' + sc(cid) + '">' +
      st.tiles.map(function (t, i) { return '<button class="tile" data-i="' + i + '">' + esc(t) + '</button>'; }).join('') +
      '</div>', '<button class="btn primary p-go" disabled>检查</button>');
    var ans = this.root.querySelector('.build-ans');
    var bank = this.root.querySelectorAll('.build-bank .tile');
    var go = this.root.querySelector('.p-go');
    function draw() {
      ans.innerHTML = used.map(function (i, k) { return '<button class="tile in" data-k="' + k + '">' + esc(st.tiles[i]) + '</button>'; }).join('');
      bank.forEach(function (b) { b.classList.toggle('used', used.indexOf(+b.dataset.i) >= 0); });
      go.disabled = used.length === 0;
      ans.querySelectorAll('.tile').forEach(function (b) {
        b.addEventListener('click', function () { if (st.done) return; used.splice(+b.dataset.k, 1); draw(); });
      });
    }
    bank.forEach(function (b) {
      b.addEventListener('click', function () {
        if (st.done || used.indexOf(+b.dataset.i) >= 0) return;
        used.push(+b.dataset.i); draw();
      });
    });
    st.check = function () {
      var got = used.map(function (i) { return st.tiles[i]; });
      var ok = got.join('\u0001') === st.target.join('\u0001');
      ans.classList.add(ok ? 'right' : 'wrong');
      var correct = st.line ? LX.lineHTML(cid, st.line) + '<div class="rom">' + esc(LX.lineRoman(cid, st.line)) + '</div>'
        : LX.itemSummaryHTML(cid, st.item);
      self.grade(ok, st, correct);
    };
    draw();
  };

  /* --- 输入拼音 --- */
  Player.prototype.render_type = function (st) {
    var self = this;
    this.shell('<h2 class="q-title">' + esc(st.title) + '</h2>' + st.prompt +
      '<input class="type-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(st.placeholder || '') + '">',
      '<button class="btn primary p-go" disabled>检查</button>');
    var inp = this.root.querySelector('.type-in');
    var go = this.root.querySelector('.p-go');
    inp.focus();
    inp.addEventListener('input', function () { go.disabled = !inp.value.trim(); });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !go.disabled) { e.preventDefault(); self.onGo(); } });
    function norm(s) { return String(s).toLowerCase().replace(/[^a-z]/g, ''); }
    st.check = function () {
      var ok = st.answers.some(function (a) { return norm(a) === norm(inp.value); });
      inp.disabled = true;
      inp.classList.add(ok ? 'right' : 'wrong');
      self.grade(ok, st, LX.itemSummaryHTML(self.cid, st.item));
    };
  };

  /* --- 配对 --- */
  Player.prototype.render_match = function (st) {
    var self = this, cid = this.cid;
    var left = U.shuffle(st.pairs.map(function (p, i) { return i; }));
    var right = U.shuffle(st.pairs.map(function (p, i) { return i; }));
    this.shell('<h2 class="q-title">' + esc(st.title) + '</h2><div class="match">' +
      '<div class="col">' + left.map(function (i) { return '<button class="mt ' + sc(cid) + '" data-side="a" data-i="' + i + '">' + st.pairs[i].a + '</button>'; }).join('') + '</div>' +
      '<div class="col">' + right.map(function (i) { return '<button class="mt" data-side="b" data-i="' + i + '">' + st.pairs[i].b + '</button>'; }).join('') + '</div>' +
      '</div>', '<button class="btn primary p-go" disabled>继续</button>');
    var sel = { a: null, b: null }, mistakes = 0, matched = 0;
    var btns = this.root.querySelectorAll('.mt');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.classList.contains('done')) return;
        var side = b.dataset.side;
        if (sel[side]) sel[side].classList.remove('sel');
        sel[side] = b;
        b.classList.add('sel');
        if (sel.a && sel.b) {
          var A = sel.a, B = sel.b;
          sel = { a: null, b: null };
          if (A.dataset.i === B.dataset.i) {
            A.classList.remove('sel'); B.classList.remove('sel');
            A.classList.add('done'); B.classList.add('done');
            matched += 1;
            if (matched === st.pairs.length) self.grade(mistakes <= 1, st, mistakes ? '配错了 ' + mistakes + ' 次' : '全部配对正确');
          } else {
            mistakes += 1;
            A.classList.add('shake'); B.classList.add('shake');
            setTimeout(function () { A.classList.remove('sel', 'shake'); B.classList.remove('sel', 'shake'); }, 450);
          }
        }
      });
    });
  };

  /* 键盘：1–4 选选项，回车继续 */
  document.addEventListener('keydown', function (e) {
    var p = document.querySelector('.player');
    if (!p || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (/^[1-9]$/.test(e.key)) {
      var b = p.querySelectorAll('.opt')[+e.key - 1];
      if (b && !b.disabled) { e.preventDefault(); b.click(); }
    } else if (e.key === 'Enter') {
      var go = p.querySelector('.p-go');
      if (go && !go.disabled && document.activeElement !== go) { e.preventDefault(); go.click(); }
    }
  });

  LX.Player = Player;
})();
