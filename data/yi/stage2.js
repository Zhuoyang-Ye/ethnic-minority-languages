/* 彝语 · 阶段 2：生活与农事（A2，共 13 课）
   围绕凉山日常生活、农事、集市、天气、时间、方位和看病编写，使原规划课全部可互动练习。 */
LX.addLessons('yi', 'y2', [
  {
    id: 'y2-1',
    title: '去干活 · ꑘꁨ',
    goal: '会谈论下地干活、耕地、播种和休息。',
    minutes: 15,
    words: [
      { s: 'ꑘꁨ', m: '工作、干活' },
      { s: 'ꃅꄮ', m: '田地、庄稼地' },
      { s: 'ꐥꃅ', m: '今天' },
      { s: 'ꎆꃅ', m: '明天' },
      { s: 'ꊪ', m: '种（庄稼）' },
      { s: 'ꉐꇁ', m: '帮忙' },
      { s: 'ꅐꇁ', m: '休息' },
      { s: 'ꄎꑴ', m: '能干、勤快' }
    ],
    dialogue: {
      scene: '早上，Mugat 扛着锄头准备去地里干活，路上遇到邻居 Mugox。',
      people: { Mugat: 'ꃅꇢ', Mugox: 'ꃅꇫ' },
      lines: [
        { who: 'Mugox', s: 'ꆏ ꐥꃅ ꇿ ꄉ ꑘꁨ ꁧ？', g: '你 今天 哪里 在 干活 去', m: '你今天去哪里干活？' },
        { who: 'Mugat', s: 'ꉢ ꃅꄮ ꄉ ꈾ ꊪ ꁧ。', g: '我 田地 在 荞麦 种 去', m: '我去地里种荞麦。' },
        { who: 'Mugox', s: 'ꆍ ꏤ ꃅꄮ ꊪ ꌐ ꀕ？', g: '你们 家 田地 种 完 吗', m: '你们家的地快种完了吗？' },
        { who: 'Mugat', s: 'ꀋ ꌐ ꌦ， ꎆꃅ ꑌ ꊪ ꄿ。', g: '不 完 还 明天 也 种 要', m: '还没完，明天还要种。' },
        { who: 'Mugox', s: 'ꉢ ꐥꃅ ꆏ ꉐꇁ ꁧ ꂿ！', g: '我 今天 你 帮忙 去 吧', m: '我今天去帮你吧！' },
        { who: 'Mugat', s: 'ꂄ ꐯ ꂄ！ ꐙꄏ ꆏ ꅐꇁ ꂿ。', g: '好 极 好 累 的话 休息 吧', m: '太好了！累了咱们就休息。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '去做什么：动作 + ꁧ',
        html: '<p>表示「去做某事」时，把目的动作放在 <span class="yi">ꁧ</span> bbo（去）前面：</p>' +
          '<p class="ex"><span class="yi">ꉢ ꃅꄮ ꄉ ꈾ ꊪ ꁧ。</span><br>我 田地 在 荞麦 种 去 → 我去地里种荞麦。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: 'ꌐ sat：做完、齐全',
        html: '<p><span class="yi">ꌐ</span> sat 放在动词后面表示「完、完毕」：<span class="yi">ꊪ ꌐ</span> 种完，<span class="yi">ꀋ ꌐ ꌦ</span> 还没完。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '凉山的互助换工',
        html: '<p>农忙时节，村里亲友常互相帮忙（<span class="yi">ꉐꇁ</span> hxa la），今天帮你家种荞麦，明天帮我家收土豆。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「去干活」在彝语里怎么说？', options: ['ꑘꁨ ꁧ', 'ꁧ ꑘꁨ', 'ꅐꇁ ꁧ'], answer: 0, script: true },
      { type: 'choice', q: 'ꀋ ꌐ ꌦ 是什么意思？', options: ['还没完', '已经完了', '去休息'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 4、9 课词汇与句型改编', url: 'https://www.babelstone.co.uk/Yi/lesson_04.html' }
  },
  {
    id: 'y2-2',
    title: '聊家乡与收成 · ꌧꈿ',
    goal: '会问今年的庄稼收成好不好、雨水够不够。',
    minutes: 15,
    words: [
      { s: 'ꌧꈿ', m: '庄稼、收成' },
      { s: 'ꊂꈎ', m: '今年' },
      { s: 'ꀉꑭ', m: '土豆（洋芋）' },
      { s: 'ꆾꎭ', m: '玉米（包谷）' },
      { s: 'ꂰꉙ', m: '雨水' },
      { s: 'ꎖ', m: '多、丰足' },
      { s: 'ꀋꅉ', m: '不缺、充足' },
      { s: 'ꐥꌒꄻꌒ', m: '富裕、日子好过' }
    ],
    dialogue: {
      scene: '客人在火塘边和主人聊起今年村里的庄稼和收成。',
      people: { '主人': 'ꃥꌋ', '客人': 'ꄹꃥ' },
      lines: [
        { who: '主人', s: 'ꊂꈎ ꆍ ꃅꄷ ꌧꈿ ꂄ ꀕ？', g: '今年 你们 家乡 收成 好 吗', m: '今年你们家乡收成好吗？' },
        { who: '客人', s: 'ꊂꈎ ꂰꉙ ꂄ， ꌧꈿ ꂄ ꐯ ꂄ。', g: '今年 雨水 好 收成 好 极 好', m: '今年雨水好，收成非常好。' },
        { who: '主人', s: 'ꆍ ꏤ ꀉꑭ ꌋꆀ ꈾ ꎖ ꀕ？', g: '你们 家 土豆 和 荞麦 多 吗', m: '你们家土豆和荞麦收得多吗？' },
        { who: '客人', s: 'ꀉꑭ ꑌ ꎖ， ꆾꎭ ꑌ ꎖ。', g: '土豆 也 多 玉米 也 多', m: '土豆也多，玉米也多。' },
        { who: '主人', s: 'ꌩ ꌋꆀ ꒉ ꀋꅉ ꀞ？', g: '柴 和 水 不缺 吧', m: '柴和水都不缺吧？' },
        { who: '客人', s: 'ꀋꅉ， ꊂꈎ ꐥꌒꄻꌒ ꀐ。', g: '不缺 今年 日子好过 了', m: '不缺，今年日子好过了。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '凉山三大主粮：荞麦、土豆、玉米',
        html: '<p>凉山高寒山区最常种的作物是 <span class="yi">ꈾ</span> mge（苦荞/甜荞）、<span class="yi">ꀉꑭ</span> ax xy（土豆/洋芋）和 <span class="yi">ꆾꎭ</span> liep sha（玉米）。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '形容词重叠：ꂄ ꐯ ꂄ',
        html: '<p>把形容词重复并在中间加 <span class="yi">ꐯ</span> jjy，表示「非常……」：<span class="yi">ꂄ ꐯ ꂄ</span> 非常好。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '柴水充足就是好地方',
        html: '<p>传统彝族村寨评价一个地方好不好住，最看重 <span class="yi">ꌩ</span> syr（柴火）和 <span class="yi">ꒉ</span> yy（泉水）充不充足。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'ꀉꑭ 是什么作物？', options: ['土豆（洋芋）', '荞麦', '松树'], answer: 0 },
      { type: 'choice', q: '「非常好」怎么说？', options: ['ꂄ ꐯ ꂄ', 'ꂄ ꀋ ꂄ', 'ꎖ ꌋꆀ ꂄ'], answer: 0, script: true }
    ],
    source: { title: 'BabelStone 第 8 课 A Guest Arrives（收成段落）', url: 'https://www.babelstone.co.uk/Yi/lesson_08.html' }
  },
  {
    id: 'y2-3',
    title: '农具与家什',
    goal: '认识常见农具与火塘家什，会借用和归还物品。',
    minutes: 12,
    words: [
      { s: 'ꋠꂷ', m: '锄头' },
      { s: 'ꇭꅐ', m: '镰刀' },
      { s: 'ꁱꇐ', m: '背篓' },
      { s: 'ꈭꀐ', m: '锅庄（火塘）' },
      { s: 'ꊰꁮ', m: '碗' },
      { s: 'ꇬꑟ', m: '借、用一下' },
      { s: 'ꀊꄶ', m: '那边' },
      { s: 'ꉠ', m: '我的' }
    ],
    dialogue: {
      scene: '去地里干活前，Muqie 向邻居 Munyox 借镰刀和背篓。',
      people: { Muqie: 'ꃅꐂ', Munyox: 'ꃅꑖ' },
      lines: [
        { who: 'Muqie', s: 'ꆏ ꋠꂷ ꌋꆀ ꇭꅐ ꐤꀕ？', g: '你 锄头 和 镰刀 有吗', m: '你有锄头和镰刀吗？' },
        { who: 'Munyox', s: 'ꐥ， ꉠ ꋠꂷ ꀊꄶ ꐥ。', g: '有 我的 锄头 那边 在', m: '有，我的锄头在那边。' },
        { who: 'Muqie', s: 'ꉢ ꅽ ꇭꅐ ꇬꑟ ꄾꀕ？', g: '我 你的 镰刀 借用 可以吗', m: '我可以借用一下你的镰刀吗？' },
        { who: 'Munyox', s: 'ꄿ， ꁱꇐ ꑌ ꇬꑟ ꁧ！', g: '可以 背篓 也 借用 去', m: '可以，背篓也拿去用吧！' },
        { who: 'Muqie', s: 'ꇫꑌ， ꈭꀐ ꄉ ꊰꁮ ꐥ。', g: '请坐 火塘 在 碗 有', m: '请坐，火塘边有碗。' },
        { who: 'Munyox', s: 'ꂄ， ꉢ ꎆꃅ ꇁ ꂯ。', g: '好 我 明天 来 （语气）', m: '好，我明天再来。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '火塘（锅庄）ꈭꀐ',
        html: '<p>彝族传统民居的正屋中央是火塘（锅庄），由三块锅庄石支起，既是做饭取暖的地方，也是待客议事的中心，不能用脚踩锅庄石。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '请求许可：动词 + ꄾꀕ？',
        html: '<p>在动词后面加 <span class="yi">ꄾꀕ</span> ddax w 表示「可以……吗？」，回答「可以」直接说 <span class="yi">ꄿ</span> dda。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '传统木漆餐具',
        html: '<p>凉山彝族的传统碗（<span class="yi">ꊰꁮ</span> ci bbu）和勺子常用杜鹃木车制，涂上黑、红、黄三色大漆，坚固耐用。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '彝族家里不能用脚踩的是什么？', options: ['ꈭꀐ（火塘锅庄石）', 'ꋠꂷ（锄头）', 'ꁱꇐ（背篓）'], answer: 0, script: true },
      { type: 'choice', q: '回答「ꄾꀕ？」（可以吗？）说「可以」用哪个字？', options: ['ꄿ', 'ꀋ', 'ꇿ'], answer: 0, script: true }
    ],
    source: { title: '凉山日常器物与农事会话整理', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas' }
  },
  {
    id: 'y2-4',
    title: '家畜 · ꎇꃀꍅꑓ',
    goal: '会说牛、羊、猪、鸡、马等家畜名称，会谈放牧与喂养。',
    minutes: 15,
    words: [
      { s: 'ꎇꃀꍅꑓ', m: '牲畜、家畜' },
      { s: 'ꑌ', m: '也；牛' },
      { s: 'ꑘ', m: '羊（绵羊）' },
      { s: 'ꍅ', m: '山羊' },
      { s: 'ꃀ', m: '马' },
      { s: 'ꃬ', m: '猪' },
      { s: 'ꐋ', m: '鸡' },
      { s: 'ꇤꑘ', m: '放牧、放羊' }
    ],
    dialogue: {
      scene: '山坡草场上，Gatga 和 Vytdda 聊起各自家里养的牲畜。',
      people: { Gatga: 'ꇢꇤ', Vytdda: 'ꃺꄿ' },
      lines: [
        { who: 'Gatga', s: 'ꆍ ꏤ ꎇꃀꍅꑓ ꈍꑋ ꐥ？', g: '你们 家 家畜 多少 有', m: '你们家养了多少牲畜？' },
        { who: 'Vytdda', s: 'ꉪ ꏤ ꑘ ꑍꊏ ꂷ、 ꍅ ꊰ ꂷ ꐥ。', g: '我们 家 绵羊 二十 只 山羊 十 只 有', m: '我们家有二十只绵羊、十只山羊。' },
        { who: 'Gatga', s: 'ꆍ ꏤ ꃀ ꌋꆀ ꃬ ꐤꀕ？', g: '你们 家 马 和 猪 有吗', m: '你们家有马和猪吗？' },
        { who: 'Vytdda', s: 'ꃀ ꑍ ꂷ、 ꃬ ꉬ ꂷ、 ꐋ ꊰ ꂷ ꐥ。', g: '马 两 匹 猪 五 头 鸡 十 只 有', m: '有两匹马、五头猪、十只鸡。' },
        { who: 'Gatga', s: 'ꐥꃅ ꇿ ꄉ ꇤꑘ ꁧ？', g: '今天 哪里 在 放羊 去', m: '今天去哪里放羊？' },
        { who: 'Vytdda', s: 'ꀊꄶ ꉎ ꇤꑘ ꁧ ꂿ。', g: '那边 上坡 放羊 去 吧', m: '去上面山坡那边放羊吧。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '四音格总称：ꎇꃀꍅꑓ',
        html: '<p>彝语喜欢用四个音节并列来代表一类事物。<span class="yi">ꎇꃀꍅꑓ</span> rrep mop ssyr nyuo 字面把几种牲畜连在一起，合起来指「大小牲畜、家畜」。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '绵羊与山羊',
        html: '<p>绵羊叫 <span class="yi">ꑘ</span> nyop（毛可擀制擦尔瓦披毡），山羊叫 <span class="yi">ꍅ</span> ssyr。待客时杀鸡、杀羊是隆重的礼节。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '家畜的量词 ꂷ',
        html: '<p><span class="yi">ꂷ</span> ma 既能作人的量词，也能作牛、羊、马、猪、鸡等动物的通用量词：<span class="yi">ꃀ ꑍ ꂷ</span> 两匹马。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「十只山羊」怎么说？', options: ['ꍅ ꊰ ꂷ', 'ꊰ ꂷ ꍅ', 'ꑘ ꊰ ꂷ'], answer: 0, script: true },
      { type: 'choice', q: 'ꃬ 是什么动物？', options: ['猪', '马', '鸡'], answer: 0 }
    ],
    source: { title: '凉山农牧词汇与《会话六百句》整理', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas' }
  },
  {
    id: 'y2-5',
    title: '上学 · ꄯꒉꌷ',
    goal: '会聊读书、写字、学彝文和在学校上课。',
    minutes: 15,
    words: [
      { s: 'ꄯꒉꌷ', m: '上学、学习' },
      { s: 'ꄯꒉ', m: '书、文字' },
      { s: 'ꁱ', m: '写' },
      { s: 'ꆈꌠꁱꂷ', m: '规范彝文' },
      { s: 'ꆈꌠꉙ', m: '彝语' },
      { s: 'ꉌꉙ', m: '汉语' },
      { s: 'ꌷꅉ', m: '学校' },
      { s: 'ꇔꇷ', m: '工人、干部' }
    ],
    dialogue: {
      scene: 'Muxrryr 问小林和她弟弟在哪里上学、学什么。',
      people: { Muxrryr: 'ꃄꎓ', '小林': '' },
      lines: [
        { who: 'Muxrryr', s: 'ꅽ ꀁꑳ ꌷꅉ ꄉ ꄯꒉꌷ ꀕ？', g: '你的 弟弟 学校 在 学习 吗', m: '你弟弟在学校上学吗？' },
        { who: '小林', s: 'ꉬ， ꋌ ꀒꎂ ꌷꅉ ꄉ ꄯꒉ ꀘ。', g: '是 他 西昌 学校 在 书 读', m: '是的，他在西昌的学校读书。' },
        { who: 'Muxrryr', s: 'ꆏ ꆈꌠꉙ ꌋꆀ ꆈꌠꁱꂷ ꌷ ꀕ？', g: '你 彝语 和 规范彝文 学 吗', m: '你学彝语和彝文吗？' },
        { who: '小林', s: 'ꉢ ꆈꌠꉙ ꑌ ꌷ， ꆈꌠꁱꂷ ꑌ ꁱ。', g: '我 彝语 也 学 规范彝文 也 写', m: '我既学彝语，也写彝文。' },
        { who: 'Muxrryr', s: 'ꅽ ꂘꃀ ꇿ ꀀ ꌠ ꉬ？', g: '你的 老师 哪里 住 的人 是', m: '你的老师是哪里人？' },
        { who: '小林', s: 'ꉠ ꂘꃀ ꑝꅇ ꀀ ꌠ ꉬ， ꉌꉙ ꑌ ꂄ。', g: '我的 老师 喜德 住 的人 是 汉语 也 好', m: '我老师是喜德人，汉语也很好。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '读 ꀘ、写 ꁱ、学 ꌷ',
        html: '<ul><li><span class="yi">ꄯꒉ ꀘ</span> tep yy bi：读书</li>' +
          '<li><span class="yi">ꄯꒉ ꁱ</span> tep yy bbur：写字</li>' +
          '<li><span class="yi">ꄯꒉꌷ</span> tep yy sso：学习、上学</li></ul>'
      },
      {
        at: 'mid', kind: 'grammar', title: '也……也……：……ꑌ……，……ꑌ……',
        html: '<p>两个分句都用 <span class="yi">ꑌ</span> nyi（也），表示「既……又……」：</p>' +
          '<p class="ex"><span class="yi">ꆈꌠꉙ ꑌ ꌷ，ꆈꌠꁱꂷ ꑌ ꁱ</span><br>既学彝语，也写彝文</p>'
      },
      {
        at: 'end', kind: 'culture', title: '喜德标准音',
        html: '<p><span class="yi">ꑝꅇ</span> xit ddop（喜德县）是凉山彝语标准音所在的地方，规范彝文的 819 个音节就是以喜德语音为基础整理的。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「写彝文」里「写」是哪个字？', options: ['ꁱ', 'ꀘ', 'ꈚ'], answer: 0, script: true },
      { type: 'choice', q: 'ꆈꌠꉙ 是什么意思？', options: ['彝语（诺苏话）', '汉族', '学校'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 4 课 Family Circumstances (Part 2)', url: 'https://www.babelstone.co.uk/Yi/lesson_04.html' }
  },
  {
    id: 'y2-6',
    title: '吃饭 · ꋙꋠ',
    goal: '会劝菜、说吃饱了、夸饭菜香，了解坨坨肉与苦荞粑粑。',
    minutes: 15,
    words: [
      { s: 'ꋙ', m: '饭、粮食' },
      { s: 'ꋠ', m: '吃' },
      { s: 'ꎭ', m: '肉' },
      { s: 'ꈾꁧ', m: '荞麦粑粑' },
      { s: 'ꎧ', m: '酒' },
      { s: 'ꅝ', m: '喝' },
      { s: 'ꂰ', m: '香、好吃' },
      { s: 'ꁨꋠ', m: '请吃' },
      { s: 'ꋠꁧ', m: '吃饱' }
    ],
    dialogue: {
      scene: '主人端上热腾腾的坨坨肉和苦荞粑粑招待客人。',
      people: { '主人': 'ꃥꌋ', '客人': 'ꄹꃥ' },
      lines: [
        { who: '主人', s: 'ꄹꃥ， ꁨꇁ ꋙꋠ！', g: '客人 请来 吃饭', m: '客人，快来吃饭！' },
        { who: '主人', s: 'ꎭ ꑌ ꁨꋠ， ꈾꁧ ꑌ ꁨꋠ。', g: '肉 也 请吃 荞麦粑粑 也 请吃', m: '请吃肉，也请吃荞麦粑粑。' },
        { who: '客人', s: 'ꎭ ꌋꆀ ꈾꁧ ꂰ ꐯ ꂰ！', g: '肉 和 荞麦粑粑 香 极 香', m: '肉和荞麦粑粑真香啊！' },
        { who: '主人', s: 'ꎧ ꑌ ꍈ ꅝ ꂿ。', g: '酒 也 少许 喝 吧', m: '酒也喝一点吧。' },
        { who: '客人', s: 'ꉢ ꋠꁧ ꀐ， ꎧ ꀋ ꅝ ꀐ。', g: '我 吃饱 了 酒 不 喝 了', m: '我吃饱了，酒不再喝了。' },
        { who: '主人', s: 'ꍈ ꋠ ꌦ ꂿ！', g: '少许 吃 再 吧', m: '再多吃一点吧！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '坨坨肉与苦荞粑粑',
        html: '<p>彝族待客最经典的食物是坨坨肉（大块水煮猪肉或羊肉，拌木姜子、辣椒、蒜泥）和苦荞粑粑（<span class="yi">ꈾꁧ</span> mge bbo），放在火塘边烤热蘸蜂蜜或酸菜汤吃。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '礼貌祈使：ꁨ + 动词',
        html: '<p><span class="yi">ꁨ</span> bbop 放在动词前表示客气的「请……」：<span class="yi">ꁨꇁ</span> 请来、<span class="yi">ꁨꋠ</span> 请吃。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: 'ꋠꁧ：吃饱',
        html: '<p><span class="yi">ꋠ</span> zze（吃）+ <span class="yi">ꁧ</span> bbo（饱/满）= 吃饱。加句末助词 <span class="yi">ꀐ</span> ox 表示「已经吃饱了」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「请吃」怎么说？', options: ['ꁨꋠ', 'ꋠꁧ', 'ꁨꇁ'], answer: 0, script: true },
      { type: 'choice', q: 'ꈾꁧ 是什么食物？', options: ['荞麦粑粑', '酥油茶', '米饭'], answer: 0 }
    ],
    source: { title: '凉山待客饮食会话整理', url: 'https://www.babelstone.co.uk/Yi/lesson_08.html' }
  },
  {
    id: 'y2-7',
    title: '赶集 · ꇤꍤ',
    goal: '会约朋友去镇上赶集、问路程远近和热闹程度。',
    minutes: 12,
    words: [
      { s: 'ꇤꍤ', m: '赶集、集市' },
      { s: 'ꄮꈧ', m: '远' },
      { s: 'ꀋꄮꈧ', m: '不远、近' },
      { s: 'ꐮꐊ', m: '一起' },
      { s: 'ꑷ', m: '走吧' },
      { s: 'ꊿꎖ', m: '人多、热闹' },
      { s: 'ꈭ', m: '卖' },
      { s: 'ꃼ', m: '买' }
    ],
    dialogue: {
      scene: '逢场天到了，Mugat 叫上 Muqie 一起去镇上赶集。',
      people: { Mugat: 'ꃅꇢ', Muqie: 'ꃅꐂ' },
      lines: [
        { who: 'Mugat', s: 'ꐥꃅ ꆏ ꇤꍤ ꁧ ꀕ？', g: '今天 你 赶集 去 吗', m: '今天你去赶集吗？' },
        { who: 'Muqie', s: 'ꁧ， ꉢ ꀉꑭ ꈭ ꁧ ꏾ。', g: '去 我 土豆 卖 去 想', m: '去，我想去卖土豆。' },
        { who: 'Mugat', s: 'ꇤꍤ ꄮꈧ ꅀ ꀋꄮꈧ？', g: '集市 远 还是 不远', m: '集市远还是近？' },
        { who: 'Muqie', s: 'ꀋꄮꈧ， ꐳꐳ ꁧ ꆏ ꌐ ꀐ。', g: '不远 快快 去 的话 到 了', m: '不远，快走一会儿就到了。' },
        { who: 'Mugat', s: 'ꇤꍤ ꄉ ꊿꎖ ꀕ？', g: '集市 在 人多 吗', m: '集市上人多热闹吗？' },
        { who: 'Muqie', s: 'ꊿꎖ ꐯ ꎖ， ꑷ！ ꐮꐊ ꁧ ꂿ。', g: '人多 极 多 走吧 一起 去 吧', m: '人多得很，走吧！咱们一起去。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '凉山的赶场天',
        html: '<p>在凉山乡镇，每隔几天有一个固定的赶集日（<span class="yi">ꇤꍤ</span> ga zhat），人们背上山货、土豆、花椒去卖（<span class="yi">ꈭ</span> ggup），再买回盐巴、布料和日用品。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '正反选择问：ꄮꈧ ꅀ ꀋꄮꈧ',
        html: '<p>把形容词和它的否定形式用 <span class="yi">ꅀ</span> ddap 连起来，就是「远还是不远？」。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '买 ꃼ 与卖 ꈭ',
        html: '<p><span class="yi">ꃼ</span> vy 是「买」，<span class="yi">ꈭ</span> ggup 是「卖」，宾语都放在它们前面：<span class="yi">ꀉꑭ ꈭ</span> 卖土豆。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「卖土豆」怎么说？', options: ['ꀉꑭ ꈭ', 'ꈭ ꀉꑭ', 'ꀉꑭ ꃼ'], answer: 0, script: true },
      { type: 'choice', q: 'ꀋꄮꈧ 是什么意思？', options: ['不远、近', '很远', '很快'], answer: 0 }
    ],
    source: { title: '凉山集市会话整理', url: 'https://www.babelstone.co.uk/Yi/contents.html' }
  },
  {
    id: 'y2-8',
    title: '买东西 · ꊵꑵꃼ',
    goal: '会在集市上问价钱、买盐巴和衣服、讲价。',
    minutes: 15,
    words: [
      { s: 'ꊵꑵꃼ', m: '买东西' },
      { s: 'ꊵꑵ', m: '东西、物品' },
      { s: 'ꊂ', m: '价钱' },
      { s: 'ꋊꈐ', m: '盐巴' },
      { s: 'ꏂꂷ', m: '钱、元' },
      { s: 'ꎹ', m: '贵、重' },
      { s: 'ꀋꎹ', m: '不贵、便宜' },
      { s: 'ꅇꃀ', m: '披毡（擦尔瓦）' }
    ],
    dialogue: {
      scene: '在集市摊位前，Muqie 询问披毡和盐巴的价钱。',
      people: { Muqie: 'ꃅꐂ', '摊主': 'ꃥꌋ' },
      lines: [
        { who: 'Muqie', s: 'ꆏ ꇿ ꊵꑵꃼ ꏾ？', g: '你 哪里 买东西 想', m: '你想买什么东西？' },
        { who: '摊主', s: 'ꉢ ꄉ ꅇꃀ ꑌ ꐥ， ꃢꈜ ꑌ ꐥ。', g: '我 这里 披毡 也 有 衣服 也 有', m: '我这里有披毡，也有衣服。' },
        { who: 'Muqie', s: 'ꅇꃀ ꋋ ꈬ ꊂ ꈍꑋ ꉬ？', g: '披毡 这 件 价钱 多少 是', m: '这件披毡多少钱？' },
        { who: '摊主', s: 'ꅇꃀ ꋋ ꈬ ꏂꂷ ꉬꊯ ꉬ。', g: '披毡 这 件 元 五十 是', m: '这件披毡五十元。' },
        { who: 'Muqie', s: 'ꊂ ꎹ ꀐ， ꇖꊰ ꏂꂷ ꄾꀕ？', g: '价钱 贵 了 四十 元 可以吗', m: '太贵了，四十元可以吗？' },
        { who: '摊主', s: 'ꄿ， ꋊꈐ ꑌ ꀋꎹ， ꁨ ꃼ ꁧ！', g: '可以 盐巴 也 便宜 请 买 去', m: '可以，盐巴也便宜，请买一点去吧！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '这件披毡：名词 + 指示词 + 量词',
        html: '<p>彝语里「这件衣服/披毡」的顺序是<b>名词 + 这（ꋋ）+ 量词（ꈬ）</b>：</p>' +
          '<p class="ex"><span class="yi">ꅇꃀ ꋋ ꈬ</span><br>披毡 这 件 → 这件披毡</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '擦尔瓦披毡 ꅇꃀ',
        html: '<p><span class="yi">ꅇꃀ</span> ddop mop 是彝族传统的羊毛披毡（汉语常音译为「擦尔瓦」），白天披在身上防风防雨，夜里可以当被子盖。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '问价钱：ꊂ ꈍꑋ ꉬ？',
        html: '<p><span class="yi">ꊂ</span> wa 是「价钱」，<span class="yi">ꊂ ꈍꑋ ꉬ？</span> 就是「价钱是多少？」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「这件披毡」在彝语里的词序是：', options: ['ꅇꃀ ꋋ ꈬ（披毡 + 这 + 件）', 'ꋋ ꈬ ꅇꃀ（这 + 件 + 披毡）', 'ꈬ ꋋ ꅇꃀ'], answer: 0, script: true },
      { type: 'choice', q: 'ꊂ ꎹ ꀐ 是什么意思？', options: ['价钱贵了', '很便宜', '多少钱'], answer: 0 }
    ],
    source: { title: '凉山集市买卖会话整理', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas' }
  },
  {
    id: 'y2-9',
    title: '身体',
    goal: '会说头、眼睛、耳朵、手、脚等身体部位，会描述力气大小和外貌。',
    minutes: 12,
    words: [
      { s: 'ꇭꀧ', m: '身体' },
      { s: 'ꀑꎐ', m: '头、脑袋' },
      { s: 'ꆹꅍ', m: '眼睛' },
      { s: 'ꆪꁮ', m: '耳朵' },
      { s: 'ꇇ', m: '手' },
      { s: 'ꇿꁮ', m: '脚' },
      { s: 'ꊋ', m: '力气' },
      { s: 'ꄉꎴ', m: '高大、强壮' }
    ],
    dialogue: {
      scene: '爷爷看着孙子长大，夸他身体结实、手脚勤快。',
      people: { '爷爷': 'ꀉꁌ', Muqie: 'ꃅꐂ' },
      lines: [
        { who: '爷爷', s: 'ꆏ ꊂꈎ ꇭꀧ ꄉꎴ ꀐ！', g: '你 今年 身体 高大 了', m: '你今年身体长高大了！' },
        { who: 'Muqie', s: 'ꀉꁌ， ꅽ ꆹꅍ ꌋꆀ ꆪꁮ ꂄ ꀕ？', g: '爷爷 你的 眼睛 和 耳朵 好 吗', m: '爷爷，您的眼睛和耳朵还好吗？' },
        { who: '爷爷', s: 'ꉠ ꆹꅍ ꑌ ꂄ， ꆪꁮ ꑌ ꈨ。', g: '我的 眼睛 也 好 耳朵 也 听得见', m: '我的眼睛也好，耳朵也听得见。' },
        { who: 'Muqie', s: 'ꉢ ꇇ ꌋꆀ ꇿꁮ ꊋ ꎖ， ꑘꁨ ꁧ ꄿ。', g: '我 手 和 脚 力气 多 干活 去 可以', m: '我手脚力气大，可以去干活了。' },
        { who: '爷爷', s: 'ꂄ ꐯ ꂄ， ꒉꊸ ꄉ ꇇ ꌋꆀ ꇿꁮ ꒈ ꂿ。', g: '好 极 好 热水 用 手 和 脚 洗 吧', m: '太好了，用热水把手和脚洗洗吧。' },
        { who: 'Muqie', s: 'ꂄ， ꉢ ꀑꎐ ꑌ ꒈ ꁧ。', g: '好 我 头 也 洗 去', m: '好，我也去洗洗头。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '身体部位常成对出现',
        html: '<p>日常说话常把 <span class="yi">ꆹꅍ ꌋꆀ ꆪꁮ</span>（眼睛和耳朵）、<span class="yi">ꇇ ꌋꆀ ꇿꁮ</span>（手和脚）连在一起说。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '洗：ꒈ yyx',
        html: '<p>第 6 课学过「洗漱间」<span class="yi">ꒈꋌꅉ</span>，其中的 <span class="yi">ꒈ</span> yyx 就是动词「洗」：<span class="yi">ꇇ ꒈ</span> 洗手。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '尊敬长辈的发髻（天菩萨）',
        html: '<p>传统彝族成年男子头顶留一绺发髻，视为尊严所在，绝对不能随便触碰别人的头（<span class="yi">ꀑꎐ</span> o rry）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'ꆹꅍ 是身体的哪个部位？', options: ['眼睛', '耳朵', '手'], answer: 0 },
      { type: 'choice', q: '在彝族传统礼俗中，不能随便触碰别人的哪个部位？', options: ['ꀑꎐ（头）', 'ꇇ（手）', 'ꇿꁮ（脚）'], answer: 0, script: true }
    ],
    source: { title: 'BabelStone 第 4 课及身体词汇整理', url: 'https://www.babelstone.co.uk/Yi/lesson_04.html' }
  },
  {
    id: 'y2-10',
    title: '天气 · ꂿꃋ',
    goal: '会谈论晴天、下雨、下雪、刮风和冷热变化。',
    minutes: 15,
    words: [
      { s: 'ꂿꃋ', m: '天气、天空' },
      { s: 'ꉻꀋ', m: '太阳、晴天' },
      { s: 'ꂰꉙ', m: '雨水' },
      { s: 'ꃰ', m: '雪' },
      { s: 'ꃅꉐ', m: '风' },
      { s: 'ꈻ', m: '冷' },
      { s: 'ꊸ', m: '热' },
      { s: 'ꐥ', m: '有；在' }
    ],
    dialogue: {
      scene: '冬天到了，山上下了雪，Mugat 和 Muxga 聊起这两天的天气。',
      people: { Mugat: 'ꃅꇢ', Muxga: 'ꃄꇤ' },
      lines: [
        { who: 'Mugat', s: 'ꐥꃅ ꂿꃋ ꂄ ꀕ？', g: '今天 天气 好 吗', m: '今天天气好吗？' },
        { who: 'Muxga', s: 'ꐥꃅ ꉻꀋ ꄓ ꀐ， ꀋ ꈻ ꀐ。', g: '今天 太阳 出来 了 不 冷 了', m: '今天出太阳了，不冷了。' },
        { who: 'Mugat', s: 'ꉎ ꃅꄷ ꃰ ꐤꀕ？', g: '上面 地方 雪 有吗', m: '山上还有雪吗？' },
        { who: 'Muxga', s: 'ꉎ ꃰ ꑌ ꐥ， ꃅꉐ ꑌ ꎖ。', g: '山上 雪 也 有 风 也 大', m: '山上还有雪，风也很大。' },
        { who: 'Mugat', s: 'ꎆꃅ ꂰꉙ ꇁ ꀕ？', g: '明天 雨水 来 吗', m: '明天会下雨吗？' },
        { who: 'Muxga', s: 'ꎆꃅ ꂰꉙ ꀋ ꇁ， ꊸ ꇁ ꀐ。', g: '明天 雨水 不 来 热 来 了', m: '明天不下雨，天要暖和起来了。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '冷 ꈻ 与热 ꊸ',
        html: '<p>第 6 课学过 <span class="yi">ꒉꊸ</span>（热水）和 <span class="yi">ꒉꈻ</span>（冷水）。拆开来看，<span class="yi">ꊸ</span> ca 就是「热、暖」，<span class="yi">ꈻ</span> mgo 就是「冷」。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '出太阳：ꉻꀋ ꄓ',
        html: '<p><span class="yi">ꄓ</span> dep 既表示人「起床、起来」，也表示太阳「升起、出来」：<span class="yi">ꉻꀋ ꄓ ꀐ</span> 太阳出来了。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '高山形气候',
        html: '<p>凉山「一山分四季，十里不同天」，山脚河谷暖和（<span class="yi">ꊸ</span>），高二半山常常下雪刮风（<span class="yi">ꃰ</span>、<span class="yi">ꃅꉐ</span>）。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「太阳出来了」怎么说？', options: ['ꉻꀋ ꄓ ꀐ', 'ꂰꉙ ꇁ ꀐ', 'ꃰ ꐥ ꀐ'], answer: 0, script: true },
      { type: 'choice', q: 'ꈻ 和 ꊸ 分别是什么意思？', options: ['冷、热', '风、雪', '晴、雨'], answer: 0 }
    ],
    source: { title: '凉山天气日常会话整理', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas' }
  },
  {
    id: 'y2-11',
    title: '年、月、日 · ꈎ、ꂷ、ꑍ',
    goal: '会说年、月、日，会问今天是几月几日和十二生肖纪年。',
    minutes: 15,
    words: [
      { id: 'ꈎ-年', s: 'ꈎ', m: '年；岁' },
      { s: 'ꆪ', m: '月亮' },
      { id: 'ꑍ-日', s: 'ꑍ', m: '日、天' },
      { s: 'ꀊꑍ', m: '昨天' },
      { s: 'ꐥꃅ', m: '今天' },
      { s: 'ꎆꃅ', m: '明天' },
      { s: 'ꇬꑍ', m: '平时、每天' },
      { s: 'ꆪꑍ', m: '日子、日期' }
    ],
    dialogue: {
      scene: '小林向 Muxrryr 请教彝语里怎么说昨天、今天、明天和日期。',
      people: { '小林': '', Muxrryr: 'ꃄꎓ' },
      lines: [
        { who: '小林', s: 'ꐥꃅ ꆪꑍ ꈍꑋ ꉬ？', g: '今天 日期 多少 是', m: '今天是几号？' },
        { who: 'Muxrryr', s: 'ꐥꃅ ꊰ ꆪ ꌕ ꑍ ꉬ。', g: '今天 十 月 三 日 是', m: '今天是十月三日。' },
        { who: '小林', s: 'ꆏ ꀊꑍ ꇿ ꁧ？', g: '你 昨天 哪里 去', m: '你昨天去哪里了？' },
        { who: 'Muxrryr', s: 'ꉢ ꀊꑍ ꑝꅇ ꁧ， ꐥꃅ ꇁ ꀐ。', g: '我 昨天 喜德 去 今天 来 了', m: '我昨天去喜德，今天回来了。' },
        { who: '小林', s: 'ꆏ ꎆꃅ ꇬꑍ ꄯꒉꌷ ꀕ？', g: '你 明天 平时 学习 吗', m: '你明天照常上课吗？' },
        { who: 'Muxrryr', s: 'ꉬ， ꎆꃅ ꑌ ꌷꅉ ꄉ ꁧ。', g: '是 明天 也 学校 在 去', m: '是的，明天也去学校。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '昨天、今天、明天',
        html: '<table class="mini"><tr><th>昨天</th><td><span class="yi">ꀊꑍ</span> a nyip</td><th>今天</th><td><span class="yi">ꐥꃅ</span> jjo mu</td><th>明天</th><td><span class="yi">ꎆꃅ</span> rre mu</td></tr></table>'
      },
      {
        at: 'mid', kind: 'grammar', title: '几月几日：数字 + ꆪ + 数字 + ꑍ',
        html: '<p>月亮和月份都用 <span class="yi">ꆪ</span> hlep，「日」用 <span class="yi">ꑍ</span> nyip（与数字「二」同字）：<span class="yi">ꊰ ꆪ ꌕ ꑍ</span> 十月三日。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '彝历与十二兽历',
        html: '<p>传统彝历也使用鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪十二属相来纪年和纪日。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「昨天」在彝语里怎么说？', options: ['ꀊꑍ', 'ꐥꃅ', 'ꎆꃅ'], answer: 0, script: true },
      { type: 'choice', q: 'ꊰ ꆪ ꌕ ꑍ 是几月几日？', options: ['十月三日', '三月十日', '十二月三日'], answer: 0 }
    ],
    source: { title: '凉山时间与日期表达整理', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas' }
  },
  {
    id: 'y2-12',
    title: '方向 · ꃅꍜ',
    goal: '掌握山地方向（上方、下方、前面、后面、里面、外面）与问路。',
    minutes: 12,
    words: [
      { s: 'ꃅꍜ', m: '方向、方位' },
      { s: 'ꉎ', m: '上方、上坡' },
      { s: 'ꐰ', m: '下方、下坡' },
      { s: 'ꂴ', m: '前面' },
      { s: 'ꊁ', m: '后面' },
      { s: 'ꇬꅉ', m: '里面' },
      { s: 'ꀋꅉ', m: '不缺、充足' },
      { s: 'ꇖꃴ', m: '路、道路' }
    ],
    dialogue: {
      scene: '小林在山村里向当地人 Munyox 打听去学校的路。',
      people: { '小林': '', Munyox: 'ꃅꑖ' },
      lines: [
        { who: '小林', s: 'ꌷꅉ ꃅꍜ ꇿ ꄉ ꐥ？', g: '学校 方向 哪里 在 有', m: '学校在哪个方向？' },
        { who: 'Munyox', s: 'ꌷꅉ ꀊꄶ ꉎ ꄉ ꐥ。', g: '学校 那边 上坡 在 有', m: '学校在上面山坡那边。' },
        { who: '小林', s: 'ꇖꃴ ꋋ ꄉ ꁧ ꄾꀕ？', g: '道路 这 从 去 可以吗', m: '走这条路可以去吗？' },
        { who: 'Munyox', s: 'ꄿ， ꂴ ꄉ ꁧ， ꑳ ꊁ ꄉ ꐥ。', g: '可以 前面 往 去 房子 后面 在 有', m: '可以，往前面走，就在房子后面。' },
        { who: '小林', s: 'ꂘꃀ ꇬꅉ ꐤꀕ？', g: '老师 里面 在吗', m: '老师在里面吗？' },
        { who: 'Munyox', s: 'ꐥ， ꆏ ꐰ ꄉ ꀋ ꒉ， ꉎ ꄉ ꁧ！', g: '在 你 下坡 往 别 下去 上坡 往 去', m: '在，你别往下坡走，往上坡去吧！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '方位词放在名词后面',
        html: '<p>表示「房子后面」时，先把「房子」<span class="yi">ꑳ</span> 放前面，再放「后面」<span class="yi">ꊁ</span> wax：<span class="yi">ꑳ ꊁ ꄉ</span> 在房子后面。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '以山势和水流定方向',
        html: '<p>在凉山山区，人们指路很少说东南西北，最常用的是 <span class="yi">ꉎ</span> hxat（上方/山顶方向）和 <span class="yi">ꐰ</span> jjyp（下方/河谷方向）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '别……：ꀋ + 动词',
        html: '<p>否定词 <span class="yi">ꀋ</span> ap 放在动词前面，在祈使语境里也表示劝阻「不要往下走」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「在房子后面」怎么说？', options: ['ꑳ ꊁ ꄉ', 'ꊁ ꑳ ꄉ', 'ꑳ ꂴ ꄉ'], answer: 0, script: true },
      { type: 'choice', q: 'ꉎ 和 ꐰ 分别指什么方向？', options: ['上方（上坡）、下方（下坡）', '左边、右边', '里面、外面'], answer: 0 }
    ],
    source: { title: 'BabelStone 第 1、6 课方位词扩展', url: 'https://www.babelstone.co.uk/Yi/lesson_06.html' }
  },
  {
    id: 'y2-13',
    title: '看病 · ꆅꉚ',
    goal: '会说哪里疼、生病了、去医院看医生和吃药。',
    minutes: 15,
    words: [
      { s: 'ꆅꉚ', m: '看病、治病' },
      { s: 'ꆅ', m: '疼、生病' },
      { s: 'ꋃꒉ', m: '感冒、着凉' },
      { s: 'ꆅꉚꌠ', m: '医生' },
      { s: 'ꁮꉙ', m: '药' },
      { s: 'ꉪꄿ', m: '好转、康复' },
      { s: 'ꇭꀧ', m: '身体' },
      { s: 'ꅐꇁ', m: '休息' }
    ],
    dialogue: {
      scene: 'Vytdda 着凉头疼，Gatga 陪他去看医生。',
      people: { Vytdda: 'ꃺꄿ', '医生': 'ꆅꉚꌠ' },
      lines: [
        { who: '医生', s: 'ꆏ ꇭꀧ ꇿ ꄉ ꆅ？', g: '你 身体 哪里 在 疼', m: '你身体哪里不舒服？' },
        { who: 'Vytdda', s: 'ꉢ ꋃꒉ ꀐ， ꀑꎐ ꆅ。', g: '我 感冒 了 头 疼', m: '我感冒了，头疼。' },
        { who: '医生', s: 'ꆏ ꁮꉙ ꅝ ꀕ？', g: '你 药 喝 吗', m: '你吃药了吗？' },
        { who: 'Vytdda', s: 'ꀋ ꅝ ꌦ， ꐥꃅ ꆅꉚ ꇁ。', g: '不 喝 还 今天 看病 来', m: '还没吃，今天来看病。' },
        { who: '医生', s: 'ꁮꉙ ꋋ ꌋꆀ ꒉꊸ ꅝ， ꏤ ꄉ ꅐꇁ。', g: '药 这 和 热水 喝 家 在 休息', m: '用热水把这药喝了，在家休息。' },
        { who: 'Vytdda', s: 'ꂄ， ꎆꃅ ꉪꄿ ꇁ ꀞ！', g: '好 明天 好转 来 吧', m: '好，明天就会好起来吧！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '哪里疼：部位 + ꆅ',
        html: '<p><span class="yi">ꆅ</span> na 既是「病」也是「疼」：<span class="yi">ꀑꎐ ꆅ</span> 头疼，<span class="yi">ꇇ ꆅ</span> 手疼。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '职业名词：动作 + ꌠ',
        html: '<p>第 2 课学过 <span class="yi">ꌠ</span> su 表示「……的人」。<span class="yi">ꆅꉚ</span>（治病）+ <span class="yi">ꌠ</span> = <span class="yi">ꆅꉚꌠ</span>（治病的人 → 医生）。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '吃药用「喝」ꅝ',
        html: '<p>彝语里服药常说 <span class="yi">ꁮꉙ ꅝ</span> bbup hxop ndo（喝药），无论汤药还是药片都习惯用 <span class="yi">ꅝ</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「头疼」怎么说？', options: ['ꀑꎐ ꆅ', 'ꆅ ꀑꎐ', 'ꀑꎐ ꂄ'], answer: 0, script: true },
      { type: 'choice', q: 'ꆅꉚꌠ 末尾的 ꌠ 表示什么？', options: ['……的人（治病的人 → 医生）', '地方', '药'], answer: 0 }
    ],
    source: { title: '凉山日常看病会话整理', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas' }
  }
]);
