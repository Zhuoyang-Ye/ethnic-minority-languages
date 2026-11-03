/* 彝语课程总览：阶段划分、路线图、学习资源。
   具体课时在 stage0.js（文字与发音）、stage1.js（入门会话 A1）、stage2.js（生活与农事 A2）、stage3.js（文化与口头传统 B1）里。 */
LX.addCourse({
  id: 'yi',
  name: '彝语',
  endonym: 'ꆈꌠꉙ',
  variety: '北部方言 · 凉山彝语（诺苏话） · 规范彝文',
  romanName: '彝文拼音',
  summary: '以四川凉山话为标准音，使用规范彝文（音节文字，819 个基本字）。先学拼音、声调和文字，再进入日常会话、农事生活与口头文化传统。',
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
      desc: '沿着《凉山彝语会话六百句》后半部分的话题扩展：劳动、庄稼、农具、家畜、上学、吃饭、赶集、买东西、身体、天气、年月日、方向、看病。'
    },
    {
      id: 'y3', title: '文化与口头传统', level: 'B1',
      desc: '四音格词等修辞、谚语与格言、火把节、彝族年、毕摩与传统彝文、民间故事、《勒俄特依》选读与阅读彝文新闻。'
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
