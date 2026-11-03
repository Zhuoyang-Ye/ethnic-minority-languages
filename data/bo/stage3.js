/* 藏语 · 阶段 3：语言与文化（B1，共 6 课）
   敬语系统、证据性（亲见/推断/听说）、复句与连词、谚语与短文、歌曲与诗歌、书面语与口语。 */
LX.addLessons('bo', 'b3', [
  {
    id: 'b3-1',
    title: '敬语系统',
    goal: '系统掌握拉萨话的普通词与敬语词配对（身体、语言、心意、饮食、来去、起居）。',
    minutes: 15,
    words: [
      { s: 'གསུང', w: 'gsung', p: 'sung', m: '说、讲（敬语）' },
      { s: 'བཞུགས', w: 'bzhugs', p: 'shuk', m: '坐、住、在（敬语）' },
      { s: 'གནང', w: 'gnang', p: 'nang', m: '给；做（敬语助动词）' },
      { s: 'གསོལ་ཇ', w: 'gsol ja', p: 'sö-cha', m: '茶（敬语）' },
      { s: 'ཞལ་ལག', w: 'zhal lag', p: 'she-lak', m: '饭菜、食物（敬语）' },
      { s: 'ཕྱག་ལས', w: 'phyag las', p: 'chak-le', m: '工作（敬语）' },
      { s: 'ཐུགས', w: 'thugs', p: 'thuk', m: '心、心意（敬语）' },
      { s: 'བོད་སྐད', w: 'bod skad', p: 'phö-ke', m: '藏语' }
    ],
    dialogue: {
      scene: '小林拜访一位老教授（仁增老师），全程使用得体的拉萨话敬语交谈。',
      people: { '小林': '', '仁增老师': 'དགེ་རྒན་རིག་འཛིན།' },
      lines: [
        { who: '小林', s: 'དགེ་རྒན་ལགས། སྐུ་གཟུགས་ བདེ་པོ་ བཞུགས་ ཡོད་པས།', w: 'dge rgan lags/ sku gzugs bde po bzhugs yod pas/', p: 'ge-gen-la. ku-suk de-po shuk yö-pe?', g: '老师（尊称） 身体（敬） 安好 在（敬） 吗', m: '老师您好，您身体安康吗？' },
        { who: '仁增老师', s: 'བདེ་པོ་ ཡིན། ནང་ལ་ ཕེབས་ རོགས་གནང་།', w: 'bde po yin/ nang la phebs rogs gnang/', p: 'de-po yin. nang-la phep rok-nang.', g: '安好 是 屋里 来（敬） 请', m: '我很好，请进屋里来。' },
        { who: '仁增老师', s: 'གསོལ་ཇ་ དང་ ཞལ་ལག་ བཞེས་ རོགས་གནང་།', w: 'gsol ja dang zhal lag bzhes rogs gnang/', p: 'sö-cha dang she-lak she rok-nang.', g: '茶（敬） 和 饭菜（敬） 吃喝（敬） 请', m: '请喝茶、用点餐。' },
        { who: '小林', s: 'ཐུགས་རྗེ་ཆེ། ཁྱེད་རང་ ག་པར་ ཕྱག་ལས་ གནང་ གི་ཡོད།', w: 'thugs rje che/ khyed rang ga par phyag las gnang gi yod/', p: 'thuk-je-che. khye-rang kha-par chak-le nang gi-yö?', g: '谢谢 您 在哪里 工作（敬） 做（敬） 正在', m: '谢谢！您在哪里工作？' },
        { who: '仁增老师', s: 'ང་ ལྷ་ས་ལ་ བོད་སྐད་ སློབ་ ཀྱི་ཡོད།', w: 'nga lha sa la bod skad slob kyi yod/', p: 'nga lha-sa-la phö-ke lop kyi-yö.', g: '我 在拉萨 藏语 教 正在', m: '我在拉萨教藏语。' },
        { who: '小林', s: 'དགེ་རྒན་ལགས་ བོད་སྐད་ ཡག་པོ་ གསུང་ གི་འདུག', w: 'dge rgan lags bod skad yag po gsung gi \'dug', p: 'ge-gen-la phö-ke yak-po sung gi-duk.', g: '老师 藏语 好 讲（敬） （亲见）', m: '老师您藏语讲得真好。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '敬语词根：སྐུ（身）、གསུང（语）、ཐུགས（意）、ཕྱག（手）、ཞལ（口）',
        html: '<p>拉萨话的敬语名词大多由几个固定的敬语前缀构成：</p>' +
          '<table class="mini"><tr><th>类别</th><th>普通词</th><th>敬语词</th></tr>' +
          '<tr><th>身体</th><td><span class="bo">གཟུགས་པོ</span> suk-po</td><td><span class="bo">སྐུ་གཟུགས</span> ku-suk</td></tr>' +
          '<tr><th>手 / 工作</th><td><span class="bo">ལག་པ / ལས་ཀ</span></td><td><span class="bo">ཕྱག / ཕྱག་ལས</span> chak-le</td></tr>' +
          '<tr><th>饭菜 / 茶</th><td><span class="bo">ཟ་མ / ཇ</span></td><td><span class="bo">ཞལ་ལག / གསོལ་ཇ</span></td></tr></table>'
      },
      {
        at: 'mid', kind: 'grammar', title: '万能敬语动词：གནང nang',
        html: '<p>把普通复合动词里的 <span class="bo">བྱེད</span> che（做）换成 <span class="bo">གནང</span> nang，任何动词都能变成敬语：<span class="bo">ལས་ཀ་བྱེད</span> → <span class="bo">ཕྱག་ལས་གནང</span>（工作，敬语）。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '对别人用敬语，对自己绝不用敬语',
        html: '<p>老师请学生喝茶可以用敬语 <span class="bo">གསོལ་ཇ་བཞེས</span>，但老师说自己教书时用普通词 <span class="bo">སློབ་ཀྱི་ཡོད</span>，绝不能对自己用敬语。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '把「ལས་ཀ་བྱེད（工作）」改成敬语，应该怎么说？', options: ['ཕྱག་ལས་གནང', 'ལས་ཀ་ཟ', 'སྐུ་གཟུགས་བྱེད'], answer: 0, script: true },
      { type: 'choice', q: 'གསོལ་ཇ 是哪个词的敬语？', options: ['ཇ（茶）', 'ཆུ（水）', 'དཔེ་ཆ（书）'], answer: 0, script: true }
    ],
    source: { title: 'Tournadre & Dorje《Manual of Standard Tibetan》敬语章节', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b3-2',
    title: '证据性：འདུག、རེད、ཡོད་རེད',
    goal: '分清拉萨话最核心的三种语气：自我知晓（ཡིན/ཡོད）、亲眼所见（འདུག）、客观事实与普遍认知（རེད/ཡོད་རེད）及传闻（ཟེར）。',
    minutes: 15,
    words: [
      { s: 'ཡོད་རེད', w: 'yod red', p: 'yö-re', m: '有、在（客观事实/普遍情况）' },
      { s: 'འདུག', w: '\'dug', p: 'duk', m: '（亲眼看到的）有、是' },
      { s: 'ཡོད', w: 'yod', p: 'yö', m: '有' },
      { s: 'རེད', w: 'red', p: 're', m: '是（说别人）' },
      { s: 'ཡིན', w: 'yin', p: 'yin', m: '是（说自己）' },
      { s: 'གཡག', w: 'g.yag', p: 'yak', m: '牦牛' },
      { s: 'མཐོ་པོ', w: 'mtho po', p: 'tho-po', m: '高' },
      { s: 'ཟེར', w: 'zer', p: 'ser', m: '叫、说' }
    ],
    dialogue: {
      scene: '索朗和小林看着远处的雪山和草场上的牦牛，对比不同句尾的语气差别。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '小林', s: 'རི་ འདི་ ཧ་ཅང་ མཐོ་པོ་ འདུག', w: 'ri \'di ha cang mtho po \'dug', p: 'ri di ha-cang tho-po duk.', g: '山 这座 非常 高 （亲见）', m: '眼前这座山真高啊！（我亲眼看到）' },
        { who: '索朗', s: 'ལགས་རེད། བོད་ལ་ རི་ མཐོ་པོ་ མང་པོ་ ཡོད་རེད།', w: 'lags red/ bod la ri mtho po mang po yod red/', p: 'lak-re. phö-la ri tho-po mang-po yö-re.', g: '是的 在西藏 山 高 很多 有（客观）', m: '是的，西藏有很多高山。（众所周知的事实）' },
        { who: '小林', s: 'རི་ལ་ གཡག་ གསུམ་ འདུག', w: 'ri la g.yag gsum \'dug', p: 'ri-la yak sum duk.', g: '山上 牦牛 三头 有（亲见）', m: '山上有三头牦牛！（正看见）' },
        { who: '索朗', s: 'གཡག་ འདི་ ངའི་ ཨ་ལྕག་གི་ རེད།', w: 'g.yag \'di nga\'i a lcag gi red/', p: 'yak di nge a-cak-gi re.', g: '牦牛 这 我的 姐姐的 是（事实）', m: '这牦牛是我姐姐家的。' },
        { who: '索朗', s: 'ང་ཚང་ལ་ ཡང་ གཡག་ བཅུ་ ཡོད།', w: 'nga tshang la yang g.yag bcu yod/', p: 'nga-tshang-la yang yak cu yö.', g: '我们家 也 牦牛 十头 有（自知）', m: '我们家也有十头牦牛。（自己家里的情况）' },
        { who: '小林', s: 'སང་ཉིན་ གངས་ ཡོད་རེད་ ཟེར།', w: 'sang nyin gangs yod red zer/', p: 'sang-nyin khang yö-re ser.', g: '明天 雪 有 听说', m: '听说他说明天有雪。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '三种「有 / 在」：ཡོད · འདུག · ཡོད་རེད',
        html: '<table class="mini"><tr><th>助动词</th><th>什么时候用</th><th>例句</th></tr>' +
          '<tr><td><span class="bo">ཡོད</span> yö</td><td>自己拥有的、自己家里熟知的事</td><td><span class="bo">ང་ལ་ཇོ་ལགས་གཅིག་ཡོད།</span> 我有一个哥哥</td></tr>' +
          '<tr><td><span class="bo">འདུག</span> duk</td><td>刚刚亲眼看到、亲口尝到、亲身感觉到</td><td><span class="bo">རི་ལ་གཡག་གསུམ་འདུག</span> 山上有三头牦牛（正看见）</td></tr>' +
          '<tr><td><span class="bo">ཡོད་རེད</span> yö-re</td><td>普遍规律、常识、非亲眼所见的客观事实</td><td><span class="bo">བོད་ལ་རི་མཐོ་པོ་མང་པོ་ཡོད་རེད།</span> 西藏有很多高山</td></tr></table>'
      },
      {
        at: 'mid', kind: 'grammar', title: '听说：句末加 ཟེར ser',
        html: '<p>如果消息是从别人或天气预报听来的，在完整句子后面加 <span class="bo">ཟེར</span> ser（说/听说），标明信息来源不是亲见。</p>'
      },
      {
        at: 'end', kind: 'pron', title: 'གཡག yak：牦牛',
        html: '<p>英语里的 yak 就借自藏语 <span class="bo">གཡག</span>（威利 <code>g.yag</code>）。由于带前加字 <span class="bo">ག</span>，基字 <span class="bo">ཡ</span> 读成高调。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '你指着窗外刚刚看到的三头牦牛说「山上有三头牦牛」，句末用：', options: ['འདུག', 'ཡོད', 'ཡིན'], answer: 0, script: true },
      { type: 'choice', q: '介绍「西藏有很多高山」这一普遍地理常识，句末用：', options: ['ཡོད་རེད', 'འདུག', 'ཡོད'], answer: 0, script: true }
    ],
    source: { title: 'Tournadre & Dorje《Manual of Standard Tibetan》证据性章节', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b3-3',
    title: '复句与连词',
    goal: '会用「因为……所以……」（ཙང）、「如果……」（ན）、「虽然……但是……」（ཡིན་ནའང）连接两个分句。',
    minutes: 15,
    words: [
      { s: 'ཙང', w: 'tsang', p: 'tsang', m: '因为……所以' },
      { s: 'ན', w: 'na', p: 'na', m: '如果……的话' },
      { s: 'ཡིན་ནའང', w: 'yin na\'ng', p: 'yin-nang', m: '但是、然而' },
      { s: 'ནས', w: 'nas', p: 'ne', m: '……之后（先后连词）；从' },
      { s: 'སྦྱང', w: 'sbyang', p: 'jang', m: '学习、练习' },
      { s: 'དགའ་པོ', w: 'dga\' po', p: 'ga-po', m: '喜欢、高兴' },
      { s: 'དཀའ་ལས', w: 'dka\' las', p: 'ka-le', m: '辛苦、困难' },
      { s: 'ཉིན་ལྟར', w: 'nyin ltar', p: 'nyin-tar', m: '每天' }
    ],
    dialogue: {
      scene: '小林和卓玛聊学习藏语的心得。',
      people: { '小林': '', '卓玛': 'སྒྲོལ་མ།' },
      lines: [
        { who: '卓玛', s: 'བོད་སྐད་ སྦྱང་ ན་ དཀའ་ལས་ འདུག་གམ།', w: 'bod skad sbyang na dka\' las \'dug gam/', p: 'phö-ke jang na ka-le duk-gam?', g: '藏语 学 如果 困难 有吗', m: '如果学藏语的话，难吗？' },
        { who: '小林', s: 'ཏོག་ཙམ་ དཀའ་ལས་ འདུག ཡིན་ནའང་ ང་ དགའ་པོ་ ཡོད།', w: 'tog tsam dka\' las \'dug yin na\'ng nga dga\' po yod/', p: 'tok-tsam ka-le duk. yin-nang nga ga-po yö.', g: '一点儿 困难 有 但是 我 喜欢 是', m: '有一点难，但是我很喜欢。' },
        { who: '小林', s: 'ཉིན་ལྟར་ སྦྱང་ ན་ ཡག་པོ་ ཆགས་ ཀྱི་རེད།', w: 'nyin ltar sbyang na yag po chags kyi red/', p: 'nyin-tar jang na yak-po chak kyi-re.', g: '每天 练习 如果 好 变成 （会）', m: '如果每天练习的话，就会变好。' },
        { who: '卓玛', s: 'དེ་རིང་ ཆར་པ་ ཡོད་ ཙང་ ང་ ཁྲོམ་ལ་ ཕྱིན་ མེད།', w: 'de ring char pa yod tsang nga khrom la phyin med/', p: 'the-ring char-pa yö tsang nga throm-la chin me.', g: '今天 雨 有 因为 我 去市场 去了 没', m: '因为今天下雨，所以我没去市场。' },
        { who: '小林', s: 'ང་ཚོ་ ཇ་ བཏུངས་ ནས་ དཔེ་ཆ་ ལྟ།', w: 'nga tsho ja btungs nas dpe cha lta/', p: 'nga-tsho cha tung ne pe-cha ta.', g: '我们 茶 喝了 之后 书 看', m: '我们喝完茶之后看书吧。' },
        { who: '卓玛', s: 'ཡག་པོ་ རེད། མཉམ་དུ་ བོད་སྐད་ སྦྱང་།', w: 'yag po red/ mnyam du bod skad sbyang/', p: 'yak-po re. nyam-du phö-ke jang.', g: '好 是 一起 藏语 练习', m: '好呀，一起练习藏语。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '条件与原因助词放在从句末尾',
        html: '<ul><li><b>如果</b>：从句动词 + <span class="bo">ན</span> na（<span class="bo">ཉིན་ལྟར་སྦྱང་ན</span> 如果每天练习）</li>' +
          '<li><b>因为</b>：从句助动词 + <span class="bo">ཙང</span> tsang（<span class="bo">ཆར་པ་ཡོད་ཙང</span> 因为有雨）</li>' +
          '<li><b>……之后</b>：过去式动词 + <span class="bo">ནས</span> ne（<span class="bo">ཇ་བཏུངས་ནས</span> 喝完茶之后）</li></ul>'
      },
      {
        at: 'mid', kind: 'grammar', title: '转折连词：ཡིན་ནའང',
        html: '<p><span class="bo">ཡིན་ནའང</span> yin-nang（字面「虽然是那样」）放在第二句开头，表示「但是、然而」。</p>'
      },
      {
        at: 'end', kind: 'culture', title: 'ཏོག་ཙམ tok-tsam：一点点',
        html: '<p>别人夸你藏语说得好时，谦虚回答常说 <span class="bo">ཏོག་ཙམ་ཤེས་ཀྱི་ཡོད</span>（只会一点点）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '表示「因为……所以」，放在第一分句末尾的词是：', options: ['ཙང', 'ཡིན་ནའང', 'ག་པར'], answer: 0, script: true },
      { type: 'choice', q: 'ཇ་བཏུངས་ནས 里的 ནས 表示什么？', options: ['做完前一动作之后（喝完茶之后）', '从哪里来', '疑问'], answer: 0 }
    ],
    source: { title: '本站编写（复句连接手段）', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b3-4',
    title: '阅读：谚语与短文',
    goal: '读懂几则经典的藏族谚语（تامདཔེ），体会藏文书面格言的节奏。',
    minutes: 15,
    words: [
      { s: 'གཏམ་དཔེ', w: 'gtam dpe', p: 'tam-pe', m: '谚语、格言' },
      { s: 'སེམས', w: 'sems', p: 'sem', m: '心、心地' },
      { s: 'དཀར་པོ', w: 'dkar po', p: 'kar-po', m: '白色；纯洁善良' },
      { s: 'ལམ', w: 'lam', p: 'lam', m: '路、道路' },
      { s: 'གྲོགས་པོ', w: 'grogs po', p: 'throk-po', m: '朋友' },
      { s: 'རྟ', w: 'rta', p: 'ta', m: '马' },
      { s: 'ཤེས', w: 'shes', p: 'she', m: '知道、懂得' },
      { s: 'བདེན་པ', w: 'bden pa', p: 'den-pa', m: '真实、道理' }
    ],
    dialogue: {
      scene: '仁增老师给小林讲解两句家喻户晓的藏族谚语。',
      people: { '仁增老师': 'དགེ་རྒན་རིག་འཛིན།', '小林': '' },
      lines: [
        { who: '仁增老师', s: 'དེ་རིང་ ང་ཚོ་ བོད་ཀྱི་ གཏམ་དཔེ་ ལྟ།', w: 'de ring nga tsho bod kyi gtam dpe lta/', p: 'the-ring nga-tsho phö-kyi tam-pe ta.', g: '今天 我们 西藏的 谚语 看', m: '今天我们来看西藏的谚语。' },
        { who: '仁增老师', s: 'སེམས་ དཀར་པོ་ ཡོད་ ན་ ལམ་ དཀར་པོ་ ཡོད་རེད།', w: 'sems dkar po yod na lam dkar po yod red/', p: 'sem kar-po yö na lam kar-po yö-re.', g: '心 白 有 如果 路 白 有', m: '心地善良纯洁，前路就会光明顺畅。' },
        { who: '小林', s: 'གཏམ་དཔེ་ འདི་ ཧ་ཅང་ ཡག་པོ་ འདུག', w: 'gtam dpe \'di ha cang yag po \'dug', p: 'tam-pe di ha-cang yak-po duk.', g: '谚语 这 非常 好 （亲见）', m: '这句谚语真好！' },
        { who: '仁增老师', s: 'ལམ་ ཐག་རིང་པོ་ལ་ རྟ་ ཡག་པོ་ ཤེས།', w: 'lam thag ring po la rta yag po shes/', p: 'lam thak-ring-po-la ta yak-po she.', g: '路 远（上） 马 好 知道', m: '路遥知马力（在远路上才能认出好马）。' },
        { who: '仁增老师', s: 'དུས་ཚོད་ རིང་པོ་ལ་ གྲོགས་པོ་ ཡག་པོ་ ཤེས།', w: 'dus tshod ring po la grogs po yag po shes/', p: 'thü-tshö ring-po-la throk-po yak-po she.', g: '时间 长（里） 朋友 好 知道', m: '日久见人心（时间长了才能认出好朋友）。' },
        { who: '小林', s: 'གཏམ་དཔེ་ འདི་ བདེན་པ་ རེད། ང་ ཤེས་ སོང་།', w: 'gtam dpe \'di bden pa red/ nga shes song/', p: 'tam-pe di den-pa re. nga she song.', g: '谚语 这 真实 是 我 懂 了', m: '这句谚语太有道理了，我明白了。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'སེམས་དཀར་པོ：白心 = 善良的心',
        html: '<p>藏文化里崇尚白色（<span class="bo">དཀར་པོ</span> kar-po），「心是白的」（<span class="bo">སེམས་དཀར་པོ</span>）意为心地纯洁善良；「路是白的」（<span class="bo">ལམ་དཀར་པོ</span>）意为前途顺遂平安。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '名词 + 形容词顺序',
        html: '<p>和彝语一样，藏语的形容词也放在所修饰的名词<b>后面</b>：<span class="bo">རྟ་ཡག་པོ</span>（马 + 好 = 好马），<span class="bo">གྲོགས་པོ་ཡག་པོ</span>（朋友 + 好 = 好朋友）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: 'ང་ཤེས་སོང：我明白了',
        html: '<p>虽然 <span class="bo">སོང</span> 常用于第三人称，但搭配认知动词 <span class="bo">ཤེས</span>（懂）或 <span class="bo">ཧ་གོ</span>（明白）时，说自己「刚刚恍然大悟、听明白了」也用 <span class="bo">སོང</span>！</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '在藏语里，「སེམས་དཀར་པོ（白心）」比喻什么？', options: ['心地善良纯洁', '害怕', '寒冷'], answer: 0 },
      { type: 'choice', q: '「好朋友」在藏语里的词序是：', options: ['གྲོགས་པོ་ཡག་པོ（朋友 + 好）', 'ཡག་པོ་གྲོགས་པོ（好 + 朋友）', 'གཏམ་དཔེ་ཡག་པོ'], answer: 0, script: true }
    ],
    source: { title: '藏族传统谚语（གཏམ་དཔེ）选编', url: 'https://mandala.library.virginia.edu/' }
  },
  {
    id: 'b3-5',
    title: '歌曲与诗歌',
    goal: '赏析六世达赖仓央嘉措情歌（མགུར་གླུ）与藏族民歌意象：白鹤、理塘与洁白仙鹤。',
    minutes: 15,
    words: [
      { s: 'གླུ', w: 'glu', p: 'lu', m: '歌、民歌' },
      { s: 'བྱ་དཀར་པོ', w: 'bya dkar po', p: 'cha-kar-po', m: '白鸟、洁白的仙鹤' },
      { s: 'གཤོག་པ', w: 'gshog pa', p: 'shok-pa', m: '翅膀' },
      { s: 'གཡར', w: 'g.yar', p: 'yar', m: '借' },
      { s: 'ལི་ཐང', w: 'li thang', p: 'li-thang', m: '理塘' },
      { s: 'ལོག', w: 'log', p: 'lok', m: '返回、回来' },
      { s: 'ནམ་མཁའ', w: 'nam mkha\'', p: 'nam-kha', m: '天空' },
      { s: 'ལེན', w: 'len', p: 'len', m: '唱（歌）；拿' }
    ],
    dialogue: {
      scene: '卓玛给小林唱起著名的《洁白的仙鹤》（仓央嘉措诗歌谱曲的民歌），并逐句解释意思。',
      people: { '卓玛': 'སྒྲོལ་མ།', '小林': '' },
      lines: [
        { who: '小林', s: 'སྒྲོལ་མ་ལགས། གླུ་ འདི་ ཧ་ཅང་ སྙན་པོ་ འདུག', w: 'sgrol ma lags/ glu \'di ha cang snyan po \'dug', p: 'dröl-ma-la. lu di ha-cang nyen-po duk.', g: '卓玛（尊称） 歌 这首 非常 好听 （亲见）', m: '卓玛，这首歌真好听！' },
        { who: '卓玛', s: 'གླུ་ འདི་ བྱ་དཀར་པོ་ ཟེར་གྱི་ཡོད།', w: 'glu \'di bya dkar po zer gyi yod/', p: 'lu di cha-kar-po ser-gi-yö.', g: '歌 这首 白鹤 叫', m: '这首歌叫《洁白的仙鹤》。' },
        { who: '卓玛', s: 'བྱ་དཀར་པོ་ གཤོག་པ་ ང་ལ་ གཡར་ རོགས་གནང་།', w: 'bya dkar po gshog pa nga la g.yar rogs gnang/', p: 'cha-kar-po shok-pa nga-la yar rok-nang.', g: '洁白仙鹤 翅膀 给我 借 请', m: '洁白的仙鹤啊，请把翅膀借给我。' },
        { who: '卓玛', s: 'ང་ ཐག་རིང་པོ་ལ་ འགྲོ་ གི་ མིན།', w: 'nga thag ring po la \'gro gi min/', p: 'nga thak-ring-po-la dro gi min.', g: '我 往远处 去 （将要） 不是', m: '我不往遥远的地方去。' },
        { who: '卓玛', s: 'ལི་ཐང་ ནས་ ལོག་ ཡོང་ གི་ ཡིན།', w: 'li thang nas log yong gi yin/', p: 'li-thang ne lok yong gi yin.', g: '理塘 从 返回 来 （将要） 是', m: '到理塘转一圈就飞回来。' },
        { who: '小林', s: 'ང་ཚོ་ མཉམ་དུ་ གླུ་ འདི་ ལེན།', w: 'nga tsho mnyam du glu \'di len/', p: 'nga-tsho nyam-du lu di len.', g: '我们 一起 歌 这首 唱', m: '我们一起唱这首歌吧！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '六音节道歌与《洁白的仙鹤》',
        html: '<p>藏族传统诗歌和民歌（包括六世达赖仓央嘉措的诗歌）多采用<b>每行六个音节</b>（三个节拍：2-2-2）的格律。原诗大意是：「洁白的仙鹤啊，请借我双翅一用；不往远处飞去，只到理塘一转就回。」</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '我不去：འགྲོ་གི་མིན',
        html: '<p>将来时 <span class="bo">འགྲོ་གི་ཡིན</span>（我要去）的否定形式是把 <span class="bo">ཡིན</span> 换成 <span class="bo">མིན</span>：<span class="bo">ང་ཐག་རིང་པོ་ལ་འགྲོ་གི་མིན།</span>（我不去远方）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '唱歌：གླུ་ལེན',
        html: '<p>藏语里「唱歌」说成 <span class="bo">གླུ་ལེན</span> lu len（或口语 <span class="bo">གཞས་གཏོང</span> she tong）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「我不去远方」怎么说？', options: ['ང་ཐག་རིང་པོ་ལ་འགྲོ་གི་མིན།', 'ང་ཐག་རིང་པོ་ལ་འགྲོ་གི་ཡིན།', 'ང་ལི་ཐང་ལ་ཕྱིན་པ་ཡིན།'], answer: 0, script: true },
      { type: 'choice', q: 'གཤོག་པ 是什么意思？', options: ['翅膀', '天空', '早上'], answer: 0 }
    ],
    source: { title: '仓央嘉措诗歌《洁白的仙鹤》口语导读', url: 'https://en.wikipedia.org/wiki/6th_Dalai_Lama' }
  },
  {
    id: 'b3-6',
    title: '书面语与口语',
    goal: '了解书面藏文（ཡིག་སྐད）与拉萨口语（ཕལ་སྐད）的对应关系，能阅读简短书信与告示。',
    minutes: 15,
    words: [
      { s: 'ཡིག་སྐད', w: 'yig skad', p: 'yik-ke', m: '书面语' },
      { s: 'ཕལ་སྐད', w: 'phal skad', p: 'phe-ke', m: '口语、日常话' },
      { s: 'ཡི་གེ', w: 'yi ge', p: 'yi-ge', m: '文字；书信' },
      { s: 'འབྲི', w: '\'bri', p: 'dri', m: '写' },
      { s: 'ཀློག', w: 'klog', p: 'lok', m: '读、阅读' },
      { s: 'གཅིག་པ', w: 'gcig pa', p: 'cik-pa', m: '一样、相同' },
      { s: 'མི་འདྲ་བ', w: 'mi \'dra ba', p: 'min-dra-wa', m: '不同、有差别' },
      { s: 'ཚང་མ', w: 'tshang ma', p: 'tshang-ma', m: '全部、大家' }
    ],
    dialogue: {
      scene: '课程最后一课，仁增老师为小林总结书面藏文与拉萨口语的异同。',
      people: { '小林': '', '仁增老师': 'དགེ་རྒན་རིག་འཛིན།' },
      lines: [
        { who: '小林', s: 'དགེ་རྒན་ལགས། ཡིག་སྐད་ དང་ ཕལ་སྐད་ གཅིག་པ་ རེད་པས།', w: 'dge rgan lags/ yig skad dang phal skad gcig pa red pas/', p: 'ge-gen-la. yik-ke dang phe-ke cik-pa re-pe?', g: '老师（尊称） 书面语 和 口语 一样 是吗', m: '老师，书面语和口语是一样的吗？' },
        { who: '仁增老师', s: 'ཡི་གེ་ གཅིག་པ་ རེད། ཡིན་ནའང་ ཕལ་སྐད་ ཏོག་ཙམ་ མི་འདྲ་བ་ ཡོད་རེད།', w: 'yi ge gcig pa red/ yin na\'ng phal skad tog tsam mi \'dra ba yod red/', p: 'yi-ge cik-pa re. yin-nang phe-ke tok-tsam min-dra-wa yö-re.', g: '文字 一样 是 但是 口语 一点儿 不同 有', m: '文字是一样的，但口语有一点不同。' },
        { who: '小林', s: 'བོད་པ་ ཚང་མ་ ཡི་གེ་ འདི་ ཀློག་ གི་ རེད་པས།', w: 'bod pa tshang ma yi ge \'di klog gi red pas/', p: 'phö-pa tshang-ma yi-ge di lok gi re-pe?', g: '藏族人 全部 文字 这个 读 （会） 是吗', m: '所有藏族人都读这种文字吗？' },
        { who: '仁增老师', s: 'ལགས་རེད། ཡིག་སྐད་ ཤེས་ ན་ དཔེ་ཆ་ ཚང་མ་ ཀློག་ ཐུབ།', w: 'lags red/ yig skad shes na dpe cha tshang ma klog thub/', p: 'lak-re. yik-ke she na pe-cha tshang-ma lok thup.', g: '是的 书面语 懂 如果 书 全部 读 能够', m: '是的，如果懂书面语，所有的书都能读。' },
        { who: '小林', s: 'ང་ ཉིན་ལྟར་ ཡི་གེ་ འབྲི་ དང་ དཔེ་ཆ་ ཀློག་ གི་ ཡིན།', w: 'nga nyin ltar yi ge \'bri dang dpe cha klog gi yin/', p: 'nga nyin-tar yi-ge dri dang pe-cha lok gi yin.', g: '我 每天 字 写 和 书 读 （将要） 是', m: '我每天都要写藏文、读藏文书。' },
        { who: '仁增老师', s: 'ཧ་ཅང་ ཡག་པོ་ འདུག བཀྲ་ཤིས་ བདེ་ལེགས།', w: 'ha cang yag po \'dug bkra shis bde legs/', p: 'ha-cang yak-po duk. tra-shi de-lek!', g: '非常 好 （亲见） 吉祥 安康', m: '太好了！扎西德勒！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '跨方言统一的书面藏文 ཡིག་སྐད',
        html: '<p>卫藏、康区、安多三大方言的口语（<span class="bo">ཕལ་སྐད</span> phe-ke）发音和助动词有所不同，但书面藏文（<span class="bo">ཡིག་སྐད</span> yik-ke）完全统一，保留了 7–9 世纪古典藏文的拼写体系。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '书面语与口语助动词对照',
        html: '<table class="mini"><tr><th>意思</th><th>拉萨口语</th><th>古典/书面语</th></tr>' +
          '<tr><th>是 / 存在</th><td><span class="bo">ཡིན / རེད / འདུག</span></td><td><span class="bo">ཡིན་ནོ / ལགས་སོ / མཆིས</span></td></tr>' +
          '<tr><th>因为</th><td><span class="bo">……ཙང</span></td><td><span class="bo">……ཕྱིར / གིས</span></td></tr></table>'
      },
      {
        at: 'end', kind: 'culture', title: '恭喜学完藏语全部阶段！',
        html: '<p>你已经完成了藏语从「文字与发音」、A1「入门会话」、A2「日常生活」到 B1「语言与文化」的全部 28 课！</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '表示「书面语」的藏文词是：', options: ['ཡིག་སྐད', 'ཕལ་སྐད', 'གཏམ་དཔེ'], answer: 0, script: true },
      { type: 'choice', q: 'འབྲི 和 ཀློག 分别是什么意思？', options: ['写、读', '吃、喝', '来、去'], answer: 0 }
    ],
    source: { title: 'Tournadre & Dorje《Manual of Standard Tibetan》书面与口语对照', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  }
]);
