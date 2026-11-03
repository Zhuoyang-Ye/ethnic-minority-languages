/* 藏语 · 阶段 0：文字与发音
   字母课的条目由下面的 letters() 根据 alphabet.js 生成；ex 是例词。
   每个藏文条目：s 藏文，w 威利转写（tests.html 会用程序核对它和藏文是否一致），p 简易注音，m 释义。 */
(function () {
  var EX = {
    'ཀ': ['ཀ་བ', 'ka ba', 'ka-wa', '柱子'],
    'ཁ': ['ཁ', 'kha', 'kha', '嘴'],
    'ག': ['ག་རེ', 'ga re', 'kha-re', '什么'],
    'ང': ['ང', 'nga', 'nga', '我'],
    'ཅ': ['ཅ་ལག', 'ca lag', 'ca-lak', '东西'],
    'ཆ': ['ཆུ', 'chu', 'chu', '水'],
    'ཇ': ['ཇ', 'ja', 'cha', '茶'],
    'ཉ': ['ཉ', 'nya', 'nya', '鱼'],
    'ཏ': ['ཏོག་ཙམ', 'tog tsam', 'tok-tsam', '一点儿'],
    'ཐ': ['ཐུག་པ', 'thug pa', 'thuk-pa', '面片汤（藏式面条）'],
    'ད': ['དུས', 'dus', 'thü', '时间'],
    'ན': ['ནང', 'nang', 'nang', '里面；家'],
    'པ': ['དཔེ་ཆ', 'dpe cha', 'pe-cha', '书'],
    'ཕ': ['ཕ་ལགས', 'pha lags', 'pha-la', '父亲'],
    'བ': ['བུ', 'bu', 'phu', '儿子、男孩'],
    'མ': ['མི', 'mi', 'mi', '人'],
    'ཙ': ['རྩམ་པ', 'rtsam pa', 'tsam-pa', '糌粑'],
    'ཚ': ['ཚ་པོ', 'tsha po', 'tsha-po', '热'],
    'ཞ': ['ཞྭ་མོ', 'zhwa mo', 'sha-mo', '帽子'],
    'ཟ': ['ཟ་མ', 'za ma', 'sa-ma', '饭、食物'],
    'འ': ['འོ་མ', '\'o ma', 'o-ma', '牛奶'],
    'ཡ': ['ཡག་པོ', 'yag po', 'yak-po', '好'],
    'ར': ['རི', 'ri', 'ri', '山'],
    'ལ': ['ལག་པ', 'lag pa', 'lak-pa', '手'],
    'ཤ': ['ཤ', 'sha', 'sha', '肉'],
    'ས': ['ས', 'sa', 'sa', '土地'],
    'ཧ': ['ཧ་ཅང', 'ha cang', 'ha-cang', '非常'],
    'ཨ': ['ཨ་མ', 'a ma', 'a-ma', '妈妈']
  };

  function letters(str) {
    return Array.from(str).map(function (ch) {
      var c = LX.BO_ALPHA.consonants.filter(function (x) { return x.s === ch; })[0];
      var item = { t: 'letter', s: c.s, w: c.w, p: c.p, tone: c.tone, m: c.p + ' · ' + (c.tone === 'high' ? '高调' : '低调') };
      var e = EX[ch];
      if (e) item.ex = { s: e[0], w: e[1], p: e[2], m: e[3] };
      return item;
    });
  }

  function vowels() {
    return LX.BO_ALPHA.vowels.map(function (v) {
      return { t: 'letter', s: v.s, w: v.w, p: v.p, m: '元音 ' + v.p + '（' + v.name + '）' };
    });
  }

  LX.addLessons('bo', 'b0', [
    {
      id: 'b0-1',
      kind: 'script',
      title: '辅音字母（一）：ཀ 到 ན',
      goal: '认读前三行 12 个字母，知道每行四个字母的规律：不送气、送气、低调、鼻音。',
      minutes: 12,
      words: letters('ཀཁགངཅཆཇཉཏཐདན'),
      tips: [
        {
          at: 'start', kind: 'culture', title: '藏文：从左往右写的拼音文字',
          html: '<p>藏文相传是 7 世纪吞弥·桑布扎参照印度的文字创制的。它有 30 个辅音字母，每个字母都自带元音 a，比如 <span class="bo">ཀ</span> 读 ka。</p>' +
            '<p>音节和音节之间用<b>音节点</b> <span class="bo">་</span>（tsheg）隔开，一句话结束用<b>垂符</b> <span class="bo">།</span>（shad）。词和词之间不加空格。</p>' +
            '<p>例如 <span class="bo">བཀྲ་ཤིས་བདེ་ལེགས།</span>（扎西德勒）是四个音节、一句话。</p>'
        },
        {
          at: 'mid', kind: 'pron', title: '四个一组：高调和低调',
          html: function () { return LX.tpl.boConsonantTable(0, 12); }
        },
        {
          at: 'mid', kind: 'pron', title: '每行的规律',
          html: '<ul><li>第 1 个：不送气，<b>高调</b>（<span class="bo">ཀ</span> ka）</li>' +
            '<li>第 2 个：送气，<b>高调</b>（<span class="bo">ཁ</span> kha）</li>' +
            '<li>第 3 个：<b>低调</b>，单独出现时略带送气（<span class="bo">ག</span> kha，低）</li>' +
            '<li>第 4 个：鼻音，<b>低调</b>（<span class="bo">ང</span> nga）</li></ul>' +
            '<p>高调像普通话第一声，又高又平；低调起点低，略往上升。拉萨话的高低调要靠字母来判断，这是读藏文最重要的一步。</p>'
        },
        {
          at: 'end', kind: 'pron', title: '两种拉丁字母写法',
          html: '<p><b>威利转写</b>（Wylie）一个藏文字母对应固定的拉丁字母，反映<b>拼写</b>：<span class="bo">བཀྲ་ཤིས</span> = bkra shis。</p>' +
            '<p><b>注音</b>反映拉萨话的<b>实际读音</b>：<span class="bo">བཀྲ་ཤིས</span> 读 tra-shi。</p>' +
            '<p>本站每个词都给出两种写法。注音里的 kh、ch、th、ph 表示送气，k、c、t、p 表示不送气；c 的读音接近拼音 j。字母名称（ka、kha、ga、nga……）就是威利转写。</p>'
        }
      ],
      exercises: [
        { type: 'choice', q: '藏文音节和音节之间用什么隔开？', options: ['音节点 ་', '空格', '逗号 ，'], answer: 0 },
        { type: 'choice', q: 'ཀ 和 ག 的读音有什么区别？', options: ['ཀ 高调不送气，ག 低调（略送气）', '完全一样', 'ཀ 是元音，ག 是辅音'], answer: 0 },
        { type: 'choice', q: '下面哪个字母是高调？', options: ['ཁ', 'ག', 'ང', 'ན'], answer: 0, script: true }
      ]
    },
    {
      id: 'b0-2',
      kind: 'script',
      title: '辅音字母（二）：པ 到 ཝ',
      goal: '认读第四、五行 8 个字母，掌握 ཙ 行（ts、tsh）。',
      minutes: 10,
      words: letters('པཕབམཙཚཛཝ'),
      tips: [
        {
          at: 'start', kind: 'pron', title: '第四、五行',
          html: function () { return LX.tpl.boConsonantTable(12, 20); }
        },
        {
          at: 'mid', kind: 'pron', title: 'ཙ ཚ ཛ：像拼音的 z 和 c',
          html: '<p><span class="bo">ཙ</span> tsa 就是拼音的 z，<span class="bo">ཚ</span> tsha 就是拼音的 c，<span class="bo">ཛ</span> 是低调的 tsha。</p>' +
            '<p>第五行最后一个 <span class="bo">ཝ</span> wa 不是鼻音，读作 w，低调。</p>'
        },
        {
          at: 'end', kind: 'pron', title: 'བ 在第二个音节读 w',
          html: '<p><span class="bo">བ</span> 在词首读低调的 pha（<span class="bo">བུ</span> phu，儿子），但在词的第二个音节通常读 <b>w</b>：</p>' +
            '<ul><li><span class="bo">ཀ་བ</span> ka-wa 柱子</li><li><span class="bo">ཟླ་བ</span> da-wa 月亮</li></ul>'
        }
      ],
      exercises: [
        { type: 'choice', q: 'ཚ 的读音最接近拼音的哪个字母？', options: ['c', 'z', 'q'], answer: 0 },
        { type: 'choice', q: '下面哪个字母是低调？', options: ['བ', 'པ', 'ཕ', 'ཙ'], answer: 0, script: true }
      ]
    },
    {
      id: 'b0-3',
      kind: 'script',
      title: '辅音字母（三）：ཞ 到 ཨ',
      goal: '学完最后 10 个字母，分清读音相同、声调不同的 ཞ/ཤ 和 ཟ/ས。',
      minutes: 12,
      words: letters('ཞཟའཡརལཤསཧཨ'),
      tips: [
        {
          at: 'start', kind: 'pron', title: '第六到第八行',
          html: function () { return LX.tpl.boConsonantTable(20, 30); }
        },
        {
          at: 'mid', kind: 'pron', title: '同音不同调',
          html: '<p>拉萨话里有几对字母读音一样，只差声调：</p>' +
            '<ul><li><span class="bo">ཞ</span> sha（低） — <span class="bo">ཤ</span> sha（高）</li>' +
            '<li><span class="bo">ཟ</span> sa（低） — <span class="bo">ས</span> sa（高）</li></ul>' +
            '<p>所以 <span class="bo">ཟ་མ</span> sa-ma（饭）和 <span class="bo">ས</span> sa（土地）开头的声调不同。</p>'
        },
        {
          at: 'end', kind: 'pron', title: 'འ 和 ཨ：两个「元音字母」',
          html: '<p><span class="bo">འ</span> 和 <span class="bo">ཨ</span> 都用来承载元音，自己几乎不发辅音：</p>' +
            '<ul><li><span class="bo">ཨ</span> 高调：<span class="bo">ཨ་མ</span> a-ma 妈妈</li>' +
            '<li><span class="bo">འ</span> 低调：<span class="bo">འོ་མ</span> o-ma 牛奶</li></ul>' +
            '<p><span class="bo">འ</span> 还常用作前加字和后加字，那时不发音。</p>'
        }
      ],
      exercises: [
        { type: 'choice', q: 'ཞ 和 ཤ 都读 sha，区别在哪里？', options: ['ཞ 低调，ཤ 高调', 'ཞ 送气，ཤ 不送气', '没有区别'], answer: 0 },
        { type: 'choice', q: 'ཨ་མ（妈妈）开头的字母是哪个？', options: ['ཨ', 'འ', 'ཧ'], answer: 0, script: true }
      ]
    },
    {
      id: 'b0-4',
      kind: 'script',
      title: '四个元音符号',
      goal: '认识 ི ུ ེ ོ 四个元音符号，能拼读不带叠字的音节。',
      minutes: 12,
      words: vowels().concat([
        { s: 'ཆུ', w: 'chu', p: 'chu', m: '水' },
        { s: 'མི', w: 'mi', p: 'mi', m: '人' },
        { s: 'རི', w: 'ri', p: 'ri', m: '山' },
        { s: 'བུ', w: 'bu', p: 'phu', m: '儿子、男孩' },
        { s: 'ཁོ', w: 'kho', p: 'kho', m: '他' },
        { s: 'མོ', w: 'mo', p: 'mo', m: '她' },
        { s: 'ང', w: 'nga', p: 'nga', m: '我' },
        { s: 'ཇ', w: 'ja', p: 'cha', m: '茶' }
      ]),
      tips: [
        {
          at: 'start', kind: 'pron', title: '元音符号写在字母上下',
          html: function () { return LX.tpl.boVowelTable(); }
        },
        {
          at: 'mid', kind: 'pron', title: '拼读',
          html: '<p>辅音字母自带 a，加上元音符号就换成别的元音：</p>' +
            '<p class="ex"><span class="bo">ཀ ཀི ཀུ ཀེ ཀོ</span><br>ka ki ku ke ko</p>' +
            '<p>注意 e 读作「诶」[e]，不是汉语拼音的 e。</p>'
        },
        {
          at: 'end', kind: 'grammar', title: '你、我、他',
          html: '<p>这一课的 <span class="bo">ང</span> nga（我）、<span class="bo">ཁོ</span> kho（他）、<span class="bo">མོ</span> mo（她）都是常用代词。「你」通常说敬语 <span class="bo">ཁྱེད་རང</span> khye-rang，第 6 课会学怎么读。</p>'
        }
      ],
      exercises: [
        { type: 'choice', q: '哪个元音符号写在字母下面？', options: ['ུ（u）', 'ི（i）', 'ེ（e）', 'ོ（o）'], answer: 0, script: true },
        { type: 'choice', q: 'ཆུ（水）怎么读？', options: ['chu', 'cho', 'chi'], answer: 0 },
        { type: 'choice', q: 'བུ（儿子）开头读什么？', options: ['低调的 ph', '高调的 p', 'b'], answer: 0 }
      ]
    },
    {
      id: 'b0-5',
      kind: 'script',
      title: '后加字：辅音结尾与元音变化',
      goal: '认识 10 个后加字，掌握 ད ན ལ ས 让元音变成 e、ö、ü 的规律。',
      minutes: 15,
      words: [
        { s: 'ཡིན', w: 'yin', p: 'yin', m: '是（说自己）' },
        { s: 'མིན', w: 'min', p: 'min', m: '不是（说自己）' },
        { s: 'ཡོད', w: 'yod', p: 'yö', m: '有' },
        { s: 'མེད', w: 'med', p: 'me', m: '没有' },
        { s: 'བོད', w: 'bod', p: 'phö', m: '西藏' },
        { s: 'ཁང་པ', w: 'khang pa', p: 'khang-pa', m: '房子' },
        { s: 'ཤིང', w: 'shing', p: 'shing', m: '树、木头' },
        { s: 'ཡག་པོ', w: 'yag po', p: 'yak-po', m: '好' },
        { s: 'ཞིམ་པོ', w: 'zhim po', p: 'shim-po', m: '好吃、好喝' },
        { s: 'ལགས', w: 'lags', p: 'lak', m: '（礼貌词，用于应答和称呼）' }
      ],
      tips: [
        {
          at: 'start', kind: 'pron', title: '10 个后加字',
          html: function () { return LX.tpl.boSuffixTable(); }
        },
        {
          at: 'mid', kind: 'pron', title: '元音变化',
          html: '<p>后加字是 <span class="bo">ད ན ལ ས</span> 时，前面的元音会变：</p>' +
            '<ul><li>a → e：<span class="bo">ཡིན་པས</span> yin-pe</li><li>o → ö：<span class="bo">ཡོད</span> yö、<span class="bo">བོད</span> phö</li><li>u → ü：<span class="bo">ཡུལ</span> yül（家乡）</li></ul>' +
            '<p>ö 像「诶」的口型再把嘴唇撮圆，ü 就是拼音的 ü。i 和 e 不变。</p>'
        },
        {
          at: 'end', kind: 'pron', title: '第二后加字 ས',
          html: '<p>后加字 <span class="bo">ག ང བ མ</span> 后面还可以再加一个 <span class="bo">ས</span>，它不发音：</p>' +
            '<ul><li><span class="bo">ལགས</span> lak</li><li><span class="bo">ཕེབས</span> phep（来、去，敬语）</li><li><span class="bo">ནམས</span> nam</li></ul>'
        }
      ],
      exercises: [
        { type: 'choice', q: 'བོད（西藏）为什么读 phö，而不是 phod？', options: ['后加字 ད 不发音，并让 o 变成 ö', 'ད 本身读作 ö', '这是个例外，没有规律'], answer: 0 },
        { type: 'choice', q: 'ཡིན 和 ཡོད 分别怎么读？', options: ['yin、yö', 'yin、yod', 'yi、yo'], answer: 0 },
        { type: 'choice', q: '后加字 ག 读作：', options: ['很短的 k', 'g', '不发音'], answer: 0 }
      ]
    },
    {
      id: 'b0-6',
      kind: 'script',
      title: '叠字：前加字、上加字、下加字',
      goal: '认识 5 个前加字和常见的上加字、下加字，会找一个音节的基字。',
      minutes: 15,
      words: [
        { s: 'བདེ་པོ', w: 'bde po', p: 'de-po', m: '安好、舒服' },
        { s: 'དགེ་རྒན', w: 'dge rgan', p: 'ge-gen', m: '老师' },
        { s: 'འདུག', w: '\'dug', p: 'duk', m: '（亲眼看到的）有、是' },
        { s: 'མཚན', w: 'mtshan', p: 'tshen', m: '名字（敬语）' },
        { s: 'སྐུ་གཟུགས', w: 'sku gzugs', p: 'ku-suk', m: '身体（敬语）' },
        { s: 'ལྷ་ས', w: 'lha sa', p: 'lha-sa', m: '拉萨' },
        { s: 'ཁྱེད་རང', w: 'khyed rang', p: 'khye-rang', m: '您、你' },
        { s: 'རྒྱ་མི', w: 'rgya mi', p: 'gya-mi', m: '汉族人' },
        { s: 'བཀྲ་ཤིས', w: 'bkra shis', p: 'tra-shi', m: '吉祥' },
        { s: 'སློབ་ཕྲུག', w: 'slob phrug', p: 'lop-thruk', m: '学生' }
      ],
      tips: [
        {
          at: 'start', kind: 'pron', title: '前加字：写在基字前面，不发音',
          html: '<p>5 个前加字 <span class="bo">ག ད བ མ འ</span> 写在基字前面，本身不读，但会改变基字的读法：</p>' +
            '<ul><li>浊音字母变成不送气：<span class="bo">དགེ</span> ge、<span class="bo">བདེ</span> de、<span class="bo">འདུག</span> duk</li>' +
            '<li>送气字母保持送气：<span class="bo">མཚན</span> tshen</li></ul>'
        },
        {
          at: 'mid', kind: 'pron', title: '上加字和下加字',
          html: function () { return LX.tpl.boStackTable(); }
        },
        {
          at: 'end', kind: 'pron', title: '怎样找基字',
          html: '<ol><li>带元音符号的那个字母（或叠字）就是基字。</li>' +
            '<li>没有元音符号时：两个字母的音节，基字通常是第一个（<span class="bo">ནམ</span> nam）；三个字母、第一个是前加字的，基字通常是中间那个（<span class="bo">མཚན</span> tshen）。</li>' +
            '<li>上加字和下加字总是和基字叠在一起写。</li></ol>' +
            '<p>例如 <span class="bo">བཀྲ</span>：<span class="bo">བ</span> 是前加字，<span class="bo">ཀ</span> 是基字，下面的 <span class="bo">ྲ</span> 是下加字 ར，合起来读 tra。</p>'
        }
      ],
      exercises: [
        { type: 'choice', q: 'བཀྲ་ཤིས 的第一个音节，基字是哪个？', options: ['ཀ（带下加字 ར）', 'བ', 'ར'], answer: 0, script: true },
        { type: 'choice', q: '前加字（ག ད བ མ འ）读不读出来？', options: ['不读，但会影响基字的读法', '读得很轻', '读成元音'], answer: 0 },
        { type: 'choice', q: 'ལྷ་ས（拉萨）的 ལྷ 是怎么组成的？', options: ['上加字 ལ + 基字 ཧ', '基字 ལ + 下加字 ཧ', '两个独立的音节'], answer: 0 }
      ]
    }
  ]);
})();
