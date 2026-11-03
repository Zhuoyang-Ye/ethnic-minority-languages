/* 彝语 · 阶段 0：文字与发音
   字段说明见 docs/content-guide.md。彝文拼音由程序根据 Unicode 自动生成，这里只写彝文（s）和释义（m）。
   例词全部取自 BabelStone《The Yi Phonetic Alphabet》例字表和《凉山彝语会话六百句》生词表。 */
LX.addLessons('yi', 'y0', [
  {
    id: 'y0-1',
    kind: 'script',
    title: '四个声调',
    goal: '知道规范彝文是音节文字，能从拼音末尾的 t、x、p 判断声调。',
    minutes: 10,
    words: [
      { s: 'ꋊ', m: '赎回' },
      { s: 'ꋋ', m: '这' },
      { s: 'ꋌ', m: '他、她' },
      { s: 'ꋍ', m: '一' },
      { s: 'ꇿ', m: '哪里' },
      { s: 'ꑞ', m: '什么' },
      { s: 'ꉢ', m: '我' },
      { s: 'ꑍ', m: '二' }
    ],
    tips: [
      {
        at: 'start', kind: 'culture', title: '规范彝文：一个字 = 一个音节',
        html: '<p>规范彝文（<span class="yi">ꆈꌠꁱꂷ</span> nuo su bbur ma）是 1974 年在传统彝文基础上整理、1980 年正式推行的文字，以凉山话为标准音。</p>' +
          '<p>它是<b>音节文字</b>：每个字代表一个完整的音节（声母 + 韵母 + 声调），不像汉字那样表示意思。基本字共 819 个。</p>' +
          '<p>彝文拼音末尾的 <b>t、x、p 不发音，只表示声调</b>。所以 <b>cyt、cyx、cy、cyp</b> 是同一个音节的四个声调，写成四个不同的字。</p>'
      },
      {
        at: 'mid', kind: 'pron', title: '四个声调',
        html: function () { return LX.tpl.yiToneTable(); }
      },
      {
        at: 'end', kind: 'grammar', title: '次高调 x 多由变调产生',
        html: '<p>两个中平调音节相连时，前一个常变成次高调。例如 <span class="yi">ꇬ</span> go + <span class="yi">ꑟ</span> xi → <span class="yi">ꇫꑟ</span> gox xi。</p>' +
          '<p>彝文按变调后的实际读音书写，所以你会在课文里看到很多 x 调的字。次高调的字形就是在中平调字上加一个小弧，例如 <span class="yi">ꋌ</span> cy → <span class="yi">ꋋ</span> cyx。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '彝文拼音音节末尾的 t、x、p 表示什么？', options: ['声调', '辅音韵尾', '送气'], answer: 0 },
      { type: 'choice', q: '哪个字是低降调（21）？', options: ['ꋍ', 'ꋌ', 'ꋊ', 'ꋋ'], answer: 0, script: true },
      { type: 'choice', q: '中平调（33）的拼音怎么写？', options: ['不写调号', '末尾加 m', '末尾加 x'], answer: 0 }
    ]
  },
  {
    id: 'y0-2',
    kind: 'script',
    title: '十个韵母',
    goal: '掌握 i、ie、a、uo、o、e、u、ur、y、yr 十个韵母，能拼读简单音节。',
    minutes: 10,
    words: [
      { s: 'ꑳ', m: '房子' },
      { s: 'ꀆ', m: '鸭子' },
      { s: 'ꀊꐎ', m: '白（色）' },
      { s: 'ꆈꌠ', m: '诺苏（凉山彝族的自称）' },
      { s: 'ꁧ', m: '去' },
      { s: 'ꈌ', m: '狗' },
      { s: 'ꈬ', m: '九' },
      { s: 'ꇓꈓ', m: '城、城市' },
      { s: 'ꌦ', m: '血' },
      { s: 'ꌩ', m: '树；柴' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '十个韵母',
        html: function () { return LX.tpl.yiVowelTable(); }
      },
      {
        at: 'mid', kind: 'pron', title: 'ur、yr 里的 r 不卷舌',
        html: '<p>彝文拼音用末尾的 <b>r</b> 表示<b>紧元音</b>：发音时喉头收紧，声音听起来更紧、更扁。<b>ur</b> 是紧的 u，<b>yr</b> 是紧的 y，舌头并不卷起来。</p>' +
          '<p>对比：<span class="yi">ꌦ</span> sy（血）和 <span class="yi">ꌩ</span> syr（树）。</p>'
      },
      {
        at: 'end', kind: 'culture', title: 'ꆈꌠ：诺苏',
        html: '<p><span class="yi">ꆈꌠ</span> nuo su 是凉山彝族的自称，汉语写作「诺苏」。彝语叫 <span class="yi">ꆈꌠꉙ</span> nuo su hxop，规范彝文叫 <span class="yi">ꆈꌠꁱꂷ</span> nuo su bbur ma。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'ur、yr 中的 r 表示什么？', options: ['紧元音（喉头收紧）', '卷舌', '鼻化'], answer: 0 },
      { type: 'choice', q: '彝文拼音 e 的读音最接近：', options: ['不圆唇的 u [ɯ]', '「耶」的 ê', '英语 bed 的 e'], answer: 0 }
    ]
  },
  {
    id: 'y0-3',
    kind: 'script',
    title: '声母（一）：唇音与舌尖中音',
    goal: '分清不送气、送气、浊音、鼻冠音四套塞音，学会清鼻音 hm、hn 和清边擦音 hl。',
    minutes: 12,
    words: [
      { s: 'ꀘ', m: '读' },
      { s: 'ꀿꃶ', m: '伯父、叔父（父亲的兄弟）' },
      { s: 'ꂄ', m: '好' },
      { s: 'ꂘꃀ', m: '老师' },
      { s: 'ꃘ', m: '六' },
      { s: 'ꃰ', m: '雪' },
      { s: 'ꄮ', m: '松树' },
      { s: 'ꅝ', m: '喝' },
      { s: 'ꅫꃀ', m: '姐妹（男子称）' },
      { s: 'ꆪ', m: '月亮' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '16 个声母',
        html: function () { return LX.tpl.yiInitialTable(['b', 'p', 'bb', 'nb', 'hm', 'm', 'f', 'v', 'd', 't', 'dd', 'nd', 'hn', 'n', 'hl', 'l']); }
      },
      {
        at: 'mid', kind: 'pron', title: '一组声母，四种塞音',
        html: '<p>汉语只区分「不送气 b / 送气 p」，彝语每组有四种：</p>' +
          '<ul><li><b>b</b> 不送气清音 = 拼音 b</li><li><b>p</b> 送气清音 = 拼音 p</li><li><b>bb</b> 浊音：声带振动</li><li><b>nb</b> 鼻冠浊音：先轻轻带出 m 再发浊音 b</li></ul>' +
          '<p>d / t / dd / nd、g / k / gg / mg 等组也是这样。练习浊音时，可以用手指摸喉咙，感觉声带在振动。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '彝文拼音 bb 代表什么音？', options: ['浊音 [b]（声带振动）', '送气音 [pʰ]', '长音 b'], answer: 0 },
      { type: 'choice', q: 'hl 的发音方法是：', options: ['舌尖抵齿龈，气流从舌两侧擦出', '先发 h 再发 l', '和拼音 l 一样'], answer: 0 }
    ]
  },
  {
    id: 'y0-4',
    kind: 'script',
    title: '声母（二）：舌根音与舌尖前音',
    goal: '掌握 g 组和 z 组声母，特别注意 hx、h、w 三个容易混淆的字母。',
    minutes: 12,
    words: [
      { s: 'ꇭꀧ', m: '身体' },
      { s: 'ꈨ', m: '听见' },
      { s: 'ꈾ', m: '荞麦' },
      { s: 'ꉛ', m: '鱼' },
      { s: 'ꉬ', m: '五；是' },
      { s: 'ꊋ', m: '力气' },
      { s: 'ꊪ', m: '种（庄稼）' },
      { s: 'ꊿ', m: '人' },
      { s: 'ꋩ', m: '骑' },
      { s: 'ꌺ', m: '儿子' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '14 个声母',
        html: function () { return LX.tpl.yiInitialTable(['g', 'k', 'gg', 'mg', 'hx', 'ng', 'h', 'w', 'z', 'c', 'zz', 'nz', 's', 'ss']); }
      },
      {
        at: 'mid', kind: 'pron', title: 'hx、h、w 别读错',
        html: '<ul><li><b>h</b> [x] 就是拼音的 h</li><li><b>hx</b> [h] 是喉音，比拼音 h 更靠后、更轻：<span class="yi">ꉛ</span> hxe（鱼）</li>' +
          '<li><b>w</b> [ɣ] 是 h 的浊音，不是拼音的 w：<span class="yi">ꊋ</span> we（力气）</li></ul>' +
          '<p>同样，<b>ss</b> 是浊音 [z]，例如 <span class="yi">ꌺ</span> sse（儿子）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '彝文拼音 w 的读音是：', options: ['[ɣ]，拼音 h 的浊音', '拼音的 w', '不发音'], answer: 0 },
      { type: 'choice', q: 'hx 和 h 的区别是：', options: ['hx 是喉音 [h]，h 是拼音的 h [x]', '两个读音一样', 'hx 送气更强'], answer: 0 }
    ]
  },
  {
    id: 'y0-5',
    kind: 'script',
    title: '声母（三）：翘舌音与舌面音',
    goal: '学完剩下的 13 个声母，注意 y 是浊擦音，ny 是舌面鼻音。',
    minutes: 12,
    words: [
      { s: 'ꍝ', m: '喊（口令）' },
      { s: 'ꍸ', m: '独自' },
      { s: 'ꎐ', m: '牙齿' },
      { s: 'ꎧ', m: '酒' },
      { s: 'ꏂ', m: '金子；黄色' },
      { s: 'ꏜ', m: '早晨' },
      { s: 'ꏾ', m: '愿意、想要' },
      { s: 'ꐚ', m: '蜜蜂' },
      { s: 'ꐳ', m: '快' },
      { s: 'ꑟ', m: '线' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '13 个声母',
        html: function () { return LX.tpl.yiInitialTable(['zh', 'ch', 'rr', 'nr', 'sh', 'r', 'j', 'q', 'jj', 'nj', 'ny', 'x', 'y']); }
      },
      {
        at: 'end', kind: 'pron', title: '43 个声母全部学完',
        html: '<p>到「文字」页面打开彝文音节表，按声母、韵母、声调查任意一个字的读音。</p>' +
          '<p>本站暂时没有真人录音。想听发音，可以用课程首页「学习资源」里的 Zwordy 字表，或请会说彝语的朋友帮忙，把录音放进 <code>audio/</code> 文件夹（做法见 docs/content-guide.md）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '彝文拼音 y 的读音是：', options: ['[ʑ]，拼音 x 的浊音', '拼音的 y', '元音 i'], answer: 0 }
    ]
  }
]);
