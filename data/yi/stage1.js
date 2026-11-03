/* 彝语 · 阶段 1：入门会话（A1）
   会话取自 BabelStone《600 Phrases in the Liangshan Yi Dialect》（《凉山彝语会话六百句》英译本），
   有删节；标了 adapted: true 的句子是按原句替换词语改编的，还没有请母语者核对。
   每句话用空格分词：s 是彝文，g 是逐词注释（个数必须和 s 的词数一样），m 是意译。 */
LX.addLessons('yi', 'y1', [
  {
    id: 'y1-1',
    title: '路上相遇',
    goal: '会问「你从哪里来？」「你去哪里？」，会回答「我去西昌」，会问候对方家里好不好。',
    minutes: 15,
    words: [
      { s: 'ꆏ', m: '你' },
      { s: 'ꉢ', m: '我' },
      { s: 'ꆍ', m: '你们' },
      { s: 'ꇿ', m: '哪里' },
      { s: 'ꄉ', m: '从；在' },
      { s: 'ꇁ', m: '来' },
      { s: 'ꁧ', m: '去' },
      { s: 'ꏤ', m: '家' },
      { s: 'ꋬꂻ', m: '平安、健康' },
      { s: 'ꋬꂻꈨꅪ', m: '平安健康、很好' },
      { s: 'ꐥꅍꀋꐥ', m: '没事、一切都好' }
    ],
    dialogue: {
      scene: '在去西昌的山路上，Mugat 遇到了熟人 Mugox。',
      people: { Mugat: 'ꃅꇢ', Mugox: 'ꃅꇫ' },
      lines: [
        { who: 'Mugat', s: 'ꆏ ꇿ ꄉ ꇁ？', g: '你 哪里 从 来', m: '你从哪里来？' },
        { who: 'Mugox', s: 'ꉢ ꏪꐦ ꇓꈓ ꄉ ꇁ。', g: '我 昭觉 城 从 来', m: '我从昭觉城来。' },
        { who: 'Mugat', s: 'ꆍ ꏤ ꋬꂺꀕ？', g: '你们 家 平安吗', m: '你们家都好吗？' },
        { who: 'Mugox', s: 'ꋬꂻꈨꅪ ꄸ。', g: '平安健康 （语气）', m: '都很好。' },
        { who: 'Mugat', s: 'ꆏ ꇿ ꁧ ꂯ？', g: '你 哪里 去 （问）', m: '你去哪里？' },
        { who: 'Mugox', s: 'ꉢ ꀒꎂ ꁧ ꂯ。', g: '我 西昌 去 （语气）', m: '我去西昌。' },
        { who: 'Mugox', s: 'ꆍ ꏤ ꑌ ꋬꂻ ꀞ？', g: '你们 家 也 平安 吧', m: '你们家也都好吧？' },
        { who: 'Mugat', s: 'ꋬꂻꈨꅪ， ꐥꅍ ꀋ ꐥ。', g: '平安健康 事情 没 有', m: '都很好，什么事也没有。' },
        { who: 'Mugox', s: 'ꆏ ꇿ ꒉ？', g: '你 哪里 （往下）去', m: '你（往山下）去哪里？' },
        { who: 'Mugat', s: 'ꉢ ꑌ ꀒꎂ ꒉ。', g: '我 也 西昌 （往下）去', m: '我也去西昌。' },
        { who: 'Mugox', s: 'ꑷ！ ꉣꑊ ꐮꐊ ꁧ ꂿ。', g: '走吧 咱俩 一起 去 （吧）', m: '走吧！咱俩一起走。' },
        { who: 'Mugat', s: 'ꑷ！ ꆏ ꂴ ꐊ， ꉢ ꊁ ꐊ。', g: '走吧 你 前面 跟着走 我 后面 跟着走', m: '走吧！你走前面，我跟在后面。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '路上打招呼',
        html: '<p>在路上碰到熟人，可以问「你从哪里来？」「你去哪里？」。这和汉语里的「上哪儿去呀？」一样，是打招呼，并不是真的打听行程。</p>' +
          '<p>课文里的地名：<span class="yi">ꏪꐦ</span> juo jjop 昭觉，<span class="yi">ꀒꎂ</span> op rro 西昌（凉山州首府），<span class="yi">ꇓꈓ</span> lur kur 城。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '动词放在句子最后',
        html: '<p>彝语的语序是<b>主语 — 宾语/地点 — 动词</b>，和日语、藏语一样：</p>' +
          '<p class="ex"><span class="yi">ꉢ ꀒꎂ ꁧ</span><br>我 西昌 去 → 我去西昌</p>' +
          '<p>「从」<span class="yi">ꄉ</span> da 放在地点<b>后面</b>：<span class="yi">ꏪꐦ ꇓꈓ ꄉ ꇁ</span> = 昭觉 城 从 来。</p>' +
          '<p>问句也不改语序，把要问的地方换成 <span class="yi">ꇿ</span> kat（哪里）就行：<span class="yi">ꆏ ꇿ ꁧ？</span> 你去哪里？</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '重复最后一个音节 = 是不是？',
        html: '<p><span class="yi">ꀕ</span>（拼音写作 w）是重复号，表示「把前一个字再读一遍」。形容词或动词的最后一个音节重复，就变成了是非问句：</p>' +
          '<ul><li><span class="yi">ꃪ</span> vat 好 → <span class="yi">ꃪꀕ</span>？好吗？</li>' +
          '<li><span class="yi">ꋬꂻ</span> zzyr muo 平安 → <span class="yi">ꋬꂺꀕ</span> zzyr muox w？平安吗？</li></ul>' +
          '<p>注意：被重复的音节如果是中平调，第一遍要读成次高调（muo → muox muo），所以写成 <span class="yi">ꂺ</span> 加 <span class="yi">ꀕ</span>。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '三个「去」',
        html: '<p>凉山是山区，「去」要看往哪个方向走：</p>' +
          '<ul><li><span class="yi">ꁧ</span> bbo：一般的「去」</li>' +
          '<li><span class="yi">ꒉ</span> yy：往下走，例如 <span class="yi">ꉢ ꀁꋌ ꒉ</span>（我下去）</li>' +
          '<li><span class="yi">ꆹ</span> li：往上走，例如 <span class="yi">ꆏ ꄩ ꆹ</span>（你上去）</li></ul>'
      },
      {
        at: 'end', kind: 'culture', title: '让客人走在前面',
        html: '<p><span class="yi">ꐊ</span> qo 是「跟着走」，说的是山路窄、两个人只能一前一后走的情景。<span class="yi">ꆏ ꂴ ꐊ，ꉢ ꊁ ꐊ</span>「你走前面，我跟在后面」是客气的说法。</p>' +
          '<p>如果把 <span class="yi">ꐊ</span> 换成 <span class="yi">ꁧ</span>，意思就变成「你先去，我以后再去」了。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「我去西昌」在彝语里的语序是：', options: ['我 + 西昌 + 去', '我 + 去 + 西昌', '去 + 我 + 西昌'], answer: 0 },
      { type: 'choice', q: '要往山下走，「去」应该用哪个字？', options: ['ꒉ yy', 'ꆹ li', 'ꐊ qo'], answer: 0, script: true },
      { type: 'choice', q: 'ꋬꂺꀕ？ 末尾的 ꀕ 起什么作用？', options: ['重复前一个音节，构成「是不是」问句', '表示过去', '表示复数「们」'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 1 课 An Encounter on the Road', url: 'https://www.babelstone.co.uk/Yi/lesson_01.html' }
  },
  {
    id: 'y1-2',
    title: '你是哪里人？',
    goal: '会问别人是哪里人、是什么民族，会用 ꉬ 说「我是……」。',
    minutes: 15,
    words: [
      { id: 'ꀀ-居住', s: 'ꀀ', m: '居住' },
      { s: 'ꌠ', m: '……的人' },
      { s: 'ꉬ', m: '五；是' },
      { s: 'ꂷ', m: '个（用于一两个人）' },
      { s: 'ꆈꌠ', m: '诺苏（凉山彝族的自称）' },
      { s: 'ꉌꈲ', m: '汉族' },
      { s: 'ꅀ', m: '还是（选择问句）' },
      { s: 'ꃅꄷ', m: '地方、家乡' },
      { s: 'ꑝꅇ', m: '喜德（凉山的一个县）' },
      { s: 'ꀙꏢ', m: '北京' }
    ],
    dialogue: {
      scene: '小林是从北京来的汉族学生，在西昌认识了 Muxrryr。',
      people: { '小林': '', Muxrryr: 'ꃄꎓ' },
      lines: [
        { who: '小林', s: 'ꆏ ꇿ ꀀ ꌠ ꉬ？', g: '你 哪里 住 的人 是', m: '你是哪里人？' },
        { who: 'Muxrryr', s: 'ꉢ ꑝꅇ ꀀ ꌠ ꉬ。', g: '我 喜德 住 的人 是', m: '我是喜德人。' },
        { who: '小林', s: 'ꆏ ꆈꌠ ꅀ ꉌꈲ ꉬ？', g: '你 彝族 还是 汉族 是', m: '你是彝族还是汉族？' },
        { who: 'Muxrryr', s: 'ꉢ ꆈꌠ ꂷ ꉬ。', g: '我 彝族 个 是', m: '我是彝族。' },
        { who: 'Muxrryr', s: 'ꆏ ꇿ ꀀ ꌠ ꉬ？', g: '你 哪里 住 的人 是', m: '你是哪里人？' },
        { who: '小林', s: 'ꉢ ꀙꏢ ꀀ ꌠ ꉬ。', g: '我 北京 住 的人 是', m: '我是北京人。', adapted: true },
        { who: '小林', s: 'ꉢ ꉌꈲ ꂷ ꉬ。', g: '我 汉族 个 是', m: '我是汉族。', adapted: true },
        { who: '小林', s: 'ꆍ ꃅꄷ ꋬꂻꈨꅪ ꀞ！', g: '你们 家乡 太平 吧', m: '你们家乡很太平吧！' },
        { who: 'Muxrryr', s: 'ꋬꂻꈨꅪ， ꐥꅍꐥꀋꇲ。', g: '太平 安安静静', m: '很太平，安安静静的。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '「是」放在句末',
        html: '<p>判断句「A 是 B」在彝语里说成 <b>A B ꉬ</b>：</p>' +
          '<p class="ex"><span class="yi">ꉢ ꆈꌠ ꂷ ꉬ</span><br>我 彝族 个 是 → 我是彝族</p>' +
          '<p><span class="yi">ꂷ</span> ma 是用于一两个人的量词，要放在名词<b>后面</b>。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: 'ꌠ：把动作变成「……的人」',
        html: '<p><span class="yi">ꇿ ꀀ</span>（哪里 住）加上 <span class="yi">ꌠ</span> su，就成了「住在哪里的人」：</p>' +
          '<p class="ex"><span class="yi">ꆏ ꇿ ꀀ ꌠ ꉬ？</span><br>你 哪里 住 的人 是？ → 你是哪里人？</p>' +
          '<p>这句话问的是<b>家乡、出生地</b>，不是现在住在哪儿。回答：<span class="yi">ꉢ ꑝꅇ ꀀ ꌠ ꉬ</span>（我是喜德人）。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: 'ꅀ：A 还是 B？',
        html: '<p>把 <span class="yi">ꅀ</span> ddap 放在两个选项中间，就是选择问句：<span class="yi">ꆈꌠ ꅀ ꉌꈲ</span> 彝族还是汉族？</p>'
      },
      {
        at: 'end', kind: 'culture', title: '诺苏和凉山',
        html: '<p><span class="yi">ꆏ ꃅꄷ</span> 和 <span class="yi">ꆍ ꃅꄷ</span> 里的 <span class="yi">ꃅꄷ</span> mu ddix 原义是「地方」，跟在「你们」后面时指对方的家乡。</p>' +
          '<p>凉山彝语叫 <span class="yi">ꆃꎭ</span> niep sha，诺苏人主要生活在四川凉山彝族自治州和云南北部。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「ꆏ ꇿ ꀀ ꌠ ꉬ？」问的是：', options: ['对方的家乡、出生地', '对方现在住在哪里', '对方要去哪里'], answer: 0 },
      { type: 'choice', q: '「我是汉族」怎么说？', options: ['ꉢ ꉌꈲ ꂷ ꉬ。', 'ꉢ ꆈꌠ ꂷ ꉬ。', 'ꉢ ꉬ ꉌꈲ ꂷ。'], answer: 0, script: true },
      { type: 'choice', q: 'ꂷ 是什么词？', options: ['量词（用于一两个人）', '动词「是」', '疑问词「哪里」'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 5 课 A Conversation（有改编）', url: 'https://www.babelstone.co.uk/Yi/lesson_05.html' }
  },
  {
    id: 'y1-3',
    title: '我的家人',
    goal: '会说家庭成员的称呼，会问「你家有几口人？」「你有几个姐妹？」。',
    minutes: 15,
    words: [
      { s: 'ꀁꇬ', m: '家、家庭' },
      { s: 'ꊿ', m: '人' },
      { s: 'ꈍꑋ', m: '多少、几个' },
      { s: 'ꐥ', m: '有；在' },
      { s: 'ꀉꁌ', m: '爷爷' },
      { s: 'ꀊꂵ', m: '奶奶' },
      { s: 'ꀉꄉ', m: '爸爸' },
      { s: 'ꀉꂿ', m: '妈妈' },
      { s: 'ꃺꃶ', m: '哥哥（男子称）' },
      { s: 'ꀁꑳ', m: '弟弟（男子称）' },
      { s: 'ꅫꃀ', m: '姐妹（男子称）' }
    ],
    dialogue: {
      scene: 'Munyox 向 Muqie 打听他家里的情况。',
      people: { Munyox: 'ꃅꑖ', Muqie: 'ꃅꐂ' },
      lines: [
        { who: 'Munyox', s: 'ꆍ ꀁꇬ ꊿ ꈍꑋ ꐥ？', g: '你们 家 人 几个 有', m: '你家有几口人？' },
        { who: 'Muqie', s: 'ꉪ ꀁꇬ ꊿ ꏃꑹ ꉆꑼ ꐥ。', g: '我们 家 人 七个 八个 有', m: '我们家有七八口人。' },
        { who: 'Munyox', s: 'ꊿ ꋋꈨ ꅽ ꑞꀕ ꉬ？', g: '人 这些 你的 什么 是', m: '这些人是你的什么人？' },
        { who: 'Muqie', s: 'ꀉꁌ、 ꀊꂵ、 ꀉꄉ、 ꀉꂿ、 ꃺꃶ、 ꀁꑳ、 ꅫꃀ ꌋꆀ ꉢ。', g: '爷爷 奶奶 爸爸 妈妈 哥哥 弟弟 姐妹 和 我', m: '爷爷、奶奶、爸爸、妈妈、哥哥、弟弟、姐妹和我。' },
        { who: 'Munyox', s: 'ꆏ ꅫꃀ ꈍꑋ ꐥ？', g: '你 姐妹 几个 有', m: '你有几个姐妹？' },
        { who: 'Muqie', s: 'ꉢ ꅫꃀ ꋍꂷ ꐥ。', g: '我 姐妹 一个 有', m: '我有一个姐妹。' },
        { who: 'Munyox', s: 'ꅽ ꄩ ꅀ ꅽ ꇂꃴ ꉬ？', g: '你的 上面 还是 你的 下面 是', m: '她比你大还是比你小？' },
        { who: 'Muqie', s: 'ꉠ ꇂꃴ。', g: '我的 下面', m: '比我小。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '我、你和我的、你的',
        html: '<table class="mini"><tr><th>我</th><td><span class="yi">ꉢ</span> nga</td><th>我的</th><td><span class="yi">ꉠ</span> ngat</td></tr>' +
          '<tr><th>你</th><td><span class="yi">ꆏ</span> ne</td><th>你的</th><td><span class="yi">ꅽ</span> nit</td></tr>' +
          '<tr><th>我们</th><td><span class="yi">ꉪ</span> ngop</td><th>你们</th><td><span class="yi">ꆍ</span> nop</td></tr></table>' +
          '<p>「你的」「我的」靠变声母或声调来表示，不用另外加「的」。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '「有」：数量放在名词后面',
        html: '<p class="ex"><span class="yi">ꉢ ꅫꃀ ꋍꂷ ꐥ</span><br>我 姐妹 一个 有 → 我有一个姐妹</p>' +
          '<p>数词和量词跟在名词后面，<span class="yi">ꐥ</span> jjo（有）放在最后。问「几个」用 <span class="yi">ꈍꑋ</span> kep nyix。</p>' +
          '<p>人数是一两个时用量词 <span class="yi">ꂷ</span> ma，三个以上用 <span class="yi">ꑹ / ꑻ / ꑼ</span>（随前面数字的声调变化），例如 <span class="yi">ꏃꑹ ꉆꑼ</span> 七八个人。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '兄弟姐妹：男女说法不一样',
        html: '<p>彝语里兄弟姐妹的称呼取决于<b>说话人是男是女</b>，不能混用：</p>' +
          '<table class="mini"><tr><th></th><th>男子说</th><th>女子说</th></tr>' +
          '<tr><th>哥哥</th><td><span class="yi">ꃺꃶ</span> vyt vu</td><td rowspan="2"><span class="yi">ꂛꊨ</span> hmap zyt（兄弟）</td></tr>' +
          '<tr><th>弟弟</th><td><span class="yi">ꀁꑳ</span> ix yi</td></tr>' +
          '<tr><th>姐姐</th><td rowspan="2"><span class="yi">ꅫꃀ</span> hnip mop（姐妹）</td><td><span class="yi">ꃺꃀ</span> vyt mop</td></tr>' +
          '<tr><th>妹妹</th><td><span class="yi">ꑌꂵ</span> nyi mat</td></tr></table>' +
          '<p>「比你大还是比你小」说成 <span class="yi">ꅽ ꄩ ꅀ ꅽ ꇂꃴ</span>，字面是「你的上面还是你的下面」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '男子说「我的姐姐」，用哪个词？', options: ['ꅫꃀ', 'ꃺꃀ', 'ꑌꂵ'], answer: 0, script: true },
      { type: 'choice', q: '女子说「我的哥哥」，用哪个词？', options: ['ꂛꊨ', 'ꃺꃶ', 'ꀁꑳ'], answer: 0, script: true },
      { type: 'choice', q: '「ꉠ ꇂꃴ。」是什么意思？', options: ['比我小', '比我大', '我的弟弟'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 3 课 Family Circumstances (Part 1)', url: 'https://www.babelstone.co.uk/Yi/lesson_03.html' }
  },
  {
    id: 'y1-4',
    title: '数字与年龄',
    goal: '会数 1 到 10，会问和说年龄。',
    minutes: 15,
    words: [
      { s: 'ꋍ', m: '一' },
      { s: 'ꑍ', m: '二' },
      { s: 'ꌕ', m: '三' },
      { s: 'ꇖ', m: '四' },
      { s: 'ꉬ', m: '五；是' },
      { s: 'ꃘ', m: '六' },
      { s: 'ꏃ', m: '七' },
      { s: 'ꉆ', m: '八' },
      { s: 'ꈬ', m: '九' },
      { s: 'ꊰ', m: '十' },
      { s: 'ꑍꊏ', m: '二十' },
      { s: 'ꈍꑍꈓ', m: '几岁' }
    ],
    dialogue: {
      scene: 'Munyox 接着问 Muqie 家里人的年龄。',
      people: { Munyox: 'ꃅꑖ', Muqie: 'ꃅꐂ' },
      lines: [
        { who: 'Munyox', s: 'ꅽ ꀉꁌ ꀊꂵ ꈍꑍꈓ ꀐ？', g: '你的 爷爷 奶奶 几岁 了', m: '你爷爷奶奶多大年纪了？' },
        { who: 'Muqie', s: 'ꉠ ꀉꁌ ꏃꊰ ꈎ ꎖ ꀐ， ꉠ ꀊꂵ ꑌ ꏃꊰ ꈎ ꀐ。', g: '我的 爷爷 七十 岁 多 了 我的 奶奶 也 七十 岁 了', m: '我爷爷七十多岁了，我奶奶也七十岁了。' },
        { who: 'Munyox', s: 'ꅽ ꀉꄉ ꀉꂿ ꈍꑍꈓ ꀐ？', g: '你的 爸爸 妈妈 几岁 了', m: '你爸爸妈妈多大年纪了？' },
        { who: 'Muqie', s: 'ꉠ ꀉꄉ ꆹ ꉬꊯ ꈎ ꀐ， ꉠ ꀉꂿ ꆹ ꇖꊰꉬ ꈎ。', g: '我的 爸爸 （话题） 五十 岁 了 我的 妈妈 （话题） 四十五 岁', m: '我爸爸五十岁了，我妈妈四十五岁。' },
        { who: 'Munyox', s: 'ꅽ ꃺꃶ ꀁꑳ ꈍꑍꈓ ꀐ？', g: '你的 哥哥 弟弟 几岁 了', m: '你哥哥和弟弟多大了？' },
        { who: 'Muqie', s: 'ꉠ ꃺꃶ ꆹ ꑍꊎꉬ ꈎ ꀐ， ꀁꑳ ꆹ ꑍꊏ ꀋ ꈎ ꌦ。', g: '我的 哥哥 （话题） 二十五 岁 了 弟弟 （话题） 二十 不 岁 还', m: '我哥哥二十五岁了，弟弟还不到二十岁。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '1 到 10',
        html: '<table class="mini nums"><tr><td><span class="yi">ꋍ</span><br>cyp 1</td><td><span class="yi">ꑍ</span><br>nyip 2</td><td><span class="yi">ꌕ</span><br>suo 3</td><td><span class="yi">ꇖ</span><br>ly 4</td><td><span class="yi">ꉬ</span><br>nge 5</td></tr>' +
          '<tr><td><span class="yi">ꃘ</span><br>fut 6</td><td><span class="yi">ꏃ</span><br>shyp 7</td><td><span class="yi">ꉆ</span><br>hxit 8</td><td><span class="yi">ꈬ</span><br>ggu 9</td><td><span class="yi">ꊰ</span><br>ci 10</td></tr></table>' +
          '<p>注意 <span class="yi">ꉬ</span> nge 既是「五」又是「是」。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '几十、几十几',
        html: '<p>「几十」= 数字 + 十，「几十几」再接个位：</p>' +
          '<ul><li><span class="yi">ꑍꊏ</span> nyip zi 二十</li><li><span class="yi">ꏃꊰ</span> shyp ci 七十</li>' +
          '<li><span class="yi">ꉬꊯ</span> nge cix 五十</li><li><span class="yi">ꇖꊰꉬ</span> ly ci nge 四十五</li><li><span class="yi">ꑍꊎꉬ</span> nyip zix nge 二十五</li></ul>' +
          '<p>连读时声调会变，所以「十」有时写作 <span class="yi">ꊯ</span> cix，「二十」里的 <span class="yi">ꊏ</span> zi 有时写作 <span class="yi">ꊎ</span> zix。先照课文的写法记住。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '「岁」：ꈎ 还是 ꈓ？',
        html: '<p>「岁」有两个写法，看前一个字的声调：</p>' +
          '<ul><li>中平调后面用 <span class="yi">ꈎ</span> kut：<span class="yi">ꌕꈎ</span> 三岁、<span class="yi">ꉬꈎ</span> 五岁、<span class="yi">ꊰꈎ</span> 十岁</li>' +
          '<li>其他声调后面用 <span class="yi">ꈓ</span> kur：<span class="yi">ꋍꈓ</span> 一岁、<span class="yi">ꉆꈓ</span> 八岁、<span class="yi">ꈍꑍꈓ</span> 几岁</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: 'ꆹ：说到……',
        html: '<p><span class="yi">ꆹ</span> li 放在一个词后面，把它变成话题，意思像「说到……嘛」：</p>' +
          '<p class="ex"><span class="yi">ꉠ ꀉꄉ ꆹ ꉬꊯ ꈎ ꀐ</span><br>我爸爸嘛，五十岁了</p>' +
          '<p>句末的 <span class="yi">ꀐ</span> ox 表示动作完成或情况变化，相当于「了」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'ꇖ 是几？', options: ['四', '六', '九'], answer: 0 },
      { type: 'choice', q: '「三岁」怎么说？', options: ['ꌕꈎ', 'ꌕꈓ', 'ꌕꂷ'], answer: 0, script: true },
      { type: 'choice', q: '「八岁」怎么说？', options: ['ꉆꈓ', 'ꉆꈎ', 'ꉆꂷ'], answer: 0, script: true },
      { type: 'choice', q: 'ꑍꊏ 是多少？', options: ['二十', '十二', '二'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 3 课 Family Circumstances (Part 1)', url: 'https://www.babelstone.co.uk/Yi/lesson_03.html' }
  },
  {
    id: 'y1-5',
    title: '家里来客人',
    goal: '会迎接客人、请客人坐，会用彝族的客套话问候对方家里的孩子。',
    minutes: 15,
    words: [
      { s: 'ꄹꃥ', m: '客人' },
      { s: 'ꃥꌋ', m: '主人' },
      { s: 'ꇫꐥ', m: '在家' },
      { s: 'ꁨꇁ', m: '请进、请来' },
      { s: 'ꇫꑌ', m: '请坐' },
      { s: 'ꄓꎸ', m: '稀客（字面：起得早）' },
      { s: 'ꄓꑎ', m: '常来常往（字面：起得晚）' },
      { s: 'ꀉꑳ', m: '孩子' },
      { s: 'ꌺ', m: '儿子' },
      { s: 'ꀋꃋ', m: '女儿' }
    ],
    dialogue: {
      scene: '一位客人来到朋友家门口。',
      people: { '客人': 'ꄹꃥ', '主人': 'ꃥꌋ' },
      lines: [
        { who: '客人', s: 'ꃥꌋ ꇫꐥꀕ？ ꄹꃥ ꇁ ꀐ。', g: '主人 在家吗 客人 来 了', m: '主人在家吗？客人来了。' },
        { who: '主人', s: 'ꇫꐥ， ꁨꇁ。', g: '在家 请进', m: '在家，请进！' },
        { who: '主人', s: 'ꆏ ꄓꎸ。', g: '你 起得早', m: '稀客稀客！' },
        { who: '客人', s: 'ꄓꑎ。', g: '起得晚', m: '哪里，常来常往的。' },
        { who: '主人', s: 'ꇫꑌ， ꇫꑌ！', g: '请坐 请坐', m: '请坐，请坐！' },
        { who: '主人', s: 'ꀉꑳ ꑌ ꈩꅲ ꀞ！', g: '孩子 也 乖 吧', m: '孩子们也都乖吧！' },
        { who: '客人', s: 'ꈩꅲ。', g: '乖', m: '都很乖。' },
        { who: '主人', s: 'ꆏ ꀉꑳ ꈍꑋ ꐥ？', g: '你 孩子 几个 有', m: '你有几个孩子？' },
        { who: '客人', s: 'ꀉꑳ ꑍꂷ ꐥ。', g: '孩子 两个 有', m: '有两个孩子。' },
        { who: '主人', s: 'ꌺ ꈍꑋ？ ꀋꃋ ꈍꑋ？', g: '儿子 几个 女儿 几个', m: '几个儿子？几个女儿？' },
        { who: '客人', s: 'ꌺ ꍈ， ꀋꃋ ꍈ。', g: '儿子 少许 女儿 少许', m: '一个儿子，一个女儿。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'ꄓꎸ「起得早」和 ꄓꑎ「起得晚」',
        html: '<p><span class="yi">ꄓꎸ</span> dep she 字面是「起得早」，本来是早上见面的招呼语（「你起得真早！」），回答是 <span class="yi">ꄓꑎ</span> dep nyiet「起得晚」。</p>' +
          '<p>这两句话也用作主客之间的客套话：主人对远道而来、难得来一次的客人说 <span class="yi">ꆏ ꄓꎸ</span>（稀客！），客人回答 <span class="yi">ꄓꑎ</span>，意思是「我常来，不用特别招待」。</p>' +
          '<p>晚上来的客人，主人说 <span class="yi">ꈊꏹ</span> ket jyp（字面「晚了」），客人回答 <span class="yi">ꏹꄮꈧꀋꁨ</span>（「不算晚」）。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '请上座：ꉎꑌ',
        html: '<p>除了 <span class="yi">ꇫꑌ</span>（请坐），主人还会说 <span class="yi">ꉎꑌ</span> hxat nyi，字面是「坐上面」，请客人坐上座。客人越尊贵，主人请得越热情。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '问候孩子和老人',
        html: '<p><span class="yi">ꈩꅲ</span> ggep hna 字面是「肯玩」，用来客气地问别人的孩子乖不乖、好不好。</p>' +
          '<p>问候对方家里的老人，常说 <span class="yi">ꋙꋠꒉꅝꄾꀕ？</span> zzax zze yy ndo ddax w「吃饭喝水都正常吗？」，回答 <span class="yi">ꄿꐯꄿ</span>「很好」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '主人见到很久没来的客人，会说：', options: ['ꆏ ꄓꎸ。', 'ꄓꑎ。', 'ꇫꑌ！'], answer: 0, script: true },
      { type: 'choice', q: '客人回答「ꄓꑎ」，字面意思是：', options: ['起得晚', '起得早', '走错路了'], answer: 0 },
      { type: 'choice', q: '问候别人的孩子，常说：', options: ['ꀉꑳ ꑌ ꈩꅲ ꀞ！', 'ꆍ ꏤ ꋬꂺꀕ？', 'ꆏ ꇿ ꁧ ꂯ？'], answer: 0, script: true }
    ],
    source: { title: 'BabelStone 第 8 课 A Guest Arrives', url: 'https://www.babelstone.co.uk/Yi/lesson_08.html' }
  },
  {
    id: 'y1-6',
    title: '起床洗漱',
    goal: '会说「天亮了」「起来了吗」「睡得好吗」，会问洗漱间在哪儿、有没有热水。',
    minutes: 15,
    words: [
      { s: 'ꃅꄜ', m: '天亮' },
      { s: 'ꄓ', m: '起来、起床' },
      { s: 'ꀀꌒ', m: '睡得好' },
      { s: 'ꋙꋠ', m: '吃饭' },
      { s: 'ꃢꈜ', m: '衣服' },
      { s: 'ꈚ', m: '穿（衣服）' },
      { s: 'ꒈꋌꅉ', m: '洗漱间' },
      { s: 'ꒉꊸ', m: '热水' },
      { s: 'ꒉꈻ', m: '冷水' }
    ],
    dialogue: {
      scene: '早上，Gatga 叫同屋的 Vytdda 起床。',
      people: { Gatga: 'ꇢꇤ', Vytdda: 'ꃺꄿ' },
      lines: [
        { who: 'Gatga', s: 'ꃅꄜ ꀐ， ꄓ ꄿ ꀐ。', g: '天亮 了 起来 该 了', m: '天亮了，该起床了。' },
        { who: 'Vytdda', s: 'ꆏ ꄓ ꀐ ꅀ？', g: '你 起来 了 吧', m: '你起来了吧？' },
        { who: 'Gatga', s: 'ꉢ ꄓ ꀐ。', g: '我 起来 了', m: '我起来了。' },
        { who: 'Gatga', s: 'ꆏ ꀀꌒꀕ？', g: '你 睡得好吗', m: '你睡得好吗？' },
        { who: 'Vytdda', s: 'ꀀꌒ。', g: '睡得好', m: '睡得很好。' },
        { who: 'Gatga', s: 'ꉆꐥꃅ ꄓ ꇁ， ꋙꋠ ꇁ ꂯꄉ ꀐ。', g: '快快地 起 来 吃饭 来 快要 了', m: '快起来吧，快要吃早饭了。' },
        { who: 'Gatga', s: 'ꃢꈜ ꈚ ꄉ， ꋃꒉ ꊌ ꇁ ꂵ！', g: '衣服 穿 好 感冒 得 来 小心', m: '把衣服穿好，小心着凉感冒！' },
        { who: 'Vytdda', s: 'ꒈꋌꅉ ꇿ ꐛ？', g: '洗漱间 哪里 在', m: '洗漱间在哪儿？' },
        { who: 'Gatga', s: 'ꀊꄶ ꉎ ꐛ。', g: '那边 上坡 在', m: '在上面那边。' },
        { who: 'Vytdda', s: 'ꒉꊸ ꐤꀕ？', g: '热水 有吗', m: '有热水吗？' },
        { who: 'Gatga', s: 'ꒉꊸ ꑌ ꐥ， ꒉꈻ ꑌ ꐥ。', g: '热水 也 有 冷水 也 有', m: '有热水，也有冷水。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: 'ꀐ：……了',
        html: '<p>句末的 <span class="yi">ꀐ</span> ox 表示事情已经发生或情况有了变化：</p>' +
          '<ul><li><span class="yi">ꃅꄜ ꀐ</span> 天亮了</li><li><span class="yi">ꉢ ꄓ ꀐ</span> 我起来了</li></ul>'
      },
      {
        at: 'mid', kind: 'grammar', title: '两种问法：ꀕ 和 ꅀ',
        html: '<p>不知道答案时，用重复音节提问：<span class="yi">ꊿ ꇁ ꌐ ꀕ？</span> 大家都到了吗？</p>' +
          '<p>心里已经猜到答案、只是确认一下时，句末加 <span class="yi">ꅀ</span> ddap：<span class="yi">ꊿ ꇁ ꌐ ꀐ ꅀ？</span> 大家都到了吧？</p>' +
          '<p>「有」<span class="yi">ꐥ</span> jjo 的问句是 <span class="yi">ꐤꀕ</span> jjox w「有没有？」。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: 'ꂵ：小心别……',
        html: '<p><span class="yi">ꂵ</span> mat 放在祈使句末尾，提醒对方小心别发生某事：</p>' +
          '<p class="ex"><span class="yi">ꋃꒉ ꊌ ꇁ ꂵ！</span> 小心感冒！</p>'
      },
      {
        at: 'end', kind: 'culture', title: '山区的方位：ꉎ 上坡、ꐰ 下坡',
        html: '<p><span class="yi">ꉎ</span> hxat 指地势较高的地方，<span class="yi">ꐰ</span> jjyp 指较低的地方。配合第 1 课的「上去 ꆹ / 下去 ꒉ」：</p>' +
          '<p class="ex"><span class="yi">ꆏ ꉎ ꆹ，ꉢ ꐰ ꒉ</span><br>你往上走，我往下走</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「ꆏ ꄓ ꀐ ꅀ？」是什么语气？', options: ['猜对方已经起来了，确认一下', '完全不知道对方起没起', '命令对方起床'], answer: 0 },
      { type: 'choice', q: '「有热水吗？」怎么说？', options: ['ꒉꊸ ꐤꀕ？', 'ꒉꈻ ꐤꀕ？', 'ꒉꊸ ꑌ ꐥ。'], answer: 0, script: true },
      { type: 'choice', q: 'ꂵ 放在命令句末尾，表示：', options: ['小心（别……）', '已经', '一起'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 6 课 Getting Up and Washing', url: 'https://www.babelstone.co.uk/Yi/lesson_06.html' }
  },
  {
    id: 'y1-7',
    title: '该睡觉了',
    goal: '会说「我累了」「想睡了」，会问对方有没有被子、枕头，会问「可以关灯吗」。',
    minutes: 15,
    words: [
      { s: 'ꁦꋠ', m: '伙计（男子之间的称呼）' },
      { s: 'ꌋꐓ', m: '夜里' },
      { s: 'ꐙꄏ', m: '累、困' },
      { s: 'ꀀꑌꇴ', m: '睡觉、入睡' },
      { s: 'ꏾ', m: '愿意、想要' },
      { s: 'ꀀꀨ', m: '被子' },
      { s: 'ꈈꇉ', m: '褥子（薄床垫）' },
      { s: 'ꀑꈑ', m: '枕头' },
      { s: 'ꄆꄒ', m: '电灯' },
      { s: 'ꈢ', m: '关（灯）' }
    ],
    dialogue: {
      scene: '夜深了，Datti 和 Muxga 准备睡觉。',
      people: { Datti: 'ꄇꄜ', Muxga: 'ꃄꇤ' },
      lines: [
        { who: 'Datti', s: 'ꁦꋠ， ꌋꐓ ꆺꄜꀕ ꀐ， ꀀ ꄿ ꀐ。', g: '伙计 夜里 深更 了 睡 该 了', m: '伙计，夜深了，该睡了。' },
        { who: 'Muxga', s: 'ꉢ ꀀꑌꇴ ꀋ ꏾ ꌦ。', g: '我 睡觉 不 想 还', m: '我还不想睡。' },
        { who: 'Datti', s: 'ꉢ ꐙꄏ ꀐ， ꀀꑌꇴ ꏾ ꀐ。', g: '我 累 了 睡觉 想 了', m: '我累了，想睡了。' },
        { who: 'Muxga', s: 'ꆏ ꀀ ꏾ ꆏ ꁨ ꀀ ꁧ。', g: '你 睡 想 的话 请 睡 去', m: '你想睡就去睡吧。' },
        { who: 'Datti', s: 'ꆏ ꀀꀨ ꈈꇉ ꐤꀕ？', g: '你 被子 褥子 有吗', m: '你有被子和褥子吗？' },
        { who: 'Muxga', s: 'ꈈꇉ ꋍꈬ、 ꀀꀨ ꑍꈬ ꐥ。', g: '褥子 一床 被子 两床 有', m: '有一床褥子、两床被子。' },
        { who: 'Datti', s: 'ꆏ ꀑꈑ ꊌꀕ？', g: '你 枕头 有吗', m: '你有枕头吗？' },
        { who: 'Muxga', s: 'ꉢ ꀑꈑ ꑍꂷ ꐥ。', g: '我 枕头 两个 有', m: '我有两个枕头。' },
        { who: 'Datti', s: 'ꄆꄒ ꈢ ꄾꀕ？', g: '电灯 关 可以吗', m: '可以关灯吗？' },
        { who: 'Muxga', s: 'ꄆꄒ ꈢ ꄿ ꀐ。', g: '电灯 关 可以 了', m: '可以关灯了。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'ꁦꋠ：只在男人之间用',
        html: '<p><span class="yi">ꁦꋠ</span> bbox zze 是关系亲近的男人之间的称呼，像汉语的「伙计」「哥们儿」。女人从来不用这个词，因为它在别的场合还有「丈夫」的意思。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '……ꆏ：如果……就……',
        html: '<p>第一个分句末尾加 <span class="yi">ꆏ</span> ne，表示条件：</p>' +
          '<p class="ex"><span class="yi">ꆏ ꀀ ꏾ ꆏ，ꁨ ꀀ ꁧ</span><br>你 睡 想 的话，请 睡 去 → 你想睡就去睡吧</p>' +
          '<p>同一个字在句首是「你」，在分句末尾是「如果」，要看位置。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '名词 + 数字 + 量词',
        html: '<p>和汉语相反，彝语的数量放在名词<b>后面</b>：</p>' +
          '<ul><li><span class="yi">ꀑꈑ ꑍꂷ</span> 枕头 两个</li><li><span class="yi">ꀀꀨ ꑍꈬ</span> 被子 两床</li></ul>' +
          '<p><span class="yi">ꈬ</span> ggu 是衣服、被褥的量词（和「九」同一个字）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: 'ꄿ：可以、应该',
        html: '<p><span class="yi">ꄿ</span> dda 表示「可以、应该」：<span class="yi">ꀀ ꄿ ꀐ</span> 该睡了。它的问句形式是 <span class="yi">ꄾꀕ</span> ddax w「可以吗？」：<span class="yi">ꄆꄒ ꈢ ꄾꀕ？</span></p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'ꁦꋠ 一般谁用？', options: ['关系亲近的男人之间', '女人之间', '晚辈对长辈'], answer: 0 },
      { type: 'choice', q: '「两个枕头」怎么说？', options: ['ꀑꈑ ꑍꂷ', 'ꑍꂷ ꀑꈑ', 'ꑍ ꀑꈑ ꂷ'], answer: 0, script: true },
      { type: 'choice', q: '「ꆏ ꀀ ꏾ ꆏ，ꁨ ꀀ ꁧ」里第二个 ꆏ 是什么意思？', options: ['如果……（就）', '你', '吗'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 7 课 Going to Bed', url: 'https://www.babelstone.co.uk/Yi/lesson_07.html' }
  }
]);
