/* 藏语 · 阶段 2：日常生活（A2，共 8 课）
   时间与日期、问路与方向、日常作息、天气与季节、身体与看病、过去时、洛萨与雪顿节、打电话与约时间。 */
LX.addLessons('bo', 'b2', [
  {
    id: 'b2-1',
    title: '时间与日期',
    goal: '会问现在几点、今天星期几，会说今天、明天、昨天。',
    minutes: 15,
    words: [
      { s: 'དེ་རིང', w: 'de ring', p: 'the-ring', m: '今天' },
      { s: 'སང་ཉིན', w: 'sang nyin', p: 'sang-nyin', m: '明天' },
      { s: 'ཁ་སང', w: 'kha sang', p: 'kha-sang', m: '昨天' },
      { s: 'ཆུ་ཚོད', w: 'chu tshod', p: 'chu-tshö', m: '点钟；小时' },
      { s: 'ད་ལྟ', w: 'da lta', p: 'tha-ta', m: '现在' },
      { s: 'གཟའ་ཉི་མ', w: 'gza\' nyi ma', p: 'za-nyi-ma', m: '星期日' },
      { s: 'གཟའ་ཟླ་བ', w: 'gza\' zla ba', p: 'za-da-wa', m: '星期一' },
      { s: 'ཞོགས་པ', w: 'zhogs pa', p: 'shok-pa', m: '早上' }
    ],
    dialogue: {
      scene: '早上，小林和索朗商量今天和明天的安排。',
      people: { '小林': '', '索朗': 'བསོད་ནམས།' },
      lines: [
        { who: '小林', s: 'ད་ལྟ་ ཆུ་ཚོད་ ག་ཚོད་ རེད།', w: 'da lta chu tshod ga tshod red/', p: 'tha-ta chu-tshö kha-tsö re?', g: '现在 点钟 多少 是', m: '现在几点了？' },
        { who: '索朗', s: 'ད་ལྟ་ ཞོགས་པ་ ཆུ་ཚོད་ བརྒྱད་ རེད།', w: 'da lta zhogs pa chu tshod brgyad red/', p: 'tha-ta shok-pa chu-tshö gye re.', g: '现在 早上 点钟 八 是', m: '现在是早上八点。' },
        { who: '小林', s: 'དེ་རིང་ གཟའ་ཉི་མ་ རེད་པས།', w: 'de ring gza\' nyi ma red pas/', p: 'the-ring za-nyi-ma re-pe?', g: '今天 星期日 是吗', m: '今天是星期天吗？' },
        { who: '索朗', s: 'ལགས་མ་རེད། ཁ་སང་ གཟའ་ཉི་མ་ རེད།', w: 'lags ma red/ kha sang gza\' nyi ma red/', p: 'lak-ma-re. kha-sang za-nyi-ma re.', g: '不是 昨天 星期日 是', m: '不是，昨天是星期天。' },
        { who: '索朗', s: 'དེ་རིང་ གཟའ་ཟླ་བ་ རེད།', w: 'de ring gza\' zla ba red/', p: 'the-ring za-da-wa re.', g: '今天 星期一 是', m: '今天是星期一。' },
        { who: '小林', s: 'སང་ཉིན་ ང་ ཆུ་ཚོད་ དགུ་ལ་ འགྲོ་ གི་ ཡིན།', w: 'sang nyin nga chu tshod dgu la \'gro gi yin/', p: 'sang-nyin nga chu-tshö gu-la dro gi yin.', g: '明天 我 点钟 九（在） 去 （将要） 是', m: '明天我九点去。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '几点钟：ཆུ་ཚོད + 数字',
        html: '<p><span class="bo">ཆུ་ཚོད</span> chu-tshö 放在数字<b>前面</b>表示「几点钟」：<span class="bo">ཆུ་ཚོད་བརྒྱད</span> 八点钟。在几点做某事，后面加助词 <span class="bo">ལ</span> la。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '藏语的星期与日月五星',
        html: '<p>藏语的星期七天和古代天文的日、月、火、水、木、金、土七曜完全对应：<span class="bo">གཟའ་ཉི་མ</span>（太阳 → 星期日）、<span class="bo">གཟའ་ཟླ་བ</span>（月亮 → 星期一）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '昨天、今天、明天',
        html: '<p><span class="bo">ཁ་སང</span> 昨天 · <span class="bo">དེ་རིང</span> 今天 · <span class="bo">སང་ཉིན</span> 明天。时间词通常放在句首或主语后面。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「八点钟」在藏语里怎么说？', options: ['ཆུ་ཚོད་བརྒྱད', 'བརྒྱད་ཆུ་ཚོད', 'ལོ་བརྒྱད'], answer: 0, script: true },
      { type: 'choice', q: 'གཟའ་ཟླ་བ 是星期几？', options: ['星期一（月亮日）', '星期日（太阳日）', '星期六'], answer: 0 }
    ],
    source: { title: '本站编写（时间与星期常用句）', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b2-2',
    title: '问路与方向',
    goal: '会问大昭寺、布达拉宫在哪里，会说远近和前后左右方向。',
    minutes: 15,
    words: [
      { s: 'གཙུག་ལག་ཁང', w: 'gtsug lag khang', p: 'tsuk-lak-khang', m: '大昭寺' },
      { s: 'ཕོ་བྲང', w: 'pho brang', p: 'pho-drang', m: '宫殿（如布达拉宫）' },
      { s: 'ག་པར', w: 'ga par', p: 'kha-par', m: '在哪里' },
      { s: 'ཐག་རིང་པོ', w: 'thag ring po', p: 'thak-ring-po', m: '远' },
      { s: 'ཐག་ཉེ་པོ', w: 'thag nye po', p: 'thak-nye-po', m: '近' },
      { s: 'གཡས', w: 'g.yas', p: 'ye', m: '右边' },
      { s: 'གཡོན', w: 'g.yon', p: 'yön', m: '左边' },
      { s: 'མདུན', w: 'mdun', p: 'dün', m: '前面' }
    ],
    dialogue: {
      scene: '小林在拉萨街头向卓玛打听去大昭寺的路。',
      people: { '小林': '', '卓玛': 'སྒྲོལ་མ།' },
      lines: [
        { who: '小林', s: 'གཙུག་ལག་ཁང་ ག་པར་ ཡོད་རེད།', w: 'gtsug lag khang ga par yod red/', p: 'tsuk-lak-khang kha-par yö-re?', g: '大昭寺 在哪里 在', m: '大昭寺在哪里？' },
        { who: '卓玛', s: 'གཙུག་ལག་ཁང་ མདུན་ལ་ ཡོད་རེད།', w: 'gtsug lag khang mdun la yod red/', p: 'tsuk-lak-khang dün-la yö-re.', g: '大昭寺 前面 在', m: '大昭寺在前面。' },
        { who: '小林', s: 'འདི་ནས་ ཐག་རིང་པོ་ རེད་པས།', w: '\'di nas thag ring po red pas/', p: 'di-ne thak-ring-po re-pe?', g: '从这里 远 是吗', m: '从这里去远吗？' },
        { who: '卓玛', s: 'ལགས་མ་རེད། ཧ་ཅང་ ཐག་ཉེ་པོ་ རེད།', w: 'lags ma red/ ha cang thag nye po red/', p: 'lak-ma-re. ha-cang thak-nye-po re.', g: '不是 非常 近 是', m: '不远，非常近。' },
        { who: '卓玛', s: 'གཡས་ལ་ ཕེབས་ རོགས་གནང་།', w: 'g.yas la phebs rogs gnang/', p: 'ye-la phep rok-nang.', g: '往右 走（敬） 请', m: '请往右边走。' },
        { who: '小林', s: 'ཐུགས་རྗེ་ཆེ། ཕོ་བྲང་ ཡང་ ཐག་ཉེ་པོ་ རེད་པས།', w: 'thugs rje che/ pho brang yang thag nye po red pas/', p: 'thuk-je-che. pho-drang yang thak-nye-po re-pe?', g: '谢谢 宫殿 也 近 是吗', m: '谢谢！布达拉宫也很近吗？' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '在哪里：ག་པར་ཡོད་རེད',
        html: '<p><span class="bo">ག་པར</span> kha-par 是「在哪里」。问固定建筑物的所在地，常搭配客观存在动词 <span class="bo">ཡོད་རེད</span> yö-re。</p>'
      },
      {
        at: 'mid', kind: 'pron', title: 'གཡས 与 གཡོན：前加字 ག 加基字 ཡ',
        html: '<p><span class="bo">གཡས</span>（右，威利 <code>g.yas</code>）和 <span class="bo">གཡོན</span>（左，威利 <code>g.yon</code>）里的 <span class="bo">ག</span> 是前加字，基字是 <span class="bo">ཡ</span>，所以读成高调的 ye 和 yön。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '顺时针转经：从左往右',
        html: '<p>在八廓街（围绕大昭寺 <span class="bo">གཙུག་ལག་ཁང</span>）行走或转寺院时，传统习俗是顺时针方向（让圣殿在自己的右手边 <span class="bo">གཡས</span>）走。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「大昭寺在哪里？」怎么问？', options: ['གཙུག་ལག་ཁང་ག་པར་ཡོད་རེད།', 'གཙུག་ལག་ཁང་གོང་ག་ཚོད་རེད།', 'གཙུག་ལག་ཁང་སུ་རེད།'], answer: 0, script: true },
      { type: 'choice', q: 'ཐག་ཉེ་པོ 是什么意思？', options: ['近', '远', '右边'], answer: 0 }
    ],
    source: { title: '本站编写（拉萨问路常用句）', url: 'https://mandala.library.virginia.edu/' }
  },
  {
    id: 'b2-3',
    title: '日常作息',
    goal: '会谈论起床、吃早饭、工作、看书和休息等日常习惯。',
    minutes: 15,
    words: [
      { s: 'ལངས', w: 'langs', p: 'lang', m: '起床、站起来' },
      { s: 'ལས་ཀ', w: 'las ka', p: 'le-ka', m: '工作' },
      { s: 'བྱེད', w: 'byed', p: 'che', m: '做' },
      { s: 'དཔེ་ཆ', w: 'dpe cha', p: 'pe-cha', m: '书' },
      { s: 'ལྟ', w: 'lta', p: 'ta', m: '看、读' },
      { s: 'ཟ་མ', w: 'za ma', p: 'sa-ma', m: '饭、食物' },
      { s: 'ཟ', w: 'za', p: 'sa', m: '吃' },
      { s: 'དགོང་མོ', w: 'dgong mo', p: 'gong-mo', m: '晚上' }
    ],
    dialogue: {
      scene: '索朗和小林聊起每天从早上到晚上的作息。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '索朗', s: 'ཁྱེད་རང་ ཞོགས་པ་ ཆུ་ཚོད་ ག་ཚོད་ལ་ ལངས་ ཀྱི་ཡོད།', w: 'khyed rang zhogs pa chu tshod ga tshod la langs kyi yod/', p: 'khye-rang shok-pa chu-tshö kha-tsö-la lang kyi-yö?', g: '您 早上 点钟 多少（在） 起床 （经常）', m: '你早上几点起床？' },
        { who: '小林', s: 'ང་ ཆུ་ཚོད་ བདུན་ལ་ ལངས་ ཀྱི་ཡོད།', w: 'nga chu tshod bdun la langs kyi yod/', p: 'nga chu-tshö dün-la lang kyi-yö.', g: '我 点钟 七（在） 起床 （经常）', m: '我七点起床。' },
        { who: '索朗', s: 'དེ་རིང་ ཁྱེད་རང་ ལས་ཀ་ བྱེད་ ཀྱི་ཡོད་པས།', w: 'de ring khyed rang las ka byed kyi yod pas/', p: 'the-ring khye-rang le-ka che kyi-yö-pe?', g: '今天 您 工作 做 正在吗', m: '今天你在工作吗？' },
        { who: '小林', s: 'ལགས་མེད། ང་ དཔེ་ཆ་ ལྟ་ གི་ཡོད།', w: 'lags med/ nga dpe cha lta gi yod/', p: 'lak-me. nga pe-cha ta gi-yö.', g: '没有 我 书 看 正在', m: '没有，我在看书。' },
        { who: '索朗', s: 'དགོང་མོ་ ང་ཚོ་ ཟ་མ་ ཟ་ གི་ འགྲོ།', w: 'dgong mo nga tsho za ma za gi \'gro/', p: 'gong-mo nga-tsho sa-ma sa gi dro.', g: '晚上 我们 饭 吃 （去） 走', m: '晚上我们去吃饭吧。' },
        { who: '小林', s: 'ཡག་པོ་ རེད། དགོང་མོ་ ཆུ་ཚོད་ དྲུག་ལ་ འགྲོ།', w: 'yag po red/ dgong mo chu tshod drug la \'gro/', p: 'yak-po re. gong-mo chu-tshö thruk-la dro.', g: '好 是 晚上 点钟 六（在） 走', m: '好呀，晚上六点走。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '经常做 / 正在做：动词 + གི་ཡོད / ཀྱི་ཡོད',
        html: '<p>动词后接 <span class="bo">གི་ཡོད</span>（或 <span class="bo">ཀྱི་ཡོད / གྱི་ཡོད</span>，随前一字后加字变化）表示自己<b>平时习惯做</b>或<b>正在做</b>某事：</p>' +
          '<p class="ex"><span class="bo">ང་དཔེ་ཆ་ལྟ་གི་ཡོད།</span> 我在看书 / 我平时看书。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '名词 + བྱེད：构成复合动词',
        html: '<p>很多藏语动词由「名词 + <span class="bo">བྱེད</span> che（做）」构成，如 <span class="bo">ལས་ཀ་བྱེད</span> le-ka che（做工作 → 工作）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '我们：ང་ཚོ',
        html: '<p>在代词后面加 <span class="bo">ཚོ</span> tsho 表示复数：<span class="bo">ང</span> 我 → <span class="bo">ང་ཚོ</span> 我们；<span class="bo">ཁོ</span> 他 → <span class="bo">ཁོ་ཚོ</span> 他们。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「工作（做工作）」在藏语里怎么说？', options: ['ལས་ཀ་བྱེད', 'དཔེ་ཆ་ལྟ', 'ཟ་མ་ཟ'], answer: 0, script: true },
      { type: 'choice', q: 'ང་ཚོ 是什么意思？', options: ['我们', '你们', '他们'], answer: 0 }
    ],
    source: { title: '本站编写（日常作息与现在时）', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b2-4',
    title: '天气与季节',
    goal: '会谈论拉萨的阳光、冷暖、刮风、下雨和四季。',
    minutes: 12,
    words: [
      { s: 'གནམ་གཤིས', w: 'gnam gshis', p: 'nam-shi', m: '天气' },
      { s: 'ཉི་མ', w: 'nyi ma', p: 'nyi-ma', m: '太阳；日子' },
      { s: 'ཚ་པོ', w: 'tsha po', p: 'tsha-po', m: '热' },
      { s: 'གྲང་མོ', w: 'grang mo', p: 'thrang-mo', m: '冷' },
      { s: 'ཆར་པ', w: 'char pa', p: 'char-pa', m: '雨' },
      { s: 'གངས', w: 'gangs', p: 'khang', m: '雪' },
      { s: 'དབྱར་ཁ', w: 'dbyar kha', p: 'yar-kha', m: '夏天' },
      { s: 'དགུན་ཁ', w: 'dgun kha', p: 'gün-kha', m: '冬天' }
    ],
    dialogue: {
      scene: '拉萨午后阳光灿烂，卓玛和小林聊起高原的天气与四季。',
      people: { '卓玛': 'སྒྲོལ་མ།', '小林': '' },
      lines: [
        { who: '卓玛', s: 'དེ་རིང་ གནམ་གཤིས་ ཡག་པོ་ འདུག', w: 'de ring gnam gshis yag po \'dug', p: 'the-ring nam-shi yak-po duk.', g: '今天 天气 好 （亲见）', m: '今天天气真好。' },
        { who: '小林', s: 'ལགས་རེད། ཉི་མ་ ཚ་པོ་ འདུག', w: 'lags red/ nyi ma tsha po \'dug', p: 'lak-re. nyi-ma tsha-po duk.', g: '是的 太阳 热 （亲见）', m: '是呀，太阳很暖和。' },
        { who: '小林', s: 'ལྷ་ས་ལ་ དགུན་ཁ་ གྲང་མོ་ ཡོད་རེད་པས།', w: 'lha sa la dgun kha grang mo yod red pas/', p: 'lha-sa-la gün-kha thrang-mo yö-re-pe?', g: '在拉萨 冬天 冷 是吗', m: '拉萨冬天冷吗？' },
        { who: '卓玛', s: 'ཞོགས་པ་ གྲང་མོ་ ཡོད་རེད། ཉི་མ་ ཡག་པོ་ ཡོད་རེད།', w: 'zhogs pa grang mo yod red/ nyi ma yag po yod red/', p: 'shok-pa thrang-mo yö-re. nyi-ma yak-po yö-re.', g: '早上 冷 是 太阳 好 是', m: '早上冷，但白天的阳光很好。' },
        { who: '小林', s: 'དབྱར་ཁ་ ཆར་པ་ མང་པོ་ ཡོད་རེད་པས།', w: 'dbyar kha char pa mang po yod red pas/', p: 'yar-kha char-pa mang-po yö-re-pe?', g: '夏天 雨 多 有吗', m: '夏天雨水多吗？' },
        { who: '卓玛', s: 'དབྱར་ཁ་ དགོང་མོ་ ཆར་པ་ ཡོད་རེད། རི་ལ་ གངས་ ཡོད་རེད།', w: 'dbyar kha dgong mo char pa yod red/ ri la gangs yod red/', p: 'yar-kha gong-mo char-pa yö-re. ri-la khang yö-re.', g: '夏天 晚上 雨 有 山上 雪 有', m: '夏天夜里常下雨，高山上有雪。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '日光城拉萨的夜雨',
        html: '<p>拉萨全年日照充足（<span class="bo">ཉི་མ་ཡག་པོ</span>），夏天（<span class="bo">དབྱར་ཁ</span>）的雨（<span class="bo">ཆར་པ</span>）多半在夜晚下，白天依然晴朗。</p>'
      },
      {
        at: 'mid', kind: 'pron', title: 'དབྱར་ཁ 的特殊拼读',
        html: '<p><span class="bo">དབྱར</span>（威利 <code>dbyar</code>）包含前加字 <span class="bo">ད</span>、基字 <span class="bo">བ</span> 和下加字 <span class="bo">ཡ</span>，合起来直接读高调的 <b>yar</b>！</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '当下感受 འདུག vs 一般规律 ཡོད་རེད',
        html: '<p>说今天亲身感觉到的天气用 <span class="bo">འདུག</span>（<span class="bo">ཉི་མ་ཚ་པོ་འདུག</span>），说拉萨冬夏的一般气候规律用 <span class="bo">ཡོད་རེད</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'དབྱར་ཁ 怎么读、是什么意思？', options: ['yar-kha（夏天）', 'gün-kha（冬天）', 'nam-shi（天气）'], answer: 0 },
      { type: 'choice', q: '说「今天天气真好（自己亲眼所见）」，句末用：', options: ['འདུག', 'ཡིན', 'མེད'], answer: 0, script: true }
    ],
    source: { title: '本站编写（高原气候与季节）', url: 'https://en.wikipedia.org/wiki/Lhasa_Tibetan' }
  },
  {
    id: 'b2-5',
    title: '身体与看病',
    goal: '会说头疼、高原反应、去医院看医生、喝药和休息。',
    minutes: 15,
    words: [
      { s: 'གཟུགས་པོ', w: 'gzugs po', p: 'suk-po', m: '身体（普通）' },
      { s: 'མགོ', w: 'mgo', p: 'go', m: '头' },
      { s: 'ན་ཚ', w: 'na tsha', p: 'na-tsha', m: '疼痛、病痛' },
      { s: 'སྨན་ཁང', w: 'sman khang', p: 'men-khang', m: '医院' },
      { s: 'ཨེམ་ཆི', w: 'em chi', p: 'em-chi', m: '医生' },
      { s: 'སྨན', w: 'sman', p: 'men', m: '药' },
      { s: 'འཐུང', w: '\'thung', p: 'thung', m: '喝' },
      { s: 'ངལ་གསོ', w: 'ngal gso', p: 'ngel-so', m: '休息' }
    ],
    dialogue: {
      scene: '刚到高原的小林觉得有点头疼，去医院看医生。',
      people: { '医生': 'ཨེམ་ཆི།', '小林': '' },
      lines: [
        { who: '医生', s: 'ཁྱེད་རང་ སྐུ་གཟུགས་ ག་པར་ ན་ཚ་ འདུག', w: 'khyed rang sku gzugs ga par na tsha \'dug', p: 'khye-rang ku-suk kha-par na-tsha duk?', g: '您 身体（敬） 哪里 病痛 有', m: '您身体哪里不舒服？' },
        { who: '小林', s: 'ཨེམ་ཆི་ལགས། ངའི་ མགོ་ལ་ ན་ཚ་ འདུག', w: 'em chi lags/ nga\'i mgo la na tsha \'dug', p: 'em-chi-la. nge go-la na-tsha duk.', g: '医生（尊称） 我的 头上 疼痛 有', m: '医生，我的头疼。' },
        { who: '医生', s: 'ཁྱེད་རང་ ལྷ་ས་ལ་ ཁ་སང་ ཕེབས་ པས་།', w: 'khyed rang lha sa la kha sang phebs pas/', p: 'khye-rang lha-sa-la kha-sang phep pe?', g: '您 到拉萨 昨天 来（敬） 吗', m: '您是昨天刚到拉萨吗？' },
        { who: '小林', s: 'ལགས་ཡིན། ངའི་ གཟུགས་པོ་ བདེ་པོ་ མི་འདུག', w: 'lags yin/ nga\'i gzugs po bde po mi \'dug', p: 'lak-yin. nge suk-po de-po min-duk.', g: '是的 我的 身体 舒服 不（亲感）', m: '是的，我身体不太舒服。' },
        { who: '医生', s: 'སྨན་ འདི་ དང་ ཆུ་ མང་པོ་ བཞེས་ རོགས་གནང་།', w: 'sman \'di dang chu mang po bzhes rogs gnang/', p: 'men di dang chu mang-po she rok-nang.', g: '药 这个 和 水 多 吃喝（敬） 请', m: '请吃这个药，多喝水。' },
        { who: '小林', s: 'ཐུགས་རྗེ་ཆེ། ང་ སྨན་ འཐུང་ གི་ ཡིན།', w: 'thugs rje che/ nga sman \'thung gi yin/', p: 'thuk-je-che. nga men thung gi yin.', g: '谢谢 我 药 喝 （将要） 是', m: '谢谢，我会吃药的。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '说别人用 སྐུ་གཟུགས，说自己用 གཟུགས་པོ',
        html: '<p>医生问病人用敬语 <span class="bo">སྐུ་གཟུགས</span> ku-suk（贵体），病人回答说自己的身体用普通词 <span class="bo">གཟུགས་པོ</span> suk-po。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: 'འདུག 的否定：མི་འདུག',
        html: '<p><span class="bo">འདུག</span> duk 的否定形式是 <span class="bo">མི་འདུག</span> min-duk。说自己身上疼、不舒服（内省感知）也用 <span class="bo">འདུག / མི་འདུག</span>！</p>'
      },
      {
        at: 'end', kind: 'culture', title: 'ཨེམ་ཆི 与藏医药',
        html: '<p>口语里称呼医生常用借词 <span class="bo">ཨེམ་ཆི</span> em-chi（加 <span class="bo">ལགས</span> 表尊敬），「医院」是 <span class="bo">སྨན་ཁང</span> men-khang（药房/医院）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '说自己的身体时，用哪个词？', options: ['གཟུགས་པོ', 'སྐུ་གཟུགས', 'སྨན་ཁང'], answer: 0, script: true },
      { type: 'choice', q: 'འདུག 的否定形式是：', options: ['མི་འདུག', 'མེད', 'མ་རེད'], answer: 0, script: true }
    ],
    source: { title: '本站编写（高原看病常用句）', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b2-6',
    title: '过去时：昨天做了什么',
    goal: '掌握拉萨话过去时的助动词 པ་ཡིན（自己做）和 སོང（亲眼见/他人做）。',
    minutes: 15,
    words: [
      { s: 'ཕྱིན', w: 'phyin', p: 'chin', m: '去了（འགྲོ 的过去式）' },
      { s: 'བྱས', w: 'byas', p: 'che', m: '做了（བྱེད 的过去式）' },
      { s: 'ཉོས', w: 'nyos', p: 'nyö', m: '买了（ཉོ 的过去式）' },
      { s: 'བཏུངས', w: 'btungs', p: 'tung', m: '喝了（འཐུང 的过去式）' },
      { s: 'པ་ཡིན', w: 'pa yin', p: 'pa-yin', m: '（我）做过了' },
      { s: 'སོང', w: 'song', p: 'song', m: '（他/亲见）做了、去了' },
      { s: 'ཁྲོམ', w: 'khrom', p: 'throm', m: '市场、集市' },
      { s: 'ཞྭ་མོ', w: 'zhwa mo', p: 'sha-mo', m: '帽子' }
    ],
    dialogue: {
      scene: '周一早上，索朗问小林昨天星期天去了哪里、做了什么。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '索朗', s: 'ཁ་སང་ ཁྱེད་རང་ ག་པར་ ཕེབས་ པ་ཡིན།', w: 'kha sang khyed rang ga par phebs pa yin/', p: 'kha-sang khye-rang kha-par phep pa-yin?', g: '昨天 您 哪里 去（敬） （过去）', m: '昨天你去哪里了？' },
        { who: '小林', s: 'ཁ་སང་ ང་ ཁྲོམ་ལ་ ཕྱིན་ པ་ཡིན།', w: 'kha sang nga khrom la phyin pa yin/', p: 'kha-sang nga throm-la chin pa-yin.', g: '昨天 我 去市场 去了 （过去）', m: '昨天我去市场了。' },
        { who: '索朗', s: 'ཁྲོམ་ལ་ ག་རེ་ ཉོས་ པ་ཡིན།', w: 'khrom la ga re nyos pa yin/', p: 'throm-la kha-re nyö pa-yin?', g: '在市场 什么 买了 （过去）', m: '在市场买了什么？' },
        { who: '小林', s: 'ང་ ཞྭ་མོ་ གཅིག་ ཉོས་ པ་ཡིན།', w: 'nga zhwa mo gcig nyos pa yin/', p: 'nga sha-mo cik nyö pa-yin.', g: '我 帽子 一顶 买了 （过去）', m: '我买了一顶帽子。' },
        { who: '小林', s: 'བསོད་ནམས་ལགས་ ཡང་ ཁྲོམ་ལ་ ཕེབས་ པས་།', w: 'bsod nams lags yang khrom la phebs pas/', p: 'sö-nam-la yang throm-la phep pe?', g: '索朗（尊称） 也 去市场 去（敬） 吗', m: '索朗你也去市场了吗？' },
        { who: '索朗', s: 'ང་ ཕྱིན་ མེད། ངའི་ ཇོ་ལགས་ ཕྱིན་ སོང་།', w: 'nga phyin med/ nga\'i jo lags phyin song/', p: 'nga chin me. nge cho-la chin song.', g: '我 去了 没 我的 哥哥 去了 （亲见过去）', m: '我没去，我哥哥去了。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '动词的现在式与过去式',
        html: '<p>书面藏文很多动词有现在、过去、未来、命令四种词形。比如「去」现在式是 <span class="bo">འགྲོ</span> dro，过去式是 <span class="bo">ཕྱིན</span> chin；而敬语动词 <span class="bo">ཕེབས</span> phep 不变。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '过去时助动词：པ་ཡིན 与 སོང',
        html: '<ul><li>说<b>自己</b>做过的事：过去式动词 + <span class="bo">པ་ཡིན</span> pa-yin（如 <span class="bo">ང་ཕྱིན་པ་ཡིན</span> 我去了）</li>' +
          '<li>说<b>别人</b>做的、自己亲眼见到的事：过去式动词 + <span class="bo">སོང</span> song（如 <span class="bo">ཁོ་ཕྱིན་སོང</span> 他去了）</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: '我没去：ཕྱིན་མེད',
        html: '<p>否定自己过去做过某事，常用「过去式动词 + <span class="bo">མེད</span> me」：<span class="bo">ང་ཕྱིན་མེད།</span>（我没去）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「昨天我去市场了」怎么说？', options: ['ཁ་སང་ང་ཁྲོམ་ལ་ཕྱིན་པ་ཡིན།', 'སང་ཉིན་ང་ཁྲོམ་ལ་འགྲོ་གི་ཡིན།', 'ཁོ་ཁྲོམ་ལ་ཕྱིན་སོང་།'], answer: 0, script: true },
      { type: 'choice', q: '说别人做过某事（自己亲眼见到），句末用哪个助词？', options: ['སོང', 'པ་ཡིན', 'གི་ཡིན'], answer: 0, script: true }
    ],
    source: { title: '本站编写（拉萨话过去时系统）', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  },
  {
    id: 'b2-7',
    title: '节日：洛萨与雪顿节',
    goal: '会用藏历新年（洛萨）祝福语拜年，了解雪顿节喝酸奶、看藏戏的习俗。',
    minutes: 15,
    words: [
      { s: 'ལོ་གསར', w: 'lo gsar', p: 'lo-sar', m: '洛萨（藏历新年）' },
      { s: 'ཞོ་སྟོན', w: 'zho ston', p: 'sho-tön', m: '雪顿节（酸奶节）' },
      { s: 'ཞོ', w: 'zho', p: 'sho', m: '酸奶' },
      { s: 'ལྷ་མོ', w: 'lha mo', p: 'lha-mo', m: '藏戏；仙女' },
      { s: 'ཁ་བཏགས', w: 'kha btags', p: 'kha-tak', m: '哈达' },
      { s: 'རྩམ་པ', w: 'rtsam pa', p: 'tsam-pa', m: '糌粑' },
      { s: 'སྐྱིད་པོ', w: 'skyid po', p: 'kyi-po', m: '快乐、愉快' },
      { s: 'མང་པོ', w: 'mang po', p: 'mang-po', m: '多、许多' }
    ],
    dialogue: {
      scene: '藏历新年（洛萨）期间，小林手捧哈达去卓玛家拜年，并聊起夏天的雪顿节。',
      people: { '小林': '', '卓玛': 'སྒྲོལ་མ།' },
      lines: [
        { who: '小林', s: 'ལོ་གསར་ལ་ བཀྲ་ཤིས་ བདེ་ལེགས།', w: 'lo gsar la bkra shis bde legs/', p: 'lo-sar-la tra-shi de-lek!', g: '新年 吉祥 安康', m: '洛萨扎西德勒（新年吉祥）！' },
        { who: '卓玛', s: 'བཀྲ་ཤིས་ བདེ་ལེགས། ཁ་བཏགས་ ཐུགས་རྗེ་ཆེ།', w: 'bkra shis bde legs/ kha btags thugs rje che/', p: 'tra-shi de-lek! kha-tak thuk-je-che.', g: '吉祥 安康 哈达 谢谢', m: '扎西德勒！谢谢你的哈达。' },
        { who: '卓玛', s: 'རྩམ་པ་ དང་ བོད་ཇ་ བཞེས་ རོགས་གནང་།', w: 'rtsam pa dang bod ja bzhes rogs gnang/', p: 'tsam-pa dang phö-cha she rok-nang.', g: '糌粑 和 酥油茶 吃喝（敬） 请', m: '请吃糌粑、喝酥油茶。' },
        { who: '小林', s: 'ལོ་གསར་ ཧ་ཅང་ སྐྱིད་པོ་ འདུག', w: 'lo gsar ha cang skyid po \'dug', p: 'lo-sar ha-cang kyi-po duk.', g: '藏历新年 非常 快乐 （亲见）', m: '藏历新年真热闹开心！' },
        { who: '卓玛', s: 'དབྱར་ཁ་ ལྷ་ས་ལ་ ཞོ་སྟོན་ ཡང་ ཡོད་རེད།', w: 'dbyar kha lha sa la zho ston yang yod red/', p: 'yar-kha lha-sa-la sho-tön yang yö-re.', g: '夏天 在拉萨 雪顿节 也 有', m: '夏天拉萨还有雪顿节呢。' },
        { who: '小林', s: 'ཞོ་སྟོན་ལ་ མི་ མང་པོ་ ཞོ་ ཟ་ དང་ ལྷ་མོ་ ལྟ་ གི་ རེད།', w: 'zho ston la mi mang po zho za dang lha mo lta gi red/', p: 'sho-tön-la mi mang-po sho sa dang lha-mo ta gi re.', g: '在雪顿节 人 很多 酸奶 吃 和 藏戏 看 （会） 是', m: '雪顿节时大家会吃酸奶、看藏戏。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'ལོ་གསར（洛萨）与切玛盒',
        html: '<p><span class="bo">ལོ་གསར</span> lo-sar 字面是「新年」（<span class="bo">ལོ</span> 年 + <span class="bo">གསར</span> 新）。过年时家家户户捧出装满炒麦粒和糌粑（<span class="bo">རྩམ་པ</span>）的切玛盒，互献哈达（<span class="bo">ཁ་བཏགས</span>），道一声 <span class="bo">ལོ་གསར་ལ་བཀྲ་ཤིས་བདེ་ལེགས།</span></p>'
      },
      {
        at: 'mid', kind: 'culture', title: '雪顿节 ཞོ་སྟོན：酸奶宴与藏戏',
        html: '<p><span class="bo">ཞོ</span> sho 是「酸奶」，<span class="bo">སྟོན</span> tön 是「宴会」。藏历六月底七月初的雪顿节，拉萨市民到哲蚌寺展佛、去罗布林卡林卡野餐、吃牦牛酸奶、看传统藏戏（<span class="bo">ལྷ་མོ</span> lha-mo）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '别人会做某事：动词 + གི་རེད',
        html: '<p>说自己将要做用 <span class="bo">གི་ཡིན</span>，说第三人称（大家/别人）会做某事则用 <span class="bo">གི་རེད</span> gi-re。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'ཞོ་སྟོན（雪顿节）字面意思是什么？', options: ['酸奶宴（酸奶节）', '酥油茶节', '跑马节'], answer: 0 },
      { type: 'choice', q: '藏历新年拜年时怎么说？', options: ['ལོ་གསར་ལ་བཀྲ་ཤིས་བདེ་ལེགས།', 'ག་ལེ་བཞུགས།', 'འདི་གོང་ག་ཚོད་རེད།'], answer: 0, script: true }
    ],
    source: { title: '本站编写（西藏传统节日民俗）', url: 'https://en.wikipedia.org/wiki/Losar' }
  },
  {
    id: 'b2-8',
    title: '打电话与约时间',
    goal: '会打电话找人、问对方有没有空、约定见面的时间和地点。',
    minutes: 15,
    words: [
      { s: 'ཁ་པར', w: 'kha par', p: 'kha-par', m: '电话' },
      { s: 'གཏོང', w: 'gtong', p: 'tong', m: '打（电话）、发送' },
      { s: 'དུས་ཚོད', w: 'dus tshod', p: 'thü-tshö', m: '时间、空暇' },
      { s: 'ཐུག', w: 'thug', p: 'thuk', m: '见面' },
      { s: 'ཇ་ཁང', w: 'ja khang', p: 'cha-khang', m: '茶馆' },
      { s: 'མཉམ་དུ', w: 'mnyam du', p: 'nyam-du', m: '一起' },
      { s: 'སྒུག', w: 'sgug', p: 'guk', m: '等、等待' },
      { s: 'ལགས་སོ', w: 'lags so', p: 'lak-so', m: '好的（礼貌应答）' }
    ],
    dialogue: {
      scene: '小林给索朗打电话，约他明天一起去甜茶馆见面。',
      people: { '小林': '', '索朗': 'བསོད་ནམས།' },
      lines: [
        { who: '小林', s: 'བསོད་ནམས་ལགས། ང་ ལིན་ ཡིན།', w: 'bsod nams lags/ nga lin yin/', p: 'sö-nam-la. nga lin yin.', g: '索朗（尊称） 我 林 是', m: '索朗你好，我是林。' },
        { who: '索朗', s: 'བཀྲ་ཤིས་ བདེ་ལེགས། ཁ་པར་ གཏོང་ བ་ ཐུགས་རྗེ་ཆེ།', w: 'bkra shis bde legs/ kha par gtong ba thugs rje che/', p: 'tra-shi de-lek. kha-par tong wa thuk-je-che.', g: '吉祥 安康 电话 打 （名物化） 谢谢', m: '扎西德勒！谢谢你打电话来。' },
        { who: '小林', s: 'སང་ཉིན་ ཁྱེད་རང་ལ་ དུས་ཚོད་ ཡོད་པས།', w: 'sang nyin khyed rang la dus tshod yod pas/', p: 'sang-nyin khye-rang-la thü-tshö yö-pe?', g: '明天 您（有） 时间 有吗', m: '明天您有空吗？' },
        { who: '索朗', s: 'ལགས་ཡོད། ང་ཚོ་ ག་པར་ ཐུག་ གི་ རེད།', w: 'lags yod/ nga tsho ga par thug gi red/', p: 'lak-yö. nga-tsho kha-par thuk gi re?', g: '有的 我们 在哪里 见面 （将要） 是', m: '有空，我们在哪里见面？' },
        { who: '小林', s: 'ཆུ་ཚོད་ གསུམ་ལ་ ཇ་ཁང་ལ་ མཉམ་དུ་ འགྲོ།', w: 'chu tshod gsum la ja khang la mnyam du \'gro/', p: 'chu-tshö sum-la cha-khang-la nyam-du dro.', g: '点钟 三（在） 去茶馆 一起 走', m: '三点钟我们一起去茶馆吧。' },
        { who: '索朗', s: 'ལགས་སོ། ང་ ཇ་ཁང་ལ་ སྒུག་ གི་ ཡིན།', w: 'lags so/ nga ja khang la sgug gi yin/', p: 'lak-so. nga cha-khang-la guk gi yin.', g: '好的 我 在茶馆 等 （将要） 是', m: '好的，我在茶馆等你。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '打电话：ཁ་པར་གཏོང',
        html: '<p><span class="bo">ཁ་པར</span> kha-par 是「电话」（注意和 <span class="bo">ག་པར</span>「哪里」读音相近，但拼写不同），搭配动词 <span class="bo">གཏོང</span> tong 表示「打电话」。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '问对方有没有空：ཁྱེད་རང་ལ་དུས་ཚོད་ཡོད་པས',
        html: '<p><span class="bo">དུས་ཚོད</span> thü-tshö 是「时间」，用「对您来说有时间吗」来问对方有没有空，礼貌回答「有」说 <span class="bo">ལགས་ཡོད</span> lak-yö。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '甜茶馆聚会',
        html: '<p>拉萨人约朋友聊天谈事最常去甜茶馆（<span class="bo">ཇ་ཁང</span> cha-khang），点一壶甜茶可以坐一整个下午。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「明天你有时间（有空）吗？」怎么问？', options: ['སང་ཉིན་ཁྱེད་རང་ལ་དུས་ཚོད་ཡོད་པས།', 'ད་ལྟ་ཆུ་ཚོད་ག་ཚོད་རེད།', 'ཁ་སང་ག་པར་ཕེབས་པ་ཡིན།'], answer: 0, script: true },
      { type: 'choice', q: 'ཇ་ཁང 是什么地方？', options: ['茶馆', '医院', '学校'], answer: 0 }
    ],
    source: { title: '本站编写（打电话与邀约）', url: 'https://shambhala.com/manual-of-standard-tibetan.html' }
  }
]);
