/* 维吾尔语 · 阶段 1：入门会话（A1，共 4 课） */
LX.addLessons('ug', 'u1', [
  {
    id: 'u1-1',
    title: '问候：你好、平安与道谢',
    goal: '会用维吾尔语打招呼（ئەسسالامۇئەلەيكۇم / ياخشىمۇسىز）、问好、道谢与道别。',
    minutes: 15,
    words: [
      { s: 'ئەسسالامۇئەلەيكۇم', m: '祝您平安（传统问候语）' },
      { s: 'ۋەئەلەيكۇمئەسسالام', m: '也祝您平安（应答语）' },
      { s: 'ياخشىمۇسىز', m: '您好吗？' },
      { s: 'ياخشى', m: '好' },
      { s: 'رەھمەت', m: '谢谢' },
      { s: 'مەن', m: '我' },
      { s: 'سىز', m: '您（礼貌的第二人称）' },
      { s: 'ناھايىتى', m: '非常、很' },
      { s: 'خەير-خوش', m: '再见' }
    ],
    dialogue: {
      scene: '早上，艾力（Eli）在喀什街头遇到朋友古丽（Gül）。',
      people: { Eli: 'ئەلى', 'Gül': 'گۈل' },
      lines: [
        { who: 'Eli', s: 'ئەسسالامۇئەلەيكۇم！ سىز ياخشىمۇسىز؟', g: '祝您平安 您 您好吗', m: '祝您平安！您好吗？' },
        { who: 'Gül', s: 'ۋەئەلەيكۇمئەسسالام！ مەن ناھايىتى ياخشى، رەھمەت！', g: '也祝您平安 我 非常 好 谢谢', m: '也祝您平安！我非常好，谢谢！' },
        { who: 'Gül', s: 'سىزچۇ؟ سىزمۇ ياخشىمۇسىز؟', g: '您呢 您也 您好吗', m: '您呢？您也好吗？' },
        { who: 'Eli', s: 'رەھمەت، مەنمۇ ناھايىتى ياخشى.', g: '谢谢 我也 非常 好', m: '谢谢，我也很好。' },
        { who: 'Eli', s: 'خەير-خوش، گۈل！', g: '再见 古丽', m: '再见，古丽！' },
        { who: 'Gül', s: 'خەير-خوش، ئەلى！', g: '再见 艾力', m: '再见，艾力！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '右手抚胸的问候礼',
        html: '<p>维吾尔族见面打招呼时，常把右手放在左胸前微微欠身，说 <span class="ug">ئەسسالامۇئەلەيكۇم</span> essalamu\'eleykum（祝您平安），对方回答 <span class="ug">ۋەئەلەيكۇمئەسسالام</span>；日常也常直接说 <span class="ug">ياخشىمۇسىز</span> yaxshimusiz（您好吗？）。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '黏着词尾：-مۇ（吗 / 也）与 -چۇ（……呢？）',
        html: '<ul><li><span class="ug">ياخشى</span>（好）+ <span class="ug">مۇ</span>（吗）+ <span class="ug">سىز</span>（您）= <span class="ug">ياخشىمۇسىز</span>（您好吗？）</li>' +
          '<li>代词后接 <span class="ug">-مۇ</span> 表示「也」：<span class="ug">مەنمۇ</span> menmu（我也）、<span class="ug">سىزمۇ</span> sizmu（您也）</li>' +
          '<li>后接 <span class="ug">-چۇ</span> 表示「……呢？」：<span class="ug">سىزچۇ؟</span> sizchu?（您呢？）</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: '普通「你」سەن 与尊称「您」سىز',
        html: '<p>在日常礼貌交谈中，对平辈和长辈都普遍使用尊称 <span class="ug">سىز</span> siz（您）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '维吾尔语里「谢谢」怎么说？', options: ['رەھمەت', 'خەير-خوش', 'ياخشى'], answer: 0, script: true },
      { type: 'choice', q: 'مەنمۇ（menmu）末尾的 -مۇ 表示什么意思？', options: ['也（我也）', '不', '从哪里'], answer: 0 }
    ],
    source: { title: '现代维吾尔语日常问候会话', url: 'https://en.wikipedia.org/wiki/Uyghur_language' }
  },
  {
    id: 'u1-2',
    title: '你叫什么名字？你是哪里人？',
    goal: '会问对方的名字和来自哪里，会说乌鲁木齐、喀什与北京。',
    minutes: 15,
    words: [
      { s: 'ئىسمىڭىز', m: '您的名字' },
      { s: 'ئىسمىم', m: '我的名字' },
      { s: 'نېمە', m: '什么' },
      { s: 'قەيەرلىك', m: '哪里人' },
      { s: 'ئۈرۈمچى', m: '乌鲁木齐' },
      { s: 'قەشقەر', m: '喀什' },
      { s: 'بېيجىڭ', m: '北京' },
      { s: 'كەلدىم', m: '（我）来了' }
    ],
    dialogue: {
      scene: '小林在乌鲁木齐认识了来自喀什的艾力（Eli）。',
      people: { '小林': '', Eli: 'ئەلى' },
      lines: [
        { who: '小林', s: 'ئىسمىڭىز نېمە؟', g: '您的名字 什么', m: '您叫什么名字？' },
        { who: 'Eli', s: 'مېنىڭ ئىسمىم ئەلى. سىزنىڭ ئىسمىڭىز نېمە؟', g: '我的 我的名字 艾力 您的 您的名字 什么', m: '我的名字叫艾力。您叫什么名字？' },
        { who: '小林', s: 'مېنىڭ ئىسمىم لىن.', g: '我的 我的名字 林', m: '我的名字叫林。' },
        { who: '小林', s: 'سىز قەيەرلىك؟', g: '您 哪里人', m: '您是哪里人？' },
        { who: 'Eli', s: 'مەن قەشقەرلىك. سىز قەيەرلىك؟', g: '我 喀什人 您 哪里人', m: '我是喀什人。您是哪里人？' },
        { who: '小林', s: 'مەن بېيجىڭلىق، تۈنۈگۈن ئۈرۈمچىگە كەلدىم.', g: '我 北京人 昨天 到乌鲁木齐 我来了', m: '我是北京人，昨天来到乌鲁木齐。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '名词人称领属词尾：我的 -م、您的 -ڭىز',
        html: '<p>维吾尔语在名词后面直接加领属后缀来表示「我的」「您的」：</p>' +
          '<ul><li><span class="ug">ئىسىم</span> isim（名字）→ <span class="ug">ئىسمىم</span> ismim（我的名字）</li>' +
          '<li><span class="ug">ئىسىم</span> → <span class="ug">ئىسمىڭىز</span> ismingiz（您的名字）</li></ul>'
      },
      {
        at: 'mid', kind: 'grammar', title: '表示「……地方的人」：地名 + -لىك / -لىق',
        html: '<p>在地名后加 <span class="ug">-لىك / -لىق / -لۇق / -لۈك</span>（随元音和谐变化）就表示「某地人」：</p>' +
          '<ul><li><span class="ug">قەشقەر</span> Qeshqer（喀什，前元音）→ <span class="ug">قەشقەرلىك</span> Qeshqerlik（喀什人）</li>' +
          '<li><span class="ug">بېيجىڭ</span> Bëyjing → <span class="ug">بېيجىڭلىق</span> Bëyjingliq（北京人）</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: '向格助词 -گە / -غا：去某地、到某地',
        html: '<p><span class="ug">ئۈرۈمچىگە كەلدىم</span> Ürümchige keldim 中，地名后面的 <span class="ug">-گە</span> -ge 表示方向「到……去/来」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「您叫什么名字？」在维吾尔语里怎么说？', options: ['ئىسمىڭىز نېمە؟', 'سىز قەيەرلىك؟', 'مەن قەشقەرلىك.'], answer: 0, script: true },
      { type: 'choice', q: 'قەشقەرلىك 末尾的 -لىك 表示什么？', options: ['……地方的人（喀什人）', '去某地', '复数'], answer: 0 }
    ],
    source: { title: '现代维吾尔语自我介绍与籍贯表达', url: 'https://en.wiktionary.org/wiki/Category:Uyghur_lemmas' }
  },
  {
    id: 'u1-3',
    title: '我的家人与职业',
    goal: '会介绍父母、兄弟姐妹，掌握存在词 بار（有）与 يوق（没有），会说学生和老师。',
    minutes: 15,
    words: [
      { s: 'ئائىلە', m: '家庭' },
      { s: 'بار', m: '有、存在' },
      { s: 'يوق', m: '没有' },
      { s: 'ئاكا', m: '哥哥' },
      { s: 'ئاچا', m: '姐姐' },
      { s: 'ئىنى', m: '弟弟' },
      { s: 'سىڭىل', m: '妹妹' },
      { s: 'ئوقۇغۇچى', m: '学生' },
      { s: 'مۇئەللىم', m: '老师' }
    ],
    dialogue: {
      scene: '古丽和小林聊起各自的家庭成员与职业。',
      people: { 'Gül': 'گۈل', '小林': '' },
      lines: [
        { who: 'Gül', s: 'ئائىلىڭىزدە قانچە ئادەم بار؟', g: '在您的家里 几个 人 有', m: '您家里有几口人？' },
        { who: '小林', s: 'ئائىلەمدە تۆت ئادەم بار: دادام، ئانام، ئاچام ۋە مەن.', g: '在我家里 四 人 有 我爸 我妈 我姐 和 我', m: '我家有四口人：爸爸、妈妈、姐姐和我。' },
        { who: 'Gül', s: 'سىزنىڭ ئاكىڭىز بارمۇ؟', g: '您的 您的哥哥 有吗', m: '您有哥哥吗？' },
        { who: '小林', s: 'يوق، مېنىڭ ئاكام يوق، بىر ئاچام بار.', g: '没有 我的 我哥 没有 一个 我姐 有', m: '没有，我没有哥哥，有一个姐姐。' },
        { who: 'Gül', s: 'ئاچىڭىز ئوقۇغۇچىمۇ؟', g: '您的姐姐 是学生吗', m: '您姐姐是学生吗？' },
        { who: '小林', s: 'ياق، ئۇ مۇئەللىم، مەن ئوقۇغۇچى.', g: '不是 她 老师 我 学生', m: '不是，她是老师，我是学生。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '有 بار bar 与没有 يوق yoq',
        html: '<p>维吾尔语表示「有 / 在」用 <span class="ug">بار</span> bar，否定「没有 / 不在」用 <span class="ug">يوق</span> yoq，问「有吗？」加疑问词尾 <span class="ug">-مۇ</span>：<span class="ug">بارمۇ؟</span> barmu?</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '弱化音变：a / e 在开音节变 i',
        html: '<p>当以 <span class="ug">ا</span> a 或 <span class="ug">ە</span> e 结尾的多音节词加上元音开头的词尾时，词末的 a/e 会弱化成 <span class="ug">ى</span> i：</p>' +
          '<ul><li><span class="ug">ئاكا</span> aka（哥哥）+ <span class="ug">-ڭىز</span> → <span class="ug">ئاكىڭىز</span> akingiz（您的哥哥）</li>' +
          '<li><span class="ug">ئاچا</span> acha（姐姐）+ <span class="ug">-ڭىز</span> → <span class="ug">ئاچىڭىز</span> achingiz（您的姐姐）</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: '名词谓语句不用系动词「是」',
        html: '<p>说「我是学生」「她是老师」时，直接并列主语和名词：<span class="ug">مەن ئوقۇغۇچى</span>（我 学生），<span class="ug">ئۇ مۇئەللىم</span>（她 老师）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '维吾尔语里「有」和「没有」分别是：', options: ['بار 、 يوق', 'ياخشى 、 رەھمەت', 'مەن 、 سىز'], answer: 0, script: true },
      { type: 'choice', q: '「我是学生」在维吾尔语里怎么说？', options: ['مەن ئوقۇغۇچى.', 'ئۇ مۇئەللىم.', 'ئىسمىڭىز نېمە؟'], answer: 0, script: true }
    ],
    source: { title: '现代维吾尔语家庭与职业会话', url: 'https://en.wiktionary.org/wiki/Category:Uyghur_lemmas' }
  },
  {
    id: 'u1-4',
    title: '数字与大巴扎买水果',
    goal: '会数 1 到 10，会在巴扎（集市）问苹果、葡萄、石榴的价钱。',
    minutes: 15,
    words: [
      { s: 'بىر', m: '一' },
      { s: 'ئىككى', m: '二' },
      { s: 'ئۈچ', m: '三' },
      { s: 'تۆت', m: '四' },
      { s: 'بەش', m: '五' },
      { s: 'ئالتە', m: '六' },
      { s: 'يەتتە', m: '七' },
      { s: 'سەككىز', m: '八' },
      { s: 'توققۇز', m: '九' },
      { s: 'ئون', m: '十' },
      { s: 'ئالما', m: '苹果' },
      { s: 'ئۈزۈم', m: '葡萄' }
    ],
    dialogue: {
      scene: '小林在巴扎水果摊买吐鲁番葡萄和阿克苏苹果。',
      people: { '小林': '', '摊主': 'سودىگەر' },
      lines: [
        { who: '摊主', s: 'كېلىڭ！ ئالما ۋە ئۈزۈم ناھايىتى تاتلىق！', g: '请来 苹果 和 葡萄 非常 甜', m: '快来瞧！苹果和葡萄非常甜！' },
        { who: '小林', s: 'بۇ ئۈزۈم قانچە پۇل؟', g: '这 葡萄 多少 钱', m: '这葡萄多少钱？' },
        { who: '摊主', s: 'بىر كىلو ئون كوي.', g: '一 公斤 十 元', m: '一公斤十元。' },
        { who: '小林', s: 'ئالما قانچە پۇل؟', g: '苹果 多少 钱', m: '苹果多少钱？' },
        { who: '摊主', s: 'ئالما بىر كىلو سەككىز كوي.', g: '苹果 一 公斤 八 元', m: '苹果一公斤八元。' },
        { who: '小林', s: 'ياخشى، مەن ئىككى كىلو ئۈزۈم ۋە بىر كىلو ئالما ئالىمەن.', g: '好 我 二 公斤 葡萄 和 一 公斤 苹果 我买', m: '好，我买两公斤葡萄和一公斤苹果。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '1 到 10 数字表',
        html: '<table class="mini nums"><tr><td><span class="ug">بىر</span><br>bir 1</td><td><span class="ug">ئىككى</span><br>ikki 2</td><td><span class="ug">ئۈچ</span><br>üch 3</td><td><span class="ug">تۆت</span><br>töt 4</td><td><span class="ug">بەش</span><br>besh 5</td></tr>' +
          '<tr><td><span class="ug">ئالتە</span><br>alte 6</td><td><span class="ug">يەتتە</span><br>yette 7</td><td><span class="ug">سەككىز</span><br>sekkiz 8</td><td><span class="ug">توققۇز</span><br>toqquz 9</td><td><span class="ug">ئون</span><br>on 10</td></tr></table>'
      },
      {
        at: 'mid', kind: 'grammar', title: '数字放在名词前面，名词不加复数',
        html: '<p>与彝语、藏语相反，维吾尔语的数量词放在名词<b>前面</b>，而且带具体数字时名词保持单数形式：<span class="ug">ئىككى كىلو ئۈزۈم</span>（两公斤葡萄）。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '新疆按「公斤（كىلو）」卖东西',
        html: '<p>在新疆集市（<span class="ug">بازار</span> bazar）买瓜果牛羊肉，一律按<b>公斤</b>（<span class="ug">كىلو</span> kilo）计价，「元」口语常说 <span class="ug">كوي</span> koy 或书面语 <span class="ug">يۈەن</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '维吾尔语数字 بەش (besh) 和 ئون (on) 分别是几？', options: ['五、十', '三、八', '四、九'], answer: 0 },
      { type: 'choice', q: '「这葡萄多少钱？」怎么问？', options: ['بۇ ئۈزۈم قانچە پۇل؟', 'ئالما ناھايىتى تاتلىق！', 'بىر كىلو ئون كوي.'], answer: 0, script: true }
    ],
    source: { title: '现代维吾尔语巴扎购物会话', url: 'https://en.wikipedia.org/wiki/Uyghur_language' }
  }
]);
