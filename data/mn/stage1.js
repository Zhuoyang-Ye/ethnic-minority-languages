/* 蒙古语 · 阶段 1：入门会话（A1，共 4 课） */
LX.addLessons('mn', 'm1', [
  {
    id: 'm1-1',
    title: '草原问候：赛拜努与道谢',
    goal: '会用「赛拜努」（ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ）问好，会说谢谢与再见。',
    minutes: 15,
    words: [
      { s: 'ᠰᠠᠶᠢᠨ', w: 'sayin', p: 'sain', m: '好' },
      { s: 'ᠪᠠᠶᠢᠨ᠎ᠠ', w: 'bayin-a', p: 'baina', m: '在、是、有（现在时）' },
      { s: 'ᠤᠤ', w: 'uu', p: 'uu', m: '吗（阳性疑问助词）' },
      { s: 'ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ', w: 'bayarlal-a', p: 'bayarlaa', m: '谢谢' },
      { s: 'ᠪᠠᠶᠠᠷᠲᠠᠢ', w: 'bayartai', p: 'bayartai', m: '再见' },
      { s: 'ᠲᠠ', w: 'ta', p: 'ta', m: '您（敬称）' },
      { s: 'ᠪᠢ', w: 'bi', p: 'bi', m: '我' },
      { s: 'ᠮᠠᠰᠢ', w: 'masi', p: 'mash', m: '非常、很' }
    ],
    dialogue: {
      scene: '在锡林郭勒草原上，巴特尔（Baatar）遇见朋友萨仁（Saran）。',
      people: { Baatar: 'ᠪᠠᠭᠠᠲᠤᠷ', Saran: 'ᠰᠠᠷᠠᠨ' },
      lines: [
        { who: 'Baatar', s: 'ᠲᠠ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', w: 'ta sayin bayin-a uu/', p: 'ta sain baina uu?', g: '您 好 在 吗', m: '您好吗？（赛拜努！）' },
        { who: 'Saran', s: 'ᠰᠠᠶᠢᠨ᠂ ᠲᠠ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', w: 'sayin, ta sayin bayin-a uu/', p: 'sain, ta sain baina uu?', g: '好 您 好 在 吗', m: '好，您好吗？' },
        { who: 'Baatar', s: 'ᠪᠢ ᠮᠠᠰᠢ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ᠂ ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ᠃', w: 'bi masi sayin bayin-a, bayarlal-a/', p: 'bi mash sain baina, bayarlaa.', g: '我 非常 好 是 谢谢', m: '我非常好，谢谢。' },
        { who: 'Saran', s: 'ᠪᠢ ᠪᠠᠰᠠ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'bi basa sayin bayin-a/', p: 'bi bas sain baina.', g: '我 也 好 是', m: '我也很好。' },
        { who: 'Baatar', s: 'ᠪᠠᠶᠠᠷᠲᠠᠢ᠂ ᠰᠠᠷᠠᠨ᠃', w: 'bayartai, saran/', p: 'bayartai, saran!', g: '再见 萨仁', m: '再见，萨仁！' },
        { who: 'Saran', s: 'ᠪᠠᠶᠠᠷᠲᠠᠢ᠂ ᠪᠠᠭᠠᠲᠤᠷ᠃', w: 'bayartai, bagatur/', p: 'bayartai, baatar!', g: '再见 巴特尔', m: '再见，巴特尔！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ：赛拜努！',
        html: '<p>蒙古语最著名的问候语「赛拜努」（<span class="mn">ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ</span> sain baina uu）字面是「好 在 吗？」。回答时只需简单说一句 <span class="mn">ᠰᠠᠶᠢᠨ</span> sain（好），再反问对方 <span class="mn">ᠲᠠ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ</span>。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '字尾分离符 ᠎ (MVS)',
        html: '<p>在 <span class="mn">ᠪᠠᠶᠢᠨ᠎ᠠ</span> <code>bayin-a</code> 和 <span class="mn">ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ</span> <code>bayarlal-a</code> 中，词末元音 <span class="mn">ᠠ</span> 前面有一个窄空白（字尾分离符 MVS，转写用连字符 <code>-a</code> 表示），这是传统蒙文的正字法特征。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '谢谢与再见同源：ᠪᠠᠶᠠᠷ（喜悦）',
        html: '<p><span class="mn">ᠪᠠᠶᠠᠷ</span> bayar 是「喜悦、快乐」：<span class="mn">ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ</span> bayarlaa（我欢喜了 → 谢谢），<span class="mn">ᠪᠠᠶᠠᠷᠲᠠᠢ</span> bayartai（带着喜悦 → 再见）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '别人对你说「ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ（赛拜努）」，最地道的回答是：', options: ['ᠰᠠᠶᠢᠨ᠂ ᠲᠠ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', 'ᠪᠠᠶᠠᠷᠲᠠᠢ᠃', 'ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ᠃'], answer: 0, script: true },
      { type: 'choice', q: 'ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ (bayarlaa) 是什么意思？', options: ['谢谢', '再见', '我'], answer: 0 }
    ],
    source: { title: '蒙古语日常问候会话', url: 'https://en.wikipedia.org/wiki/Mongolian_language' }
  },
  {
    id: 'm1-2',
    title: '你叫什么名字？你是哪里人？',
    goal: '会问对方的名字（ᠨᠡᠷ᠎ᠡ）和来自哪里（ᠠᠯᠢ ᠭᠠᠵᠠᠷ），会自我介绍。',
    minutes: 15,
    words: [
      { s: 'ᠨᠡᠷ᠎ᠡ', w: 'ner-e', p: 'ner', m: '名字' },
      { s: 'ᠬᠡᠨ', w: 'qen', p: 'hen', m: '谁' },
      { s: 'ᠭᠡᠳᠡᠭ', w: 'gedeg', p: 'gedeg', m: '叫做、称为' },
      { s: 'ᠪᠡ', w: 'be', p: 've', m: '呢（特殊疑问助词）' },
      { s: 'ᠬᠦᠮᠦᠨ', w: 'qümün', p: 'hün', m: '人' },
      { s: 'ᠮᠤᠩᠭᠤᠯ', w: 'munggul', p: 'mongol', m: '蒙古' },
      { s: 'ᠪᠡᠭᠡᠵᠢᠩ', w: 'begejing', p: 'beejing', m: '北京' },
      { s: 'ᠬᠥᠬᠡᠬᠣᠲᠠ', w: 'qöqeqota', p: 'höh-hot', m: '呼和浩特（青城）' }
    ],
    dialogue: {
      scene: '小林在呼和浩特认识了蒙古族朋友巴特尔（Baatar）。',
      people: { '小林': '', Baatar: 'ᠪᠠᠭᠠᠲᠤᠷ' },
      lines: [
        { who: '小林', s: 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠡ᠃', w: 'tan-u ner-e qen be/', p: 'tanii ner hen ve?', g: '您的 名字 谁 呢', m: '您叫什么名字？' },
        { who: 'Baatar', s: 'ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠪᠠᠭᠠᠲᠤᠷ ᠭᠡᠳᠡᠭ᠃', w: 'minu ner-e bagatur gedeg/', p: 'minii ner baatar gedeg.', g: '我的 名字 巴特尔 叫做', m: '我的名字叫巴特尔。' },
        { who: 'Baatar', s: 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠡ᠃', w: 'tan-u ner-e qen be/', p: 'tanii ner hen ve?', g: '您的 名字 谁 呢', m: '您叫什么名字？' },
        { who: '小林', s: 'ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠯᠢᠨ ᠭᠡᠳᠡᠭ᠃', w: 'minu ner-e lin gedeg/', p: 'minii ner lin gedeg.', g: '我的 名字 林 叫做', m: '我的名字叫林。' },
        { who: '小林', s: 'ᠲᠠ ᠬᠥᠬᠡᠬᠣᠲᠠ ᠶᠢᠨ ᠬᠦᠮᠦᠨ ᠤᠤ᠃', w: 'ta qöqeqota-yin qümün uu/', p: 'ta höh-hotiin hün uu?', g: '您 呼和浩特的 人 吗', m: '您是呼和浩特人吗？' },
        { who: 'Baatar', s: 'ᠲᠡᠶᠢᠮᠦ᠂ ᠪᠢ ᠮᠤᠩᠭᠤᠯ ᠬᠦᠮᠦᠨ᠂ ᠬᠥᠬᠡᠬᠣᠲᠠ ᠶᠢᠨ ᠬᠦᠮᠦᠨ᠃', w: 'teyimü, bi munggul qümün, qöqeqota-yin qümün/', p: 'tiim, bi mongol hün, höh-hotiin hün.', g: '是的 我 蒙古 人 呼和浩特的 人', m: '是的，我是蒙古族，呼和浩特人。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '问名字用「谁」（ᠬᠡᠨ），不用「什么」',
        html: '<p>蒙古语问「你叫什么名字？」字面说成「您的名字是<b>谁</b>？」：</p>' +
          '<p class="ex"><span class="mn">ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠡ᠃</span><br>您的 名字 谁 呢？ → 您叫什么名字？</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '是非问句 ᠤᠤ/ᠦᠦ vs 疑问词问句 ᠪᠡ/ᠸᠡ',
        html: '<ul><li>没有疑问词的是非问句，句末用 <span class="mn">ᠤᠤ / ᠦᠦ</span> uu/üü（吗）</li>' +
          '<li>句子里已经有疑问词（如 <span class="mn">ᠬᠡᠨ</span> 谁、<span class="mn">ᠶᠠᠮᠠᠷ</span> 什么）时，句末用 <span class="mn">ᠪᠡ / ᠸᠡ</span> ve（呢）</li></ul>'
      },
      {
        at: 'end', kind: 'culture', title: 'ᠬᠥᠬᠡᠬᠣᠲᠠ：呼和浩特 = 青色的城',
        html: '<p><span class="mn">ᠬᠥᠬᠡ</span> höh 是「蓝色、青色」，<span class="mn">ᠬᠣᠲᠠ</span> hot 是「城、浩特」，合起来就是「青城」呼和浩特。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '蒙古语问「你叫什么名字？」时，疑问词用的是：', options: ['ᠬᠡᠨ（谁）', 'ᠤᠰᠤ（水）', 'ᠰᠠᠶᠢᠨ（好）'], answer: 0, script: true },
      { type: 'choice', q: 'ᠬᠥᠬᠡᠬᠣᠲᠠ（呼和浩特）字面意思是什么？', options: ['青色的城', '白色的山', '辽阔的草原'], answer: 0 }
    ],
    source: { title: '蒙古语自我介绍与姓名表达', url: 'https://en.wiktionary.org/wiki/Category:Mongolian_lemmas' }
  },
  {
    id: 'm1-3',
    title: '我的家人与亲属',
    goal: '会说爸爸、妈妈、哥哥、姐姐、弟弟妹妹，掌握「有」（ᠪᠠᠶᠢᠨ᠎ᠠ / ᠲᠠᠢ）与「没有」（ᠦᠭᠡᠢ）。',
    minutes: 15,
    words: [
      { s: 'ᠭᠡᠷ', w: 'ger', p: 'ger', m: '家、蒙古包' },
      { s: 'ᠠᠪᠤ', w: 'abu', p: 'aav', m: '爸爸' },
      { s: 'ᠡᠵᠢ', w: 'eji', p: 'eej', m: '妈妈' },
      { s: 'ᠠᠬ᠎ᠠ', w: 'aq-a', p: 'ah', m: '哥哥' },
      { s: 'ᠡᠭᠡᠴᠢ', w: 'egechi', p: 'egch', m: '姐姐' },
      { s: 'ᠳᠡᠭᠦᠦ', w: 'degüü', p: 'düü', m: '弟弟、妹妹' },
      { s: 'ᠦᠭᠡᠢ', w: 'ügei', p: 'ügüi', m: '没有、不' },
      { s: 'ᠪᠠᠭᠰᠢ', w: 'bagsi', p: 'bagsh', m: '老师' }
    ],
    dialogue: {
      scene: '萨仁和小林聊起家里的亲人。',
      people: { Saran: 'ᠰᠠᠷᠠᠨ', '小林': '' },
      lines: [
        { who: 'Saran', s: 'ᠲᠠᠨ ᠤ ᠭᠡᠷ ᠲᠦ ᠬᠡᠨ ᠪᠠᠶᠢᠨ᠎ᠠ ᠪᠡ᠃', w: 'tan-u ger-tü qen bayin-a be/', p: 'tanii gert hen baina ve?', g: '您的 家里 谁 在 呢', m: '您家里有哪些人？' },
        { who: '小林', s: 'ᠮᠢᠨᠤ ᠭᠡᠷ ᠲᠦ ᠠᠪᠤ᠂ ᠡᠵᠢ᠂ ᠡᠭᠡᠴᠢ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'minu ger-tü abu, eji, egechi bayin-a/', p: 'minii gert aav, eej, egch baina.', g: '我的 家里 爸爸 妈妈 姐姐 有', m: '我家里有爸爸、妈妈和姐姐。' },
        { who: 'Saran', s: 'ᠲᠠ ᠠᠬ᠎ᠠ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', w: 'ta aq-a bayin-a uu/', p: 'ta ah baina uu?', g: '您 哥哥 有 吗', m: '您有哥哥吗？' },
        { who: '小林', s: 'ᠦᠭᠡᠢ᠂ ᠠᠬ᠎ᠠ ᠪᠠᠶᠢᠬᠤ ᠦᠭᠡᠢ᠂ ᠨᠢᠭᠡ ᠳᠡᠭᠦᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'ügei, aq-a bayiqu ügei, nige degüü bayin-a/', p: 'ügüi, ah baih ügüi, neg düü baina.', g: '没有 哥哥 存在 没有 一个 弟妹 有', m: '没有，没有哥哥，有一个弟弟/妹妹。' },
        { who: 'Saran', s: 'ᠲᠠᠨ ᠤ ᠡᠵᠢ ᠪᠠᠭᠰᠢ ᠤᠤ᠃', w: 'tan-u eji bagsi uu/', p: 'tanii eej bagsh uu?', g: '您的 妈妈 老师 吗', m: '您妈妈是老师吗？' },
        { who: '小林', s: 'ᠲᠡᠶᠢᠮᠦ᠂ ᠮᠢᠨᠤ ᠡᠵᠢ ᠪᠠᠭᠰᠢ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'teyimü, minu eji bagsi bayin-a/', p: 'tiim, minii eej bagsh baina.', g: '是的 我的 妈妈 老师 是', m: '是的，我妈妈是老师。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '哥哥 ᠠᠬ᠎ᠠ、姐姐 ᠡᠭᠡᠴᠢ 与弟妹 ᠳᠡᠭᠦᠦ',
        html: '<p>蒙古语里哥哥（<span class="mn">ᠠᠬ᠎ᠠ</span> ah）和姐姐（<span class="mn">ᠡᠭᠡᠴᠢ</span> egch）分男女，但比自己小的弟弟和妹妹统称为 <span class="mn">ᠳᠡᠭᠦᠦ</span> düü（需要区分时可说男弟、女妹）。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '在家里：ᠭᠡᠷ ᠲᠦ gert',
        html: '<p><span class="mn">ᠭᠡᠷ</span> ger 既是「蒙古包」也是「家」。加上与位格助词 <span class="mn"> ᠲᠦ</span> -tü，口语读 <b>gert</b>（在家里）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '否定词 ᠦᠭᠡᠢ ügüi',
        html: '<p><span class="mn">ᠦᠭᠡᠢ</span> ügüi 放在名词或动词形动词形式（如 <span class="mn">ᠪᠠᠶᠢᠬᠤ</span> baih）后面表示「没有、不」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '蒙古语里统称「弟弟、妹妹」的词是：', options: ['ᠳᠡᠭᠦᠦ (düü)', 'ᠠᠬ᠎ᠠ (ah)', 'ᠡᠭᠡᠴᠢ (egch)'], answer: 0, script: true },
      { type: 'choice', q: 'ᠭᠡᠷ ᠲᠦ (gert) 末尾的  ᠲᠦ 表示什么？', options: ['在……里面（在家里）', '我的', '疑问'], answer: 0 }
    ],
    source: { title: '蒙古语家庭与亲属会话', url: 'https://en.wiktionary.org/wiki/Category:Mongolian_lemmas' }
  },
  {
    id: 'm1-4',
    title: '数字与草原五畜',
    goal: '掌握蒙古语数字 1–10，认识草原「五畜」（马、牛、骆驼、绵羊、山羊）。',
    minutes: 15,
    words: [
      { s: 'ᠨᠢᠭᠡ', w: 'nige', p: 'neg', m: '一' },
      { s: 'ᠬᠣᠶᠠᠷ', w: 'qoyar', p: 'hoyor', m: '二' },
      { s: 'ᠭᠤᠷᠪᠠ', w: 'gurba', p: 'gurav', m: '三' },
      { s: 'ᠳᠥᠷᠪᠡ', w: 'dörbe', p: 'döröv', m: '四' },
      { s: 'ᠲᠠᠪᠤ', w: 'tabu', p: 'tav', m: '五' },
      { s: 'ᠵᠢᠷᠭᠤᠭ᠎ᠠ', w: 'jirgug-a', p: 'zurgaa', m: '六' },
      { s: 'ᠳᠣᠯᠤᠭ᠎ᠠ', w: 'dolug-a', p: 'doloo', m: '七' },
      { s: 'ᠨᠠйма', w: 'naima', p: 'naim', m: '八' }.s ? { s: 'ᠨᠠᠶᠢᠮᠠ', w: 'nayima', p: 'naim', m: '八' } : null,
      { s: 'ᠶᠢᠰᠦ', w: 'yisü', p: 'yüs', m: '九' },
      { s: 'ᠠᠷᠪᠠ', w: 'arba', p: 'arav', m: '十' },
      { s: 'ᠮᠣᠷᠢ', w: 'mori', p: 'mori', m: '马' },
      { s: 'ᠬᠣᠨᠢ', w: 'qoni', p: 'honi', m: '绵羊' }
    ],
    dialogue: {
      scene: '小林在巴特尔家的草场上看骏马和羊群。',
      people: { '小林': '', Baatar: 'ᠪᠠᠭᠠᠲᠤᠷ' },
      lines: [
        { who: '小林', s: 'ᠲᠠᠨ ᠤ ᠭᠡᠷ ᠲᠦ ᠮᠣᠷᠢ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', w: 'tan-u ger-tü mori bayin-a uu/', p: 'tanii gert mori baina uu?', g: '您的 家里 马 有 吗', m: '您家里有马吗？' },
        { who: 'Baatar', s: 'ᠪᠠᠶᠢᠨ᠎ᠠ᠂ ᠲᠠᠪᠤ ᠮᠣᠷᠢ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'bayin-a, tabu mori bayin-a/', p: 'baina, tav mori baina.', g: '有 五 匹马 有', m: '有，有五匹马。' },
        { who: '小林', s: 'ᠴᠠᠭᠠᠨ ᠮᠣᠷᠢ ᠬᠡᠳᠦ ᠪᠠᠶᠢᠨ᠎ᠠ ᠪᠡ᠃', w: 'chagan mori qedü bayin-a be/', p: 'tsagaan mori hed baina ve?', g: '白 马 几匹 有 呢', m: '白马有几匹呢？' },
        { who: 'Baatar', s: 'ᠬᠣᠶᠠᠷ ᠴᠠᠭᠠᠨ ᠮᠣᠷᠢ᠂ ᠭᠤᠷᠪᠠ ᠬᠠᠷ᠎ᠠ ᠮᠣᠷᠢ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'qoyar chagan mori, gurba qar-a mori bayin-a/', p: 'hoyor tsagaan mori, gurav har mori baina.', g: '两 白 马 三 黑 马 有', m: '有两匹白马、三匹黑马。' },
        { who: '小林', s: 'ᠬᠣᠨᠢ  олон ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', w: 'qoni olon bayin-a uu/', p: 'honi olon baina uu?', g: '绵羊 多 有 吗', m: '绵羊有很多吗？' }.s ? { who: '小林', s: 'ᠬᠣᠨᠢ ᠠᠷᠪᠠ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ᠃', w: 'qoni arba bayin-a uu/', p: 'honi arav baina uu?', g: '绵羊 十只 有 吗', m: '那边有十只绵羊吗？' } : null,
        { who: 'Baatar', s: 'ᠲᠡᠶᠢᠮᠦ᠂ ᠠᠷᠪᠠ ᠬᠣᠨᠢ ᠪᠠᠶᠢᠨ᠎ᠠ᠃', w: 'teyimü, arba qoni bayin-a/', p: 'tiim, arav honi baina.', g: '是的 十 绵羊 有', m: '是的，有十只绵羊。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '1 到 10 数字表',
        html: '<table class="mini nums"><tr><td><span class="mn">ᠨᠢᠭᠡ</span><br>neg 1</td><td><span class="mn">ᠬᠣᠶᠠᠷ</span><br>hoyor 2</td><td><span class="mn">ᠭᠤᠷᠪᠠ</span><br>gurav 3</td><td><span class="mn">ᠳᠥᠷᠪᠡ</span><br>döröv 4</td><td><span class="mn">ᠲᠠᠪᠤ</span><br>tav 5</td></tr>' +
          '<tr><td><span class="mn">ᠵᠢᠷᠭᠤᠭ᠎ᠠ</span><br>zurgaa 6</td><td><span class="mn">ᠳᠣᠯᠤᠭ᠎ᠠ</span><br>doloo 7</td><td><span class="mn">ᠨᠠᠶᠢᠮᠠ</span><br>naim 8</td><td><span class="mn">ᠶᠢᠰᠦ</span><br>yüs 9</td><td><span class="mn">ᠠᠷᠪᠠ</span><br>arav 10</td></tr></table>'
      },
      {
        at: 'mid', kind: 'grammar', title: '数词与形容词放在名词前面',
        html: '<p>蒙古语和维吾尔语一样，数词和形容词都放在名词<b>前面</b>，而且不用量词：<span class="mn">ᠬᠣᠶᠠᠷ ᠴᠠᠭᠠᠨ ᠮᠣᠷᠢ</span>（两 + 白 + 马 = 两匹白马）。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '草原五畜（ᠲᠠᠪᠤᠨ ᠬOSHUU ᠮᠠᠯ）',
        html: '<p>蒙古族传统牧业称马（<span class="mn">ᠮᠣᠷᠢ</span>）、牛、骆驼、绵羊（<span class="mn">ᠬᠣᠨᠢ</span>）、山羊为「五畜」，其中马被尊为草原之魂。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '蒙古语数字 ᠲᠠᠪᠤ (tav) 和 ᠠᠷᠪᠠ (arav) 分别是几？', options: ['五、十', '二、八', '三、九'], answer: 0 },
      { type: 'choice', q: '「两匹白马」在蒙古语里怎么说？', options: ['ᠬᠣᠶᠠᠷ ᠴᠠᠭᠠᠨ ᠮᠣᠷᠢ', 'ᠮᠣᠷᠢ ᠴᠠᠭᠠᠨ ᠬᠣᠶᠠᠷ', 'ᠠᠷᠪᠠ ᠬᠣᠨᠢ'], answer: 0, script: true }
    ],
    source: { title: '蒙古语数字与草原牧业词汇', url: 'https://en.wikipedia.org/wiki/Mongolian_language' }
  }
]);
