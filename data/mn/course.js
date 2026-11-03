/* 蒙古语课程总览：阶段划分、路线图、学习资源。
   具体课时在 stage0.js（文字与发音）、stage1.js（入门会话 A1）、stage2.js（草原生活与文化 A2/B1）里。 */
LX.addCourse({
  id: 'mn',
  name: '蒙古语',
  endonym: 'ᠮᠤᠩᠭᠤᠯ ᠬᠡᠯᠡ',
  variety: '内蒙古标准音（察哈尔话） · 传统蒙文（胡都木蒙文） + 口语注音',
  romanName: '口语注音 / 蒙文转写',
  summary: '蒙古语属蒙古语族，是典型的黏着语，语序为「主—宾—动」（SOV），严格遵循元音和谐律（阳性、阴性、中性元音）。传统蒙古文（胡都木蒙文，Unicode U+1800–U+18AF）保留了古代蒙古语的拼写形式，与现代口语读音有一定差异，因此本站和藏语一样，每个词都同时给出传统蒙文、拉丁书面转写（反映拼写）和口语注音（反映实际读音）。',
  stages: [
    {
      id: 'm0', title: '文字与发音', level: '入门前',
      desc: '掌握 7 个元音字母与元音和谐三分组（阳性 a/o/u、阴性 e/ö/ü、中性 i）、常用辅音字母（区分阳性 ᠬ/ᠭ 与阴性 ᠬ/ᠭ）及双元音变长元音规律。'
    },
    {
      id: 'm1', title: '入门会话', level: 'A1',
      desc: '草原问候与道谢、询问姓名与家乡、介绍家庭成员、数字 1–10 与牲畜计数。'
    },
    {
      id: 'm2', title: '草原生活与文化', level: 'A2–B1',
      desc: '蒙古包做客与奶茶手把肉、草原问路与四季天气、那达慕大会与蒙古谚语民歌。'
    }
  ],
  resources: [
    { title: 'Wikipedia：Mongolian language（蒙古语概况）', url: 'https://en.wikipedia.org/wiki/Mongolian_language', note: '蒙古语语音、元音和谐、格助词与语法结构介绍。' },
    { title: 'Wikipedia：Mongolian script（传统蒙文字母表）', url: 'https://en.wikipedia.org/wiki/Mongolian_script', note: '胡都木蒙文字母词首、词中、词末字形及拉丁转写对照。' },
    { title: 'Wiktionary：Mongolian lemmas（蒙古语词条）', url: 'https://en.wiktionary.org/wiki/Category:Mongolian_lemmas', note: '查传统蒙文拼写、读音与词义。' },
    { title: 'Wiktionary：Classical Mongolian lemmas（古典/书面蒙文词条）', url: 'https://en.wiktionary.org/wiki/Category:Classical_Mongolian_lemmas', note: '核对传统蒙文书面拼写与词根。' }
  ]
});
