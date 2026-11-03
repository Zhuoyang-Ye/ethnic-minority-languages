/* 傈僳语 · 阶段 1：入门会话（A1，共 4 课） */
LX.addLessons('lisu', 'l1', [
  {
    id: 'l1-1',
    title: '怒江问候：你好与平安',
    goal: '会用傈僳语打招呼、问候对方好不好、说谢谢与再见。',
    minutes: 15,
    words: [
      { s: 'ꓠꓴ', m: '你' },
      { s: 'ꓥꓪ', m: '我' },
      { s: 'ꓙꓲꓻ', m: '好、平安' },
      { s: 'ꓡꓯꓹ', m: '吗（疑问助词）' },
      { s: 'ꓟꓯꓼ-ꓙꓲꓻ', m: '非常好、真好' },
      { s: 'ꓘꓳꓽ-ꓡꓯꓸ', m: '谢谢' },
      { s: 'ꓮꓸ-ꓕꓮꓸ', m: '哪里' },
      { s: 'ꓙꓰꓻ', m: '去、走' },
      { s: 'ꓡꓮꓻ', m: '来' },
      { s: 'ꓮꓹ-ꓟꓬꓮꓸ', m: '慢走、再见' }
    ],
    dialogue: {
      scene: '在怒江六库的山路上，阿普（Apu）遇见了朋友阿娜（Ana）。',
      people: { Apu: 'ꓮꓸ-ꓑꓴ', Ana: 'ꓮꓸ-ꓠꓮ' },
      lines: [
        { who: 'Apu', s: 'ꓠꓴ ꓙꓲꓻ ꓡꓯꓹ？', g: '你 好 吗', m: '你好吗？' },
        { who: 'Ana', s: 'ꓥꓪ ꓟꓯꓼ-ꓙꓲꓻ， ꓘꓳꓽ-ꓡꓯꓸ！', g: '我 非常好 谢谢', m: '我很好，谢谢！' },
        { who: 'Ana', s: 'ꓠꓴ ꓮꓸ-ꓕꓮꓸ ꓙꓰꓻ ꓡꓯꓹ？', g: '你 哪里 去 吗', m: '你去哪里？' },
        { who: 'Apu', s: 'ꓥꓪ ꓡꓳ-ꓟꓶꓻ ꓙꓰꓻ。', g: '我 怒江（泸水） 去', m: '我去泸水。' },
        { who: 'Apu', s: 'ꓠꓴ ꓮꓸ-ꓕꓮꓸ ꓡꓮꓻ？', g: '你 哪里 来', m: '你从哪里来？' },
        { who: 'Ana', s: 'ꓥꓪ ꓡꓳ-ꓟꓶꓻ ꓡꓮꓻ， ꓮꓹ-ꓟꓬꓮꓸ！', g: '我 泸水 来 慢走再见', m: '我从泸水来，慢走再见！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: 'SOV 语序与句末疑问词 ꓡꓯꓹ',
        html: '<p>傈僳语和彝语、藏语一样，动词放在句末，疑问助词 <span class="lisu">ꓡꓯꓹ</span> laex（吗）放在整句话最后：</p>' +
          '<p class="ex"><span class="lisu">ꓠꓴ ꓙꓲꓻ ꓡꓯꓹ？</span><br>你 好 吗？ → 你好吗？</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '路上寒暄：「你去哪里？」',
        html: '<p>在怒江峡谷遇到熟人，最自然的打招呼也是 <span class="lisu">ꓠꓴ ꓮꓸ-ꓕꓮꓸ ꓙꓰꓻ？</span>（你去哪里？），与凉山彝语的「ꆏ ꇿ ꁧ？」如出一辙。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '谢谢：ꓘꓳꓽ-ꓡꓯꓸ khol-laet',
        html: '<p>日常道谢常说 <span class="lisu">ꓘꓳꓽ-ꓡꓯꓸ</span>，道别时祝对方一路平安说 <span class="lisu">ꓮꓹ-ꓟꓬꓮꓸ</span>（慢走）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「你好吗？」在傈僳语里怎么说？', options: ['ꓠꓴ ꓙꓲꓻ ꓡꓯꓹ？', 'ꓥꓪ ꓡꓳ-ꓟꓶꓻ ꓙꓰꓻ。', 'ꓘꓳꓽ-ꓡꓯꓸ！'], answer: 0, script: true },
      { type: 'choice', q: 'ꓙꓰꓻ 和 ꓡꓮꓻ 分别是什么意思？', options: ['去、来', '好、坏', '你、我'], answer: 0 }
    ],
    source: { title: '怒江傈僳语日常问候整理', url: 'https://en.wikipedia.org/wiki/Lisu_language' }
  },
  {
    id: 'l1-2',
    title: '你是哪里人？姓名与族称',
    goal: '会问别人的名字和民族，会用系动词 ꓥꓻ（是）自我介绍。',
    minutes: 15,
    words: [
      { s: 'ꓟꓬꓲꓻ', m: '名字' },
      { s: 'ꓮꓸ-ꓫꓲꓸ', m: '什么' },
      { s: 'ꓥꓻ', m: '是' },
      { s: 'ꓟꓮꓼ', m: '不、没有' },
      { s: 'ꓡꓲ-ꓢꓴ', m: '傈僳（自称）' },
      { s: 'ꓡꓮꓸ-ꓚꓳꓻ', m: '人' },
      { s: 'ꓧꓯꓽ-ꓑꓮꓸ', m: '汉族' },
      { s: 'ꓡꓲ-ꓢꓴ-ꓟꓶꓻ', m: '傈僳地方、怒江家乡' }
    ],
    dialogue: {
      scene: '小林在怒江认识了当地青年阿普（Apu）。',
      people: { '小林': '', Apu: 'ꓮꓸ-ꓑꓴ' },
      lines: [
        { who: '小林', s: 'ꓠꓴ ꓟꓬꓲꓻ ꓮꓸ-ꓫꓲꓸ ꓥꓻ？', g: '你 名字 什么 是', m: '你叫什么名字？' },
        { who: 'Apu', s: 'ꓥꓪ ꓟꓬꓲꓻ ꓮꓸ-ꓑꓴ ꓥꓻ。', g: '我 名字 阿普 是', m: '我的名字是阿普。' },
        { who: '小林', s: 'ꓠꓴ ꓡꓲ-ꓢꓴ ꓡꓮꓸ-ꓚꓳꓻ ꓥꓻ ꓡꓯꓹ？', g: '你 傈僳 人 是 吗', m: '你是傈僳族人吗？' },
        { who: 'Apu', s: 'ꓥꓻ， ꓥꓪ ꓡꓲ-ꓢꓴ ꓡꓮꓸ-ꓚꓳꓻ ꓥꓻ。', g: '是 我 傈僳 人 是', m: '是的，我是傈僳族人。' },
        { who: 'Apu', s: 'ꓠꓴ ꓧꓯꓽ-ꓑꓮꓸ ꓥꓻ ꓡꓯꓹ？', g: '你 汉族 是 吗', m: '你是汉族吗？' },
        { who: '小林', s: 'ꓥꓻ， ꓥꓪ ꓧꓯꓽ-ꓑꓮꓸ ꓥꓻ， ꓡꓲ-ꓢꓴ-ꓟꓶꓻ ꓟꓯꓼ-ꓙꓲꓻ！', g: '是 我 汉族 是 怒江家乡 非常好', m: '是的，我是汉族，怒江这地方真美！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '系动词「是」：ꓥꓻ ngal',
        html: '<p>傈僳语的「是」写作 <span class="lisu">ꓥꓻ</span> ngal，放在句末：</p>' +
          '<p class="ex"><span class="lisu">ꓥꓪ ꓡꓲ-ꓢꓴ ꓡꓮꓸ-ꓚꓳꓻ ꓥꓻ。</span><br>我 傈僳 人 是 → 我是傈僳人。</p>' +
          '<p>否定「不是」把否定词 <span class="lisu">ꓟꓮꓼ</span> maq 放在 <span class="lisu">ꓥꓻ</span> 前面：<span class="lisu">ꓟꓮꓼ ꓥꓻ</span>（不是）。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '你的名字、我的名字',
        html: '<p>代词 <span class="lisu">ꓠꓴ</span>（你）、<span class="lisu">ꓥꓪ</span>（我）直接放在名词 <span class="lisu">ꓟꓬꓲꓻ</span>（名字）前面就表示领属「你的名字」「我的名字」。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '傈僳族的排行起名传统',
        html: '<p>怒江傈僳族常按出生排行起名，比如男子排行老大叫阿大、老二叫阿二、老三叫阿三，女子也有对应的排行名字。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「我是傈僳人」怎么说？', options: ['ꓥꓪ ꓡꓲ-ꓢꓴ ꓡꓮꓸ-ꓚꓳꓻ ꓥꓻ。', 'ꓠꓴ ꓟꓬꓲꓻ ꓮꓸ-ꓫꓲꓸ ꓥꓻ？', 'ꓥꓪ ꓡꓳ-ꓟꓶꓻ ꓙꓰꓻ。'], answer: 0, script: true },
      { type: 'choice', q: 'ꓟꓮꓼ ꓥꓻ 是什么意思？', options: ['不是', '是的', '什么名字'], answer: 0 }
    ],
    source: { title: '怒江傈僳语自我介绍会话整理', url: 'https://en.wiktionary.org/wiki/Category:Lisu_language' }
  },
  {
    id: 'l1-3',
    title: '我的家人与亲属',
    goal: '会说父母、哥哥、姐姐、弟弟、妹妹，会用 ꓙꓳꓻ（有、在）介绍家庭人口。',
    minutes: 15,
    words: [
      { s: 'ꓧꓲꓻ', m: '家、房子' },
      { s: 'ꓙꓳꓻ', m: '有；在（与彝语 ꐥ jjo 同源）' },
      { s: 'ꓮꓸ-ꓑꓮ', m: '爸爸' },
      { s: 'ꓮꓸ-ꓟꓮ', m: '妈妈' },
      { s: 'ꓮꓸ-ꓬꓲꓸ', m: '哥哥' },
      { s: 'ꓮꓸ-ꓜꓰꓸ', m: '姐姐' },
      { s: 'ꓠꓲꓹ-ꓣꓮꓻ', m: '弟弟、妹妹' },
      { s: 'ꓮꓸ-ꓟꓬꓲꓹ', m: '多少、几个' }
    ],
    dialogue: {
      scene: '阿娜向小林介绍自己家里的亲人。',
      people: { '小林': '', Ana: 'ꓮꓸ-ꓠꓮ' },
      lines: [
        { who: '小林', s: 'ꓠꓴ ꓧꓲꓻ ꓡꓮꓸ-ꓚꓳꓻ ꓮꓸ-ꓟꓬꓲꓹ ꓙꓳꓻ？', g: '你 家 人 几个 有', m: '你家有几口人？' },
        { who: 'Ana', s: 'ꓥꓪ ꓧꓲꓻ ꓮꓸ-ꓑꓮ、 ꓮꓸ-ꓟꓮ、 ꓮꓸ-ꓬꓲꓸ ꓙꓳꓻ。', g: '我 家 爸爸 妈妈 哥哥 有', m: '我家有爸爸、妈妈和哥哥。' },
        { who: '小林', s: 'ꓠꓴ ꓮꓸ-ꓜꓰꓸ ꓙꓳꓻ ꓡꓯꓹ？', g: '你 姐姐 有 吗', m: '你有姐姐吗？' },
        { who: 'Ana', s: 'ꓮꓸ-ꓜꓰꓸ ꓟꓮꓼ ꓙꓳꓻ， ꓠꓲꓹ-ꓣꓮꓻ ꓙꓳꓻ。', g: '姐姐 不 有 弟妹 有', m: '没有姐姐，有弟弟妹妹。' },
        { who: '小林', s: 'ꓠꓴ ꓮꓸ-ꓑꓮ ꓮꓸ-ꓟꓮ ꓧꓲꓻ ꓙꓳꓻ ꓡꓯꓹ？', g: '你 爸爸 妈妈 家 在 吗', m: '你爸爸妈妈在家吗？' },
        { who: 'Ana', s: 'ꓙꓳꓻ， ꓬꓲ ꓧꓲꓻ ꓙꓳꓻ。', g: '在 他们 家 在', m: '在，他们在家。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '与彝语高度同源的词汇',
        html: '<p>对比傈僳语和凉山彝语，你会发现许多同源词：</p>' +
          '<table class="mini"><tr><th>意思</th><th>傈僳语</th><th>凉山彝语</th></tr>' +
          '<tr><th>有 / 在</th><td><span class="lisu">ꓙꓳꓻ</span> jol</td><td><span class="yi">ꐥ</span> jjo</td></tr>' +
          '<tr><th>家 / 房子</th><td><span class="lisu">ꓧꓲꓻ</span> hil</td><td><span class="yi">ꑳ</span> yi</td></tr>' +
          '<tr><th>不 / 没</th><td><span class="lisu">ꓟꓮꓼ</span> maq</td><td><span class="yi">ꀋ</span> ap / <span class="yi">ꂵ</span> mat</td></tr></table>'
      },
      {
        at: 'mid', kind: 'grammar', title: '没有：ꓟꓮꓼ ꓙꓳꓻ maq jol',
        html: '<p><span class="lisu">ꓙꓳꓻ</span> jol（有/在）前面加上否定词 <span class="lisu">ꓟꓮꓼ</span> maq，就是「没有、不在」。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '亲属称谓前缀 ꓮꓸ-',
        html: '<p>和彝语（ꀉꄉ、ꀉꂿ）、藏语（ཨ་མ、ཨ་ལྕག）一样，傈僳语亲属词大多带词头 <span class="lisu">ꓮꓸ-</span> at-。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '傈僳语里表示「有、在」（与彝语 ꐥ jjo 同源）的词是：', options: ['ꓙꓳꓻ', 'ꓥꓻ', 'ꓙꓰꓻ'], answer: 0, script: true },
      { type: 'choice', q: 'ꓮꓸ-ꓜꓰꓸ ꓟꓮꓼ ꓙꓳꓻ 是什么意思？', options: ['没有姐姐', '有一个姐姐', '姐姐不在家'], answer: 0 }
    ],
    source: { title: '怒江傈僳语亲属词汇整理', url: 'https://en.wiktionary.org/wiki/Category:Lisu_language' }
  },
  {
    id: 'l1-4',
    title: '数字与集市买卖',
    goal: '掌握傈僳语数字 1–10（对比彝语数字同源词），会在集市问价钱和买东西。',
    minutes: 15,
    words: [
      { s: 'ꓕꓲꓽ', m: '一' },
      { s: 'ꓠꓬꓲꓽ', m: '二' },
      { s: 'ꓢꓮꓻ', m: '三' },
      { s: 'ꓡꓲꓹ', m: '四' },
      { s: 'ꓥꓪꓼ', m: '五' },
      { s: 'ꓛꓳꓽ', m: '六' },
      { s: 'ꓫꓲꓽ', m: '七' },
      { s: 'ꓧꓲꓽ', m: '八' },
      { s: 'ꓗꓴꓻ', m: '九' },
      { s: 'ꓕꓢꓲꓻ', m: '十' },
      { s: 'ꓦꓴꓻ', m: '买（与彝语 ꃼ vy 同源）' },
      { s: 'ꓒꓴꓻ', m: '价钱；银钱' }
    ],
    dialogue: {
      scene: '在六库集市上，小林向摊主阿娜买当地水果和土布。',
      people: { '小林': '', Ana: 'ꓮꓸ-ꓠꓮ' },
      lines: [
        { who: 'Ana', s: 'ꓠꓴ ꓮꓸ-ꓫꓲꓸ ꓦꓴꓻ ꓡꓯꓹ？', g: '你 什么 买 吗', m: '你要买什么？' },
        { who: '小林', s: 'ꓒꓴꓻ ꓮꓸ-ꓟꓬꓲꓹ ꓥꓻ？', g: '价钱 多少 是', m: '价钱是多少？' },
        { who: 'Ana', s: 'ꓕꓲꓽ ꓟꓮꓻ ꓥꓪꓼ ꓒꓴꓻ ꓥꓻ。', g: '一 个 五 元 是', m: '一个五元。' },
        { who: '小林', s: 'ꓠꓬꓲꓽ ꓟꓮꓻ ꓕꓢꓲꓻ ꓒꓴꓻ ꓥꓻ ꓡꓯꓹ？', g: '二 个 十 元 是 吗', m: '两个是十元吗？' },
        { who: 'Ana', s: 'ꓥꓻ， ꓠꓬꓲꓽ ꓟꓮꓻ ꓧꓲꓽ ꓒꓴꓻ ꓙꓲꓻ！', g: '是 二 个 八 元 好', m: '是的，买两个算你八元吧！' },
        { who: '小林', s: 'ꓟꓯꓼ-ꓙꓲꓻ， ꓥꓪ ꓢꓮꓻ ꓟꓮꓻ ꓦꓴꓻ！', g: '非常好 我 三 个 买', m: '太好了，我买三个！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '傈僳语 1–10 与彝语完全同源',
        html: '<table class="mini nums"><tr><td><span class="lisu">ꓕꓲꓽ</span><br>thir 1</td><td><span class="lisu">ꓠꓬꓲꓽ</span><br>nyir 2</td><td><span class="lisu">ꓢꓮꓻ</span><br>sal 3</td><td><span class="lisu">ꓡꓲꓹ</span><br>lix 4</td><td><span class="lisu">ꓥꓪꓼ</span><br>ngwaq 5</td></tr>' +
          '<tr><td><span class="lisu">ꓛꓳꓽ</span><br>chor 6</td><td><span class="lisu">ꓫꓲꓽ</span><br>shir 7</td><td><span class="lisu">ꓧꓲꓽ</span><br>hir 8</td><td><span class="lisu">ꓗꓴꓻ</span><br>kul 9</td><td><span class="lisu">ꓕꓢꓲꓻ</span><br>thsil 10</td></tr></table>' +
          '<p>对比彝语：2 nyip、3 suo、4 ly、5 nge、7 shyp、8 hxit、9 ggu、10 ci，几乎一一对应！</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '通用量词 ꓟꓮꓻ mal',
        html: '<p>和彝语的 <span class="yi">ꂷ</span> ma 一样，傈僳语的通用个体量词也是 <span class="lisu">ꓟꓮꓻ</span> mal：<span class="lisu">ꓕꓲꓽ ꓟꓮꓻ</span> 一个、<span class="lisu">ꓠꓬꓲꓽ ꓟꓮꓻ</span> 两个。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '买：ꓦꓴꓻ vul',
        html: '<p><span class="lisu">ꓦꓴꓻ</span> vul（买）放在宾语后面：<span class="lisu">ꓥꓪ ꓢꓮꓻ ꓟꓮꓻ ꓦꓴꓻ</span>（我买三个）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '傈僳语数字 ꓥꓪꓼ 是几？', options: ['五', '四', '九'], answer: 0 },
      { type: 'choice', q: '「我买三个」怎么说？', options: ['ꓥꓪ ꓢꓮꓻ ꓟꓮꓻ ꓦꓴꓻ！', 'ꓠꓴ ꓮꓸ-ꓫꓲꓸ ꓦꓴꓻ ꓡꓯꓹ？', 'ꓒꓴꓻ ꓮꓸ-ꓟꓬꓲꓹ ꓥꓻ？'], answer: 0, script: true }
    ],
    source: { title: '怒江傈僳语数字与集市会话', url: 'https://en.wikipedia.org/wiki/Lisu_language' }
  }
]);
