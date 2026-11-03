/* 彝语课程总览：阶段划分、路线图、学习资源。
   具体课时在 stage0.js（文字与发音）和 stage1.js（入门会话）里。
   planned 里的课是路线图上「规划中」的课，写好内容后移到对应的 stageN.js 即可。 */
LX.addCourse({
  id: 'yi',
  name: '彝语',
  endonym: 'ꆈꌠꉙ',
  variety: '北部方言 · 凉山彝语（诺苏话） · 规范彝文',
  romanName: '彝文拼音',
  summary: '以四川凉山话为标准音，使用规范彝文（音节文字，819 个基本字）。先学拼音、声调和文字，再进入日常会话。会话课改编自《凉山彝语会话六百句》。',
  stages: [
    {
      id: 'y0', title: '文字与发音', level: '入门前',
      desc: '规范彝文是音节文字：一个字就是一个带声调的音节。先掌握 4 个声调、10 个韵母、43 个声母，后面的课就能看字读音。'
    },
    {
      id: 'y1', title: '入门会话', level: 'A1',
      desc: '问候、自我介绍、家人、数字与年龄、做客、起床与睡觉。学完能进行最基本的日常交流。'
    },
    {
      id: 'y2', title: '生活与农事', level: 'A2',
      desc: '沿着《凉山彝语会话六百句》后半部分的话题扩展：劳动、庄稼、集市、身体、天气、看病。',
      planned: [
        '去干活 · ꑘꁨ', '聊家乡与收成 · ꌧꈿ', '农具与家什', '家畜 · ꎇꃀꍅꑓ', '上学 · ꄯꒉꌷ',
        '吃饭 · ꋙꋠ', '赶集 · ꇤꍤ', '买东西 · ꊵꑵꃼ', '身体', '天气 · ꂿꃋ',
        '年、月、日 · ꈎ、ꂷ、ꑍ', '方向 · ꃅꍜ', '看病 · ꆅꉚ'
      ]
    },
    {
      id: 'y3', title: '文化与口头传统', level: 'B1',
      desc: '四音格词等修辞、谚语、节日习俗，开始阅读彝文报纸和民间故事。',
      planned: [
        '四音格词', '谚语与格言', '火把节', '彝族年', '毕摩与传统彝文',
        '民间故事', '史诗选读：《勒俄特依》', '阅读彝文新闻'
      ]
    }
  ],
  resources: [
    { title: '600 Phrases in the Liangshan Yi Dialect（BabelStone）', url: 'https://www.babelstone.co.uk/Yi/contents.html', note: '《凉山彝语会话六百句》的英译与注释，本站会话课的主要来源。' },
    { title: 'Zwordy：彝文字表（带发音）', url: 'https://www.zwordy.com/yi_script_table', note: '可以听每个彝文字的读音，弥补本站暂时没有音频的不足。' },
    { title: 'Nuosu Yi–Chinese–English Glossary（存档）', url: 'https://web.archive.org/web/20140918052528/http://www.yihanyingcihui.net/', note: '彝汉英词汇表。' },
    { title: 'Wikipedia：Nuosu language', url: 'https://en.wikipedia.org/wiki/Nuosu_language', note: '语音、声调、文字概况。' },
    { title: 'Wiktionary：诺苏语词条', url: 'https://en.wiktionary.org/wiki/Category:Nuosu_lemmas', note: '可查单词的彝文写法和释义。' }
  ]
});
