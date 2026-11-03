/* 蒙古语 · 阶段 0：文字与发音（共 3 课） */
LX.addLessons('mn', 'm0', [
  {
    id: 'm0-1',
    kind: 'script',
    title: '七个元音与元音和谐律',
    goal: '认识传统蒙文 7 个元音字母，掌握阳性元音（a/o/u）、阴性元音（e/ö/ü）和中性元音（i）的和谐规律。',
    minutes: 12,
    words: [
      { t: 'letter', s: 'ᠠ', w: 'a', p: 'a', m: '阳性元音 a' },
      { t: 'letter', s: 'ᠡ', w: 'e', p: 'e', m: '阴性元音 e [ə]' },
      { t: 'letter', s: 'ᠢ', w: 'i', p: 'i', m: '中性元音 i' },
      { t: 'letter', s: 'ᠣ', w: 'o', p: 'o', m: '阳性圆唇元音 o' },
      { t: 'letter', s: 'ᠤ', w: 'u', p: 'u', m: '阳性圆唇元音 u' },
      { t: 'letter', s: 'ᠥ', w: 'ö', p: 'ö', m: '阴性圆唇元音 ö' },
      { t: 'letter', s: 'ᠦ', w: 'ü', p: 'ü', m: '阴性圆唇元音 ü' },
      { s: 'ᠠᠪᠤ', w: 'abu', p: 'aav', m: '爸爸' },
      { s: 'ᠡᠵᠢ', w: 'eji', p: 'eej', m: '妈妈' },
      { s: 'ᠤᠰᠤ', w: 'usu', p: 'us', m: '水' }
    ],
    tips: [
      {
        at: 'start', kind: 'culture', title: '传统蒙文与元音和谐律',
        html: '<p>传统蒙古文（胡都木蒙文）创制于 13 世纪初，字母按词首、词中、词末位置连写。蒙古语最核心的语音规则是<b>元音和谐律</b>：同一个词里（除中性元音 <span class="mn">ᠢ</span> i 外），只能全部是阳性元音（<span class="mn">ᠠ ᠣ ᠤ</span> a/o/u）或全部是阴性元音（<span class="mn">ᠡ ᠥ ᠦ</span> e/ö/ü）。</p>'
      },
      {
        at: 'mid', kind: 'pron', title: '7 个元音字母表',
        html: function () { return LX.tpl.mnVowelTable(); }
      },
      {
        at: 'end', kind: 'pron', title: '书面语与口语：词末短元音脱落与长元音化',
        html: '<p>传统蒙文反映古代读音，现代口语有两条重要变化：</p>' +
          '<ul><li>词末短元音常不发音：<span class="mn">ᠤᠰᠤ</span> 书面 <code>usu</code> → 口语读 <b>us</b>（水）</li>' +
          '<li>「元音 + ᠪ/ᠭ + 元音」在口语里缩合成长元音：<span class="mn">ᠠᠪᠤ</span> 书面 <code>abu</code> → 口语读 <b>aav</b>（爸爸）</li></ul>'
      }
    ],
    exercises: [
      { type: 'choice', q: '下面哪一组全部是阳性（后）元音？', options: ['a、o、u（ᠠ ᠣ ᠤ）', 'e、ö、ü（ᠡ ᠥ ᠦ）', 'e、i、ü'], answer: 0 },
      { type: 'choice', q: 'ᠠᠪᠤ（书面转写 abu）在现代口语里读作什么、是什么意思？', options: ['aav（爸爸）', 'eej（妈妈）', 'us（水）'], answer: 0 }
    ],
    source: { title: 'Wikipedia：Mongolian script', url: 'https://en.wikipedia.org/wiki/Mongolian_script' }
  },
  {
    id: 'm0-2',
    kind: 'script',
    title: '常用辅音字母（一）：鼻音、唇音与舌尖音',
    goal: '认识 ᠨ ᠪ ᠮ ᠯ ᠰ ᠱ ᠲ ᠳ 等常用辅音字母，能拼读基础单音节与双音节词。',
    minutes: 12,
    words: [
      { t: 'letter', s: 'ᠨ', w: 'n', p: 'n', m: '鼻音 n' },
      { t: 'letter', s: 'ᠪ', w: 'b', p: 'b', m: '唇音 b / v' },
      { t: 'letter', s: 'ᠮ', w: 'm', p: 'm', m: '鼻音 m' },
      { t: 'letter', s: 'ᠯ', w: 'l', p: 'l', m: '边音 l' },
      { t: 'letter', s: 'ᠰ', w: 's', p: 's', m: '擦音 s' },
      { t: 'letter', s: 'ᠱ', w: 'sh', p: 'sh', m: '擦音 sh' },
      { t: 'letter', s: 'ᠲ', w: 't', p: 't', m: '清塞音 t' },
      { t: 'letter', s: 'ᠳ', w: 'd', p: 'd', m: '塞音 d' },
      { s: 'ᠪᠢ', w: 'bi', p: 'bi', m: '我' },
      { s: 'ᠲᠠ', w: 'ta', p: 'ta', m: '您（敬称）' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '常用辅音字母（前 12 个）',
        html: function () { return LX.tpl.mnConsonantTable(0, 12); }
      },
      {
        at: 'mid', kind: 'pron', title: 'ᠰ (s) 与 ᠱ (sh)',
        html: '<p><span class="mn">ᠱ</span> sh 是在 <span class="mn">ᠰ</span> s 旁边加两个小点；注意 <span class="mn">ᠰ</span> s 在元音 i（<span class="mn">ᠢ</span>）前面时，在口语里也会自然颚化读成 <b>sh</b>（例如 <span class="mn">ᠰᠢᠨ᠎ᠡ</span> 书面 <code>sin-e</code> → 口语读 <b>shin</b>「新」）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '你 ᠴᠢ 与您 ᠲᠠ',
        html: '<p>蒙古语对平辈熟人用 <span class="mn">ᠴᠢ</span> chi（你），对长辈、客人或初次见面的人用敬称 <span class="mn">ᠲᠠ</span> ta（您）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '在传统蒙文里，辅音 ᠰ (s) 后面接元音 i 时，口语通常读作：', options: ['sh（如 ᠰᠢᠨ᠎ᠡ 读 shin）', 'm', 'k'], answer: 0 },
      { type: 'choice', q: '表示「我」和「您」的蒙文词分别是：', options: ['ᠪᠢ 、 ᠲᠠ', 'ᠠᠪᠤ 、 ᠡᠵᠢ', 'ᠤᠰᠤ 、 ᠰᠦᠨ'], answer: 0, script: true }
    ],
    source: { title: 'Wikipedia：Mongolian language', url: 'https://en.wikipedia.org/wiki/Mongolian_language' }
  },
  {
    id: 'm0-3',
    kind: 'script',
    title: '常用辅音字母（二）：舌根音、塞擦音与格助词',
    goal: '认识 ᠬ ᠭ ᠴ ᠵ ᠶ ᠷ 等字母，掌握「元音 + ᠭ + 元音」和「元音 + ᠶᠢ + 元音」的口语长元音规律。',
    minutes: 15,
    words: [
      { t: 'letter', s: 'ᠬ', w: 'q', p: 'kh', m: '清擦音 kh / h' },
      { t: 'letter', s: 'ᠭ', w: 'g', p: 'g', m: '舌根音 g / gh' },
      { t: 'letter', s: 'ᠴ', w: 'ch', p: 'ch', m: '清塞擦音 ch' },
      { t: 'letter', s: 'ᠵ', w: 'j', p: 'j', m: '塞擦音 j' },
      { t: 'letter', s: 'ᠶ', w: 'y', p: 'y', m: '半元音 y' },
      { t: 'letter', s: 'ᠷ', w: 'r', p: 'r', m: '颤音 r' },
      { s: 'ᠰᠠᠶᠢᠨ', w: 'sayin', p: 'sain', m: '好' },
      { s: 'ᠴᠠᠭᠠᠨ', w: 'chagan', p: 'tsagaan', m: '白色' },
      { s: 'ᠮᠤᠩᠭᠤᠯ', w: 'munggul', p: 'mongol', m: '蒙古' },
      { s: 'ᠭᠡᠷ', w: 'ger', p: 'ger', m: '家、蒙古包' }
    ],
    tips: [
      {
        at: 'start', kind: 'pron', title: '常用辅音字母（后 8 个）',
        html: function () { return LX.tpl.mnConsonantTable(12, 20); }
      },
      {
        at: 'mid', kind: 'pron', title: '两条最重要的读音桥梁：sayin → sain，aga → aa',
        html: '<ul><li>书面 <span class="mn">ᠠᠶᠢ</span> <code>ayi</code> 在口语里读作双元音 <b>ai</b>：如 <span class="mn">ᠰᠠᠶᠢᠨ</span> <code>sayin</code> → 读 <b>sain</b>（好），<span class="mn">ᠪᠠᠶᠢᠨ᠎ᠠ</span> <code>bayin-a</code> → 读 <b>baina</b>（在、是）。</li>' +
          '<li>书面「元音 + <span class="mn">ᠭ</span> g + 元音」在口语里 <span class="mn">ᠭ</span> 不发音，前后元音合并成长元音：如 <span class="mn">ᠴᠠᠭᠠᠨ</span> <code>chagan</code> → 读 <b>tsagaan</b>（白色）。</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: '常用格助词一览',
        html: function () { return LX.tpl.mnCaseTable(); }
      }
    ],
    exercises: [
      { type: 'choice', q: '书面蒙文 ᠰᠠᠶᠢᠨ（转写 sayin，「好」）在口语里怎么读？', options: ['sain', 'chagan', 'ger'], answer: 0 },
      { type: 'choice', q: '书面蒙文 ᠴᠠᠭᠠᠨ（chagan，「白色」）中间的 ᠭ 在口语里怎么读？', options: ['不发辅音，使前后元音合并为长元音 tsagaan', '读重音 k', '读作 m'], answer: 0 }
    ],
    source: { title: 'Wikipedia：Mongolian script', url: 'https://en.wikipedia.org/wiki/Mongolian_script' }
  }
]);
