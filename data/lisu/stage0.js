/* 傈僳语 · 阶段 0：文字与发音（共 3 课） */
LX.addLessons('lisu', 'l0', [
  {
    id: 'l0-1',
    kind: 'script',
    title: '辅音字母（一）：正写与倒转字母',
    goal: '认识老傈僳文塞音与塞擦音的造字规律：把不送气字母倒转 180° 就代表送气音。',
    minutes: 12,
    words: [
      { t: 'letter', s: 'ꓐ', w: 'b', p: 'ba', m: '浊音 b [b]' },
      { t: 'letter', s: 'ꓑ', w: 'p', p: 'pa', m: '不送气 p [p]（同拼音 b）' },
      { t: 'letter', s: 'ꓒ', w: 'ph', p: 'pha', m: '送气 ph [pʰ]（倒转 P）' },
      { t: 'letter', s: 'ꓓ', w: 'd', p: 'da', m: '浊音 d [d]' },
      { t: 'letter', s: 'ꓔ', w: 't', p: 'ta', m: '不送气 t [t]（同拼音 d）' },
      { t: 'letter', s: 'ꓕ', w: 'th', p: 'tha', m: '送气 th [tʰ]（倒转 T）' },
      { t: 'letter', s: 'ꓖ', w: 'g', p: 'ga', m: '浊音 g [ɡ]' },
      { t: 'letter', s: 'ꓗ', w: 'k', p: 'ka', m: '不送气 k [k]（同拼音 g）' },
      { t: 'letter', s: 'ꓘ', w: 'kh', p: 'kha', m: '送气 kh [kʰ]（倒转 K）' },
      { t: 'letter', s: 'ꓚ', w: 'c', p: 'ca', m: '不送气 c [tɕ]（同拼音 j）' },
      { t: 'letter', s: 'ꓛ', w: 'ch', p: 'cha', m: '送气 ch [tɕʰ]（倒转 C）' },
      { t: 'letter', s: 'ꓞ', w: 'tsh', p: 'tsha', m: '送气 tsh [tsʰ]（倒转 F）' }
    ],
    tips: [
      {
        at: 'start', kind: 'culture', title: '老傈僳文（富能仁字母）的巧妙设计',
        html: '<p>老傈僳文（Fraser Script）创制于 1915 年前后，只用大写拉丁字母和它们的<b>上下/左右翻转形式</b>来拼写所有音素。</p>' +
          '<p>最核心的规律是：<b>正写的不送气字母（ꓑ p、ꓔ t、ꓗ k、ꓚ c）倒转过来，就是对应的送气音（ꓒ ph、ꓕ th、ꓘ kh、ꓛ ch）</b>！</p>'
      },
      {
        at: 'mid', kind: 'pron', title: '塞音与塞擦音（前 15 个辅音）',
        html: function () { return LX.tpl.lisuConsonantTable(0, 15); }
      },
      {
        at: 'end', kind: 'pron', title: '和凉山彝语一样区分浊音、不送气、送气',
        html: '<p>傈僳语是彝语支语言，同样区分浊音（<span class="lisu">ꓐ ꓓ ꓖ</span>）、清不送气（<span class="lisu">ꓑ ꓔ ꓗ</span>）和清送气（<span class="lisu">ꓒ ꓕ ꓘ</span>）三套塞音。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '把字母 ꓑ (p) 倒转过来变成 ꓒ，代表什么音？', options: ['送气音 ph [pʰ]', '浊音 b [b]', '鼻音 m [m]'], answer: 0 },
      { type: 'choice', q: '哪个字母代表送气的 kh [kʰ]？', options: ['ꓘ', 'ꓗ', 'ꓖ'], answer: 0, script: true }
    ],
    source: { title: 'Wikipedia：Fraser script', url: 'https://en.wikipedia.org/wiki/Fraser_script' }
  },
  {
    id: 'l0-2',
    kind: 'script',
    title: '辅音字母（二）：鼻音、擦音与半元音',
    goal: '掌握其余 15 个辅音字母，能拼读基本傈僳语音节。',
    minutes: 12,
    words: [
      { t: 'letter', s: 'ꓟ', w: 'm', p: 'ma', m: '鼻音 m [m]' },
      { t: 'letter', s: 'ꓠ', w: 'n', p: 'na', m: '鼻音 n [n]' },
      { t: 'letter', s: 'ꓡ', w: 'l', p: 'la', m: '边音 l [l]' },
      { t: 'letter', s: 'ꓢ', w: 's', p: 'sa', m: '清擦音 s [s]' },
      { t: 'letter', s: 'ꓣ', w: 'z', p: 'za', m: '浊擦音 z [z]' },
      { t: 'letter', s: 'ꓥ', w: 'ng', p: 'nga', m: '舌根鼻音 ng [ŋ]（倒转 G）' },
      { t: 'letter', s: 'ꓦ', w: 'v', p: 'va', m: '浊唇齿音 v [v]（倒转 V）' },
      { t: 'letter', s: 'ꓧ', w: 'h', p: 'ha', m: '清擦音 h [x]' },
      { t: 'letter', s: 'ꓪ', w: 'w', p: 'wa', m: '半元音 w [w]' },
      { t: 'letter', s: 'ꓫ', w: 'sh', p: 'sha', m: '擦音 sh [ɕ]' },
      { t: 'letter', s: 'ꓬ', w: 'y', p: 'ya', m: '半元音 y [ʑ/j]' },
      { t: 'letter', s: 'ꓭ', w: 'gh', p: 'gha', m: '浊舌根擦音 gh [ɣ]（倒转 Y）' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '鼻音、擦音与半元音（后 15 个辅音）',
        html: function () { return LX.tpl.lisuConsonantTable(15, 30); }
      },
      {
        at: 'mid', kind: 'pron', title: '三个特别的倒转字母：ꓥ ng、ꓦ v、ꓭ gh',
        html: '<ul><li><span class="lisu">ꓥ</span>（倒转 G）读作舌根鼻音 <b>ng</b> [ŋ]，比如「我」<span class="lisu">ꓥꓪ</span> ngwa</li>' +
          '<li><span class="lisu">ꓦ</span>（倒转 V，正写 V 留给元音 uh <span class="lisu">ꓶ</span>）读作 <b>v</b> [v]</li>' +
          '<li><span class="lisu">ꓭ</span>（倒转 Y）读作浊舌根擦音 <b>gh</b> [ɣ]，相当于凉山彝语的 w</li></ul>'
      },
      {
        at: 'end', kind: 'pron', title: '辅音自带默认元音 a',
        html: '<p>在传统老傈僳文中，如果一个辅音后面直接跟声调符号（不写元音字母），默认元音就是 <b>a</b>。本站为了初学清晰，也会完整标出 <span class="lisu">ꓮ</span> a。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '倒转 G 的字母 ꓥ 读什么音？', options: ['舌根鼻音 ng [ŋ]', '清擦音 s [s]', '边音 l [l]'], answer: 0 },
      { type: 'choice', q: '表示唇齿浊擦音 v [v] 的字母是：', options: ['ꓦ', 'ꓶ', 'ꓪ'], answer: 0, script: true }
    ],
    source: { title: 'Wikipedia：Fraser script', url: 'https://en.wikipedia.org/wiki/Fraser_script' }
  },
  {
    id: 'l0-3',
    kind: 'script',
    title: '十个元音与六个声调符号',
    goal: '掌握 10 个元音字母与 6 个声调符号，能拼读「傈僳」等常用词。',
    minutes: 15,
    words: [
      { s: 'ꓡꓲ-ꓢꓴ', m: '傈僳（自称）' },
      { s: 'ꓥꓪ', m: '我' },
      { s: 'ꓠꓴ', m: '你' },
      { s: 'ꓬꓲ', m: '他、她' },
      { s: 'ꓮꓸ-ꓑꓮ', m: '爸爸' },
      { s: 'ꓮꓸ-ꓟꓮ', m: '妈妈' },
      { s: 'ꓬꓲ-ꓙꓲ', m: '水；江水' },
      { s: 'ꓟꓶꓻ', m: '话、语言；地方' },
      { s: 'ꓗꓪꓸ-ꓟꓶꓻ', m: '语言、话语' },
      { s: 'ꓡꓳ-ꓟꓶꓻ', m: '怒江（泸水）' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '10 个元音字母',
        html: function () { return LX.tpl.lisuVowelTable(); }
      },
      {
        at: 'mid', kind: 'pron', title: '6 个标点式声调符号',
        html: function () { return LX.tpl.lisuToneTable(); }
      },
      {
        at: 'end', kind: 'culture', title: 'ꓡꓲ-ꓢꓴ ꓗꓪꓸ-ꓟꓶꓻ：傈僳语',
        html: '<p><span class="lisu">ꓡꓲ-ꓢꓴ</span> li-su 是「傈僳」，<span class="lisu">ꓗꓪꓸ-ꓟꓶꓻ</span> kwat-muhl 是「话、语言」，合起来就是「傈僳语」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '老傈僳文里元音 ꓶ (uh) 的字母形状像拉丁字母 V，它代表：', options: ['不圆唇高后元音 [ɯ]（如彝语 e）', '辅音 v', '元音 o'], answer: 0 },
      { type: 'choice', q: '「傈僳」在老傈僳文里怎么写？', options: ['ꓡꓲ-ꓢꓴ', 'ꓗꓪꓸ-ꓟꓶꓻ', 'ꓮꓸ-ꓑꓮ'], answer: 0, script: true }
    ],
    source: { title: 'Wikipedia：Lisu language', url: 'https://en.wikipedia.org/wiki/Lisu_language' }
  }
]);
