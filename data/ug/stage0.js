/* 维吾尔语 · 阶段 0：文字与发音（共 3 课） */
LX.addLessons('ug', 'u0', [
  {
    id: 'u0-1',
    kind: 'script',
    title: '八个元音与隔音符 ئ',
    goal: '掌握维吾尔文 8 个元音字母，理解为什么词首元音前一定要写隔音符 ئ（hemze）。',
    minutes: 12,
    words: [
      { t: 'letter', s: 'ئا', w: 'a', p: 'a', m: '后元音 a [ɑ]' },
      { t: 'letter', s: 'ئە', w: 'e', p: 'e', m: '前元音 e [ɛ]' },
      { t: 'letter', s: 'ئې', w: 'ë', p: 'ë', m: '中元音 ë [e]' },
      { t: 'letter', s: 'ئى', w: 'i', p: 'i', m: '元音 i [i]' },
      { t: 'letter', s: 'ئو', w: 'o', p: 'o', m: '圆唇后元音 o [o]' },
      { t: 'letter', s: 'ئۇ', w: 'u', p: 'u', m: '圆唇后元音 u [u]' },
      { t: 'letter', s: 'ئۆ', w: 'ö', p: 'ö', m: '圆唇前元音 ö [ø]' },
      { t: 'letter', s: 'ئۈ', w: 'ü', p: 'ü', m: '圆唇前元音 ü [y]' },
      { s: 'ئانا', m: '妈妈' },
      { s: 'ئاتا', m: '爸爸、父亲' }
    ],
    tips: [
      {
        at: 'start', kind: 'culture', title: '全音素文字：所有元音都写出来',
        html: '<p>虽然现行维吾尔文借用了阿拉伯字母造型、从右往左连写，但它是<b>全音素文字</b>：8 个元音字母一个都不省略，看到就能准确读出。</p>' +
          '<p>凡是以元音开头的词，前面都固定写一个不发音的座椅符号 <span class="ug">ئ</span>（hemze），例如 <span class="ug">ئا</span> a、<span class="ug">ئانا</span> ana（妈妈）。元音在辅音后面时则不再写 <span class="ug">ئ</span>。</p>'
      },
      {
        at: 'mid', kind: 'pron', title: '8 个元音字母表',
        html: function () { return LX.tpl.ugVowelTable(); }
      },
      {
        at: 'end', kind: 'grammar', title: '前后元音和谐',
        html: '<p>维吾尔语的词根和附加成分遵循元音和谐：后元音词（含 <b>a、o、u</b>）接后元音后缀（如 <b>-lar</b>），前元音词（含 <b>e、ö、ü</b>）接前元音后缀（如 <b>-ler</b>）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '维吾尔文词首元音前面的 ئ（hemze）起什么作用？', options: ['标示词首元音（本身不发辅音）', '读作重音 k', '表示疑问'], answer: 0 },
      { type: 'choice', q: 'ئانا 怎么读、是什么意思？', options: ['ana（妈妈）', 'ata（爸爸）', 'öy（家）'], answer: 0 }
    ],
    source: { title: 'Wikipedia：Uyghur alphabets', url: 'https://en.wikipedia.org/wiki/Uyghur_alphabets' }
  },
  {
    id: 'u0-2',
    kind: 'script',
    title: '辅音字母（一）：唇音、舌尖音与擦音',
    goal: '认识前 12 个辅音字母（ب پ ت ج چ خ د ر ز ژ س ش），掌握凭点辨字的方法。',
    minutes: 12,
    words: [
      { t: 'letter', s: 'ب', w: 'b', p: 'b', m: '辅音 b [b]（下 1 点）' },
      { t: 'letter', s: 'پ', w: 'p', p: 'p', m: '辅音 p [pʰ]（下 3 点）' },
      { t: 'letter', s: 'ت', w: 't', p: 't', m: '辅音 t [tʰ]（上 2 点）' },
      { t: 'letter', s: 'ج', w: 'j', p: 'j', m: '辅音 j [dʒ]（中 1 点）' },
      { t: 'letter', s: 'چ', w: 'ch', p: 'ch', m: '辅音 ch [tʃʰ]（中 3 点）' },
      { t: 'letter', s: 'خ', w: 'x', p: 'x', m: '小舌擦音 x [χ]（上 1 点）' },
      { t: 'letter', s: 'د', w: 'd', p: 'd', m: '辅音 d [d]' },
      { t: 'letter', s: 'ر', w: 'r', p: 'r', m: '颤音 r [r]' },
      { t: 'letter', s: 'ز', w: 'z', p: 'z', m: '浊擦音 z [z]（ر 上加 1 点）' },
      { t: 'letter', s: 'س', w: 's', p: 's', m: '清擦音 s [s]（三齿无点）' },
      { t: 'letter', s: 'ش', w: 'sh', p: 'sh', m: '清擦音 sh [ʃ]（س 上加 3 点）' },
      { s: 'پاسپورت', m: '护照' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '前 12 个辅音字母',
        html: function () { return LX.tpl.ugConsonantTable(0, 12); }
      },
      {
        at: 'mid', kind: 'pron', title: '同骨架字母：看点的位置和数量',
        html: '<ul><li>船形骨架：下 1 点是 <span class="ug">ب</span> b，下 3 点是 <span class="ug">پ</span> p，上 2 点是 <span class="ug">ت</span> t</li>' +
          '<li>弯钩骨架：肚里 1 点是 <span class="ug">ج</span> j，肚里 3 点是 <span class="ug">چ</span> ch，头顶 1 点是 <span class="ug">خ</span> x</li>' +
          '<li>三齿骨架：无点是 <span class="ug">س</span> s，上 3 点是 <span class="ug">ش</span> sh</li></ul>'
      },
      {
        at: 'end', kind: 'pron', title: '拉丁维文 ULY 的 x 与 ch',
        html: '<p>注意在拉丁维文（ULY）里，<b>x</b> 代表舌根/小舌清擦音 <span class="ug">خ</span> [χ]（像深喉咙发的 h），而拼音 x 那样擦音写作 <b>sh</b> <span class="ug">ش</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '船形字母下面有 3 个点（پ），代表什么音？', options: ['p', 'b', 't'], answer: 0 },
      { type: 'choice', q: 'س 上面加上 3 个点变成 ش，读作：', options: ['sh', 'z', 'ch'], answer: 0 }
    ],
    source: { title: 'Wikipedia：Uyghur alphabets', url: 'https://en.wikipedia.org/wiki/Uyghur_alphabets' }
  },
  {
    id: 'u0-3',
    kind: 'script',
    title: '辅音字母（二）：舌根音与鼻音、半元音',
    goal: '学完后 12 个辅音字母，分清后舌根音 ق/غ 与前舌根音 ك/گ 的搭配规律。',
    minutes: 15,
    words: [
      { t: 'letter', s: 'غ', w: 'gh', p: 'gh', m: '浊小舌擦音 gh [ʁ]' },
      { t: 'letter', s: 'ق', w: 'q', p: 'q', m: '小舌塞音 q [q]（配后元音）' },
      { t: 'letter', s: 'ك', w: 'k', p: 'k', m: '清塞音 k [kʰ]（配前元音）' },
      { t: 'letter', s: 'گ', w: 'g', p: 'g', m: '浊塞音 g [ɡ]（配前元音）' },
      { t: 'letter', s: 'ڭ', w: 'ng', p: 'ng', m: '后鼻音 ng [ŋ]' },
      { t: 'letter', s: 'ل', w: 'l', p: 'l', m: '边音 l [l]' },
      { t: 'letter', s: 'م', w: 'm', p: 'm', m: '鼻音 m [m]' },
      { t: 'letter', s: 'ن', w: 'n', p: 'n', m: '鼻音 n [n]' },
      { t: 'letter', s: 'ھ', w: 'h', p: 'h', m: '清喉音 h [h]' },
      { t: 'letter', s: 'ۋ', w: 'w', p: 'w', m: '半元音 w / v' },
      { t: 'letter', s: 'ي', w: 'y', p: 'y', m: '半元音 y [j]' },
      { s: 'ئۇيغۇر', m: '维吾尔' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '后 12 个辅音字母',
        html: function () { return LX.tpl.ugConsonantTable(12, 24); }
      },
      {
        at: 'mid', kind: 'pron', title: 'ق/غ 与 ك/گ 的分工',
        html: '<p>维吾尔语有两套舌根音，按元音前后分工：</p>' +
          '<ul><li>后元音（a、o、u）搭配部位靠后的小舌音 <span class="ug">ق</span> <b>q</b> 和 <span class="ug">غ</span> <b>gh</b>（如 <span class="ug">ئۇيغۇر</span> uyghur）</li>' +
          '<li>前元音（e、ö、ü）搭配部位靠前的 <span class="ug">ك</span> <b>k</b> 和 <span class="ug">گ</span> <b>g</b></li></ul>'
      },
      {
        at: 'end', kind: 'pron', title: '32 个字母全部学完',
        html: '<p>你可以随时打开「文字表」页面，用「维吾尔文 ⇄ 拉丁维文（ULY）转换工具」检验任意单词的拼读。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '在拉丁维文（ULY）里，字母 ق 写作 q，它的实际发音是：', options: ['部位很靠后的小舌塞音 [q]（不是拼音 q）', '和拼音 q 完全一样', '鼻音 ng'], answer: 0 },
      { type: 'choice', q: '「维吾尔」（ئۇيغۇر）的拉丁维文转写是：', options: ['uyghur', 'ana', 'پاسپورت'], answer: 0 }
    ],
    source: { title: 'Wikipedia：Uyghur phonology', url: 'https://en.wikipedia.org/wiki/Uyghur_phonology' }
  }
]);
