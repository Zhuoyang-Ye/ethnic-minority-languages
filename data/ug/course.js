/* 维吾尔语课程总览：阶段划分、路线图、学习资源。
   具体课时在 stage0.js（文字与发音）、stage1.js（入门会话 A1）、stage2.js（绿洲生活与文化 A2/B1）里。 */
LX.addCourse({
  id: 'ug',
  name: '维吾尔语',
  endonym: 'ئۇيغۇرچە',
  variety: '标准语 · 现行维吾尔文 + 拉丁维文',
  romanName: '拉丁维文 (ULY)',
  summary: '维吾尔语属突厥语族葛逻禄语支，是典型的黏着语，语序为「主—宾—动」（SOV），遵循元音和谐与辅音同化规律。现行维吾尔文从右往左书写，共有 32 个字母（8 个元音、24 个辅音）。与阿拉伯文不同，维吾尔文把所有元音都完整写出来，拼写与读音完全一一对应。',
  stages: [
    {
      id: 'u0', title: '文字与发音', level: '入门前',
      desc: '掌握 8 个元音字母（前元音、后元音、圆唇与展唇）、词首静音隔音符 ئ（hemze）以及 24 个辅音字母。'
    },
    {
      id: 'u1', title: '入门会话', level: 'A1',
      desc: '日常问候与道谢、询问姓名与籍贯、介绍家庭成员与职业、数字 1–10 与巴扎买瓜果。'
    },
    {
      id: 'u2', title: '绿洲生活与文化', level: 'A2–B1',
      desc: '待客茶点与抓饭美食、问路与丝路绿洲城市、维吾尔谚语（ماقال-تەمسىل）与木卡姆文化。'
    }
  ],
  resources: [
    { title: 'Wikipedia：Uyghur language（维吾尔语概况）', url: 'https://en.wikipedia.org/wiki/Uyghur_language', note: '语音、元音和谐、格助词与动词变位系统介绍。' },
    { title: 'Wikipedia：Uyghur alphabets（维吾尔文字母对照）', url: 'https://en.wikipedia.org/wiki/Uyghur_alphabets', note: '老维文、拉丁维文（ULY）与西里尔维文 32 字母对照表。' },
    { title: 'Wiktionary：Uyghur lemmas（维吾尔语词条）', url: 'https://en.wiktionary.org/wiki/Category:Uyghur_lemmas', note: '查单词拼写、音标、词源与变格形式。' }
  ]
});
