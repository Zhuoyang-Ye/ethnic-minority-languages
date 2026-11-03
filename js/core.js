/* 核心模块：课程注册、文字工具（彝文拼音、藏文威利转写）、显示辅助、进度存储、间隔复习。
   全部挂在 window.LX 上；不需要构建工具，直接用 <script> 引入即可（也能在 file:// 下打开）。 */
(function () {
  'use strict';
  var LX = window.LX = window.LX || {};

  /* ---------- 小工具 ---------- */
  var U = LX.util = {
    esc: function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    },
    shuffle: function (a) {
      a = a.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    },
    sample: function (a, n) { return U.shuffle(a).slice(0, n); },
    pick: function (a) { return a[Math.floor(Math.random() * a.length)]; },
    uniq: function (a) { return Array.from(new Set(a)); },
    dayKey: function (t) {
      var d = new Date(t);
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    },
    today: function () { return U.dayKey(Date.now()); },
    startOfDay: function (t) { var d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); },
    addDays: function (t, n) { var d = new Date(t); d.setDate(d.getDate() + n); return d.getTime(); }
  };
  var esc = U.esc;

  /* ---------- 课程注册 ---------- */
  LX.courses = {};
  LX.courseOrder = [];

  LX.addCourse = function (c) {
    c.lessons = [];
    c.stages.forEach(function (st) { st.lessons = []; });
    LX.courses[c.id] = c;
    LX.courseOrder.push(c.id);
  };

  LX.addLessons = function (cid, sid, list) {
    var c = LX.courses[cid];
    if (!c) throw new Error('未知课程：' + cid);
    var st = c.stages.filter(function (s) { return s.id === sid; })[0];
    if (!st) throw new Error('未知阶段：' + sid);
    list.forEach(function (l) {
      l.course = cid;
      l.stage = sid;
      (l.words || []).forEach(function (w) {
        // 字母和同形的单词（例如字母 ང 和代词 ང「我」）要分开记复习进度
        if (w.t === 'letter' && !w.id) w.id = '字母:' + w.s;
      });
      st.lessons.push(l);
      c.lessons.push(l);
    });
  };

  LX.getLesson = function (cid, lid) {
    var c = LX.courses[cid];
    return c ? c.lessons.filter(function (l) { return l.id === lid; })[0] || null : null;
  };

  LX.nextLesson = function (cid, lid) {
    var ls = LX.courses[cid].lessons;
    for (var i = 0; i < ls.length; i++) if (ls[i].id === lid) return ls[i + 1] || null;
    return null;
  };

  LX.itemKey = function (cid, item) { return cid + ':' + (item.id || item.s); };

  /* 课程里所有可复习的条目（同一个 key 只取第一次出现的那一课） */
  LX.allItems = function (cid) {
    var seen = {}, out = [];
    LX.courses[cid].lessons.forEach(function (l) {
      (l.words || []).forEach(function (w) {
        var k = LX.itemKey(cid, w);
        if (!seen[k]) { seen[k] = 1; out.push({ key: k, item: w, lesson: l }); }
      });
    });
    return out;
  };

  /* 词汇表：彝文/藏文 → 释义列表（点课文里的词可以查） */
  var glossCache = {};
  LX.glossary = function (cid) {
    if (glossCache[cid]) return glossCache[cid];
    var g = {};
    LX.allItems(cid).forEach(function (x) {
      if (x.item.t === 'letter') return;
      var k = LX.tileLabel(x.item.s);
      g[k] = g[k] || [];
      if (g[k].indexOf(x.item.m) < 0) g[k].push(x.item.m);
    });
    glossCache[cid] = g;
    return g;
  };

  /* ---------- 彝文 ---------- */
  var YI_INITIALS = ['b', 'p', 'bb', 'nb', 'hm', 'm', 'f', 'v', 'd', 't', 'dd', 'nd', 'hn', 'n', 'hl', 'l',
    'g', 'k', 'gg', 'mg', 'hx', 'ng', 'h', 'w', 'z', 'c', 'zz', 'nz', 's', 'ss',
    'zh', 'ch', 'rr', 'nr', 'sh', 'r', 'j', 'q', 'jj', 'nj', 'ny', 'x', 'y'];
  var YI_INI_SORTED = YI_INITIALS.slice().sort(function (a, b) { return b.length - a.length; });
  var YI_VOWELS = ['i', 'ie', 'a', 'uo', 'o', 'e', 'u', 'ur', 'y', 'yr'];
  var YI_PUNCT = { '，': ',', '。': '.', '？': '?', '！': '!', '、': ',', '；': ';', '：': ':', '）': ')' };

  LX.isYi = function (ch) { var c = ch.codePointAt(0); return c >= 0xA000 && c <= 0xA48C; };

  /* 彝文 → 彝文拼音：音节之间空格，标点改成半角并贴在前一个音节后面 */
  LX.yiPinyin = function (s) {
    var out = [], open = '';
    Array.from(s || '').forEach(function (ch) {
      var py = LX.YI_SYLLABLES && LX.YI_SYLLABLES[ch];
      if (py) { out.push(open + py); open = ''; }
      else if (YI_PUNCT[ch]) {
        if (out.length) out[out.length - 1] += YI_PUNCT[ch]; else out.push(YI_PUNCT[ch]);
      } else if (ch === '（' || ch === '(') open += '(';
      else if (/\s/.test(ch)) { /* 分词空格：拼音里本来就有空格 */ }
      else { out.push(open + ch); open = ''; }
    });
    return out.join(' ');
  };

  /* 拆一个彝文拼音音节：{ini, vow, tone}；拆不开返回 null */
  LX.yiParse = function (py) {
    if (!py || py === 'w') return null;
    var tone = /[txp]$/.test(py) ? py.slice(-1) : '';
    var body = tone ? py.slice(0, -1) : py;
    for (var i = 0; i <= YI_INI_SORTED.length; i++) {
      var ini = i < YI_INI_SORTED.length ? YI_INI_SORTED[i] : '';
      if (body.indexOf(ini) === 0 && YI_VOWELS.indexOf(body.slice(ini.length)) >= 0) {
        return { ini: ini, vow: body.slice(ini.length), tone: tone };
      }
    }
    return null;
  };

  /* 彝文拼音 → 彝文（转换工具用） */
  var yiRev = null;
  LX.yiFromPinyin = function (text) {
    if (!yiRev) {
      yiRev = {};
      Object.keys(LX.YI_SYLLABLES).forEach(function (ch) { yiRev[LX.YI_SYLLABLES[ch]] = ch; });
    }
    return String(text || '').toLowerCase().split(/(\s+|[,.?!;:])/).map(function (part) {
      if (!part || /^\s+$/.test(part)) return '';
      if (yiRev[part]) return yiRev[part];
      var p = { ',': '，', '.': '。', '?': '？', '!': '！', ';': '；', ':': '：' }[part];
      return p || '〔' + part + '〕';
    }).join('');
  };
  LX.YI_INITIALS = YI_INITIALS;
  LX.YI_VOWELS = YI_VOWELS;
  LX.yiChar = function (py) { LX.yiFromPinyin(''); return yiRev[py] || ''; };

  /* ---------- 藏文 ---------- */
  var BO_BASE = {
    'ཀ': 'k', 'ཁ': 'kh', 'ག': 'g', 'ང': 'ng', 'ཅ': 'c', 'ཆ': 'ch', 'ཇ': 'j', 'ཉ': 'ny',
    'ཏ': 't', 'ཐ': 'th', 'ད': 'd', 'ན': 'n', 'པ': 'p', 'ཕ': 'ph', 'བ': 'b', 'མ': 'm',
    'ཙ': 'ts', 'ཚ': 'tsh', 'ཛ': 'dz', 'ཝ': 'w', 'ཞ': 'zh', 'ཟ': 'z', 'འ': '\'', 'ཡ': 'y',
    'ར': 'r', 'ལ': 'l', 'ཤ': 'sh', 'ས': 's', 'ཧ': 'h', 'ཨ': '',
    'ཊ': 'T', 'ཋ': 'Th', 'ཌ': 'D', 'ཎ': 'N', 'ཥ': 'Sh', 'ཪ': 'R'
  };
  var BO_VOWEL = { 'ི': 'i', 'ུ': 'u', 'ེ': 'e', 'ོ': 'o', 'ཱ': 'A', 'ྀ': '-i', 'ཻ': 'ai', 'ཽ': 'au' };
  var BO_PREFIX = 'གདབམའ';
  var BO_SUFFIX = 'གངདནབམའརལས';

  function boIsBase(ch) { var n = ch.codePointAt(0); return n >= 0x0F40 && n <= 0x0F6C; }
  function boIsSub(ch) { var n = ch.codePointAt(0); return n >= 0x0F90 && n <= 0x0FBC; }
  /* 叠字：上面的字母 + 下面字母的下加形式（Unicode 里下加形式 = 基本字母 + 0x50） */
  LX.boStack = function (top, bottom) { return top + String.fromCodePoint(bottom.codePointAt(0) + 0x50); };

  function single(st) { return st.letters && st.letters.length === 1 ? st.letters[0] : null; }

  /* 没有元音符号时找基字：返回基字所在的叠字序号 */
  function boRootIndex(st) {
    var n = st.length;
    if (n === 1) return 0;
    if (n === 2) return single(st[1]) && BO_SUFFIX.indexOf(single(st[1])) >= 0 ? 0 : 1;
    if (n === 3) {
      var a = single(st[0]), b = single(st[1]), c = single(st[2]);
      if (a && c === 'ས' && b && 'གངབམ'.indexOf(b) >= 0) return 0;          // ནམས nams、གངས gangs
      if (a && BO_PREFIX.indexOf(a) >= 0 && c && BO_SUFFIX.indexOf(c) >= 0) return 1; // མཚན mtshan、བཀའ bka'
      return 0;                                                                 // ལགས lags
    }
    return 1;                                                                   // གདམས gdams
  }

  function boWylieSyllable(syl) {
    var st = [];
    Array.from(syl).forEach(function (ch) {
      var last = st[st.length - 1];
      if (boIsBase(ch)) st.push({ letters: [ch], vowel: '' });
      else if (boIsSub(ch) && last && last.letters) last.letters.push(String.fromCodePoint(ch.codePointAt(0) - 0x50));
      else if (BO_VOWEL[ch] != null && last && last.letters) last.vowel += BO_VOWEL[ch];
      else if (ch >= '༠' && ch <= '༩') st.push({ raw: String(ch.codePointAt(0) - 0x0F20) });
      else st.push({ raw: ch });
    });
    if (st.some(function (s) { return s.raw != null; })) {
      return st.map(function (s) { return s.raw != null ? s.raw : s.letters.map(function (l) { return BO_BASE[l] || l; }).join('') + s.vowel; }).join('');
    }
    var out = st.map(function (s) { return s.letters.map(function (l) { return BO_BASE[l] != null ? BO_BASE[l] : l; }).join(''); });
    var withVowel = st.filter(function (s) { return s.vowel; }).length;
    var vi = -1;
    for (var i = 0; i < st.length; i++) if (st[i].vowel) { vi = i; break; }
    var root = vi;
    var last = st.length - 1;
    if (vi === -1) {
      root = boRootIndex(st);
      out[root] += 'a';
    } else if (vi === last && vi > 0 && withVowel === 1 && single(st[last]) === 'འ') {
      // ངའི nga'i：元音在末尾的 འ 上，前面的基字还要补上 a
      root = boRootIndex(st);
      if (root !== last) out[root] += 'a';
    }
    // གཡ 要写成 g.y，以免和下加字 གྱ gy 混淆
    if (root === 1 && single(st[0]) === 'ག' && single(st[1]) === 'ཡ') out[0] = 'g.';
    st.forEach(function (s, i) { out[i] += s.vowel; });
    return out.join('');
  }

  LX.normWylie = function (s) {
    return String(s || '').replace(/\s+/g, ' ').replace(/\s*\/\s*/g, '/ ').trim();
  };

  /* 藏文 → 威利转写（EWTS 的常用子集） */
  LX.boWylie = function (text) {
    var out = '', syl = '';
    function flush() { if (syl) { out += boWylieSyllable(syl); syl = ''; } }
    Array.from(text || '').forEach(function (ch) {
      if (ch === '་' || ch === '༌') { flush(); out += ' '; }
      else if (ch === '།' || ch === '༎') { flush(); out += '/'; }
      else if (/\s/.test(ch)) { flush(); out += ' '; }
      else syl += ch;
    });
    flush();
    return LX.normWylie(out);
  };

  /* 藏文音节切分（拼词练习用） */
  LX.boSyllables = function (s) {
    return String(s || '').split(/[་།༎\s]+/).filter(Boolean);
  };

  /* ---------- 显示辅助 ---------- */
  var TAIL = /[་།༎，。？！、；：,.?!;:）)\s]+$/;
  LX.tokens = function (line) { return String(line.s).trim().split(/\s+/); };
  LX.tileLabel = function (tok) { return String(tok).replace(TAIL, ''); };
  LX.tokenTail = function (tok) { return String(tok).slice(LX.tileLabel(tok).length); };

  /* 把词拼回一句话：彝文词之间不空格；藏文在音节点后不空格，在垂符后空一格 */
  LX.joinTokens = function (cid, toks) {
    if (cid !== 'bo') return toks.join('');
    var s = '';
    toks.forEach(function (t, i) {
      s += t;
      if (i < toks.length - 1 && !/་$/.test(t)) s += ' ';
    });
    return s;
  };

  /* 一个词把各个音节拆开（拼词练习的卡片） */
  LX.pieces = function (cid, s) {
    if (cid === 'bo') return LX.boSyllables(s);
    return Array.from(LX.tileLabel(s)).filter(function (ch) { return !/\s/.test(ch); });
  };

  LX.settings = function () { return LX.store.data.settings; };

  /* 条目的拉丁字母写法 */
  LX.roman = function (cid, item, mode) {
    if (!item) return '';
    if (cid === 'yi') return item.r || LX.yiPinyin(item.s);
    mode = mode || LX.settings().boRoman;
    if (item.t === 'letter') return item.w;
    if (mode === 'w') return item.w || '';
    if (mode === 'both') return [item.p, item.w].filter(Boolean).join(' · ');
    return item.p || item.w || '';
  };

  /* 一句话的拉丁字母写法 */
  LX.lineRoman = function (cid, line, mode) {
    if (cid === 'yi') return LX.tokens(line).map(LX.yiPinyin).join(' ');
    mode = mode || LX.settings().boRoman;
    if (mode === 'w') return line.w || '';
    if (mode === 'both') return [line.p, line.w].filter(Boolean).join('　|　');
    return line.p || '';
  };

  /* 每个词对应的注音（藏文用 p 里的分段，彝文自动生成） */
  LX.tokenRomans = function (cid, line) {
    var toks = LX.tokens(line);
    if (cid === 'yi') return toks.map(function (t) { return LX.yiPinyin(LX.tileLabel(t)); });
    var mode = LX.settings().boRoman;
    var ps = String(line.p || '').trim().split(/\s+/);
    return toks.map(function (t, i) {
      var w = LX.boWylie(LX.tileLabel(t));
      if (mode === 'w') return w;
      var p = (ps[i] || '').replace(/[.,?!;:]+$/, '');
      return mode === 'both' ? p + ' · ' + w : p;
    });
  };

  LX.scriptClass = function (cid) { return cid === 'bo' ? 'bo' : 'yi'; };

  /* 带词边界的句子 HTML：每个词一个 span，可以点开查词义 */
  LX.lineHTML = function (cid, line) {
    var toks = LX.tokens(line);
    var html = '';
    toks.forEach(function (t, i) {
      html += '<span class="tok" data-tok="' + esc(LX.tileLabel(t)) + '">' + esc(t) + '</span>';
      if (cid === 'bo' && i < toks.length - 1 && !/་$/.test(t)) html += ' ';
    });
    return '<span class="' + LX.scriptClass(cid) + ' line-s">' + html + '</span>';
  };

  /* 逐词对照（彝文/藏文、注音、注释三行对齐） */
  LX.interlinearHTML = function (cid, line) {
    var toks = LX.tokens(line);
    var romans = LX.tokenRomans(cid, line);
    var gl = String(line.g || '').trim().split(/\s+/);
    return '<div class="ilin">' + toks.map(function (t, i) {
      return '<span class="ilw"><span class="' + LX.scriptClass(cid) + '">' + esc(t) + '</span>' +
        '<small class="rom">' + esc(romans[i] || '') + '</small>' +
        '<small class="gl">' + esc(gl[i] || '') + '</small></span>';
    }).join('') + '</div>';
  };

  /* ---------- 音频（可选）：data/<课程>/audio.js 里用 LX.addAudio 登记 ----------
     键是词或整句的文字，去掉空格和句末标点后比较，所以写不写空格、句号都可以。 */
  function audioKey(s) { return LX.tileLabel(String(s).replace(/\s+/g, '')); }
  LX.AUDIO = {};
  LX.addAudio = function (cid, map) {
    var m = LX.AUDIO[cid] = LX.AUDIO[cid] || {};
    Object.keys(map).forEach(function (k) { m[audioKey(k)] = map[k]; });
  };
  LX.audioFor = function (cid, s) { var m = LX.AUDIO[cid]; return m ? m[audioKey(s)] || null : null; };
  LX.playAudio = function (src) { try { new Audio(src).play(); } catch (e) { /* 忽略 */ } };

  /* ---------- 进度存储 ---------- */
  var KEY = 'lx-progress-v1';
  var DEFAULT_SETTINGS = { roman: true, boRoman: 'p', goal: 30, theme: 'auto', big: false };
  var Store = LX.store = {
    data: null,
    load: function () {
      var d = null;
      try { d = JSON.parse(localStorage.getItem(KEY)); } catch (e) { d = null; }
      if (!d || d.v !== 1) d = { v: 1, lessons: {}, srs: {}, days: {}, settings: {} };
      d.settings = Object.assign({}, DEFAULT_SETTINGS, d.settings);
      this.data = d;
      return d;
    },
    save: function () {
      try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* 隐私模式等情况下存不了，忽略 */ }
    },
    reset: function () { localStorage.removeItem(KEY); this.load(); },
    exportJSON: function () { return JSON.stringify(this.data, null, 1); },
    importJSON: function (text) {
      var d = JSON.parse(text);
      if (!d || d.v !== 1 || typeof d.srs !== 'object') throw new Error('不是本站导出的进度文件');
      this.data = d;
      this.data.settings = Object.assign({}, DEFAULT_SETTINGS, d.settings);
      this.save();
    },
    lesson: function (cid, lid) { return this.data.lessons[cid + ':' + lid] || null; },
    finishLesson: function (cid, lid, score) {
      var k = cid + ':' + lid;
      var r = this.data.lessons[k] || { best: 0, count: 0 };
      r.count += 1;
      r.best = Math.max(r.best, score);
      r.last = Date.now();
      this.data.lessons[k] = r;
      this.day().lessons += 1;
    },
    day: function (key) {
      key = key || U.today();
      return this.data.days[key] || (this.data.days[key] = { xp: 0, lessons: 0, reviews: 0 });
    },
    addXP: function (n) { this.day().xp += n; },
    streak: function () {
      var days = this.data.days, n = 0, t = Date.now();
      if (!(days[U.dayKey(t)] && days[U.dayKey(t)].xp > 0)) t = U.addDays(t, -1);
      while (days[U.dayKey(t)] && days[U.dayKey(t)].xp > 0) { n++; t = U.addDays(t, -1); }
      return n;
    }
  };

  /* ---------- 间隔复习（莱特纳盒子） ----------
     盒子 1–6 对应 1、2、4、7、14、30 天后再复习；盒子 6 再答对就 60 天后。
     答错回到盒子 1，10 分钟后再出现。新学的词进盒子 1，明天复习。 */
  var BOX_DAYS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14, 6: 30 };
  LX.BOX_DAYS = BOX_DAYS;
  LX.srs = {
    get: function (key) { return Store.data.srs[key] || null; },
    learn: function (key) {
      if (!Store.data.srs[key]) {
        Store.data.srs[key] = { box: 1, due: U.addDays(U.startOfDay(Date.now()), 1), seen: 0, wrong: 0 };
      }
    },
    grade: function (key, ok, now) {
      now = now || Date.now();
      var r = Store.data.srs[key] || (Store.data.srs[key] = { box: 0, due: now, seen: 0, wrong: 0 });
      r.seen += 1;
      r.last = now;
      if (ok) {
        var was = r.box;
        r.box = Math.min(6, r.box + 1);
        r.due = U.addDays(U.startOfDay(now), was >= 6 ? 60 : BOX_DAYS[r.box]);
      } else {
        r.wrong += 1;
        r.box = 1;
        r.due = now + 10 * 60 * 1000;
      }
      return r;
    },
    /* 某课程到期的条目，按到期时间排序 */
    dueItems: function (cid, now) {
      now = now || Date.now();
      return LX.allItems(cid).filter(function (x) {
        var r = Store.data.srs[x.key];
        return r && r.due <= now;
      }).sort(function (a, b) { return Store.data.srs[a.key].due - Store.data.srs[b.key].due; });
    },
    /* 已学的条目里盒子最低（最薄弱）的若干个 */
    weakest: function (cid, n) {
      return LX.allItems(cid).filter(function (x) { return Store.data.srs[x.key]; })
        .sort(function (a, b) {
          var ra = Store.data.srs[a.key], rb = Store.data.srs[b.key];
          return (ra.box - rb.box) || (rb.wrong - ra.wrong) || (ra.due - rb.due);
        }).slice(0, n);
    },
    counts: function (cid) {
      var learned = 0, due = 0, strong = 0, now = Date.now();
      LX.allItems(cid).forEach(function (x) {
        var r = Store.data.srs[x.key];
        if (!r) return;
        learned++;
        if (r.due <= now) due++;
        if (r.box >= 5) strong++;
      });
      return { learned: learned, due: due, strong: strong };
    }
  };

  /* ---------- 课文里用到的表格模板 ---------- */
  function yiCell(ch) {
    var py = LX.YI_SYLLABLES[ch] || '';
    return '<span class="yi">' + esc(ch) + '</span> <small>' + esc(py) + '</small>';
  }
  /* 声母 ini 拼上韵母 vow 的中平调字；没有这个音节就换别的韵母 */
  function yiExample(ini, vows) {
    for (var t = 0; t < 4; t++) {
      for (var i = 0; i < vows.length; i++) {
        var ch = LX.yiChar(ini + vows[i] + ['', 'x', 't', 'p'][t]);
        if (ch) return ch;
      }
    }
    return '';
  }

  LX.tpl = {
    yiToneTable: function () {
      var P = LX.YI_PHON;
      var ex = { t: 'ꋊ', x: 'ꋋ', '': 'ꋌ', p: 'ꋍ' };
      return '<table class="mini"><tr><th>写法</th><th>声调</th><th>调值</th><th>例字</th></tr>' +
        P.toneOrder.map(function (k) {
          var t = P.tones[k];
          return '<tr><td><b>' + (k ? '-' + k : '（不标）') + '</b></td><td>' + esc(t.name) + '<br><small>' + esc(t.hint) + '</small></td><td>' + t.value + '</td><td>' + yiCell(ex[k]) + '</td></tr>';
        }).join('') + '</table>' +
        '<p>同一个音节的四个声调：<span class="yi">ꋊ ꋋ ꋌ ꋍ</span> = cyt、cyx、cy、cyp。</p>';
    },
    yiVowelTable: function () {
      var P = LX.YI_PHON;
      return '<table class="mini"><tr><th>韵母</th><th>国际音标</th><th>怎么发</th><th>例字</th></tr>' +
        P.vowelOrder.map(function (v) {
          var ch = '';
          ['b', 'd', 'g', 'z', 'zh', 'j', 'm', 'n', 'l', 's', 'x', 'h', ''].some(function (ini) { ch = LX.yiChar(ini + v); return !!ch; });
          return '<tr><td><b>' + v + '</b></td><td>[' + P.vowels[v].ipa + ']</td><td><small>' + esc(P.vowels[v].hint) + '</small></td><td>' + (ch ? yiCell(ch) : '') + '</td></tr>';
        }).join('') + '</table>';
    },
    yiInitialTable: function (list) {
      var P = LX.YI_PHON;
      return '<table class="mini"><tr><th>声母</th><th>国际音标</th><th>怎么发</th><th>例字</th></tr>' +
        list.map(function (ini) {
          var ch = yiExample(ini, ['a', 'i', 'u', 'o', 'e', 'y', 'ie', 'uo']);
          return '<tr><td><b>' + ini + '</b></td><td>[' + P.initials[ini].ipa + ']</td><td><small>' + esc(P.initials[ini].hint) + '</small></td><td>' + (ch ? yiCell(ch) : '') + '</td></tr>';
        }).join('') + '</table>';
    },
    boConsonantTable: function (from, to) {
      var cs = LX.BO_ALPHA.consonants.slice(from, to), rows = '';
      for (var i = 0; i < cs.length; i += 4) {
        rows += '<tr>' + cs.slice(i, i + 4).map(function (c) {
          return '<td class="tone-' + c.tone + '"><span class="bo big">' + esc(c.s) + '</span><br><b>' + esc(c.w) + '</b> <small>读 ' + esc(c.p) + '</small></td>';
        }).join('') + '</tr>';
      }
      return '<table class="mini letters">' + rows + '</table>' +
        '<p class="legend"><span class="tone-high">高调</span> <span class="tone-low">低调</span>　粗体是字母名称（威利转写），「读」后面是拉萨话读音。</p>';
    },
    boVowelTable: function () {
      return '<table class="mini"><tr><th>符号</th><th>名称</th><th>读音</th><th>拼 ཀ</th></tr>' +
        LX.BO_ALPHA.vowels.map(function (v) {
          return '<tr><td><span class="bo big">' + esc(v.s) + '</span></td><td><span class="bo">' + esc(v.name) + '</span><br><small>' + esc(v.nameW) + '</small></td><td>' + v.p + '</td><td><span class="bo">' + esc('ཀ' + v.sign) + '</span> k' + v.p + '</td></tr>';
        }).join('') + '</table>';
    },
    boSuffixTable: function () {
      var A = LX.BO_ALPHA;
      return '<table class="mini"><tr><th>后加字</th><th>读法</th></tr>' +
        A.suffixes.map(function (s) {
          return '<tr><td><span class="bo big">' + esc(s) + '</span></td><td><small>' + esc(A.suffixNotes[s]) + '</small></td></tr>';
        }).join('') + '</table>';
    },
    boStackTable: function () {
      var A = LX.BO_ALPHA, html = '<p>' + esc(A.superscriptNotes) + '</p>';
      Object.keys(A.superscripts).forEach(function (top) {
        html += '<p><b>上加 <span class="bo">' + esc(top) + '</span>：</b><span class="bo stacks">' +
          A.superscripts[top].map(function (b) { return LX.boStack(top, b); }).join(' ') + '</span></p>';
      });
      Object.keys(A.subscripts).forEach(function (sub) {
        html += '<p><b>下加 <span class="bo">' + esc(sub) + '</span>：</b><span class="bo stacks">' +
          A.subscripts[sub].map(function (b) { return LX.boStack(b, sub); }).join(' ') + '</span><br><small>' + esc(A.subscriptNotes[sub]) + '</small></p>';
      });
      return html;
    }
  };
})();
