/* 藏语课程总览：阶段划分、路线图、学习资源。
   具体课时在 stage0.js（文字与发音）、stage1.js（入门会话 A1）、stage2.js（日常生活 A2）、stage3.js（语言与文化 B1）里。 */
LX.addCourse({
  id: 'bo',
  name: '藏语',
  endonym: 'བོད་སྐད།',
  variety: '卫藏方言 · 拉萨话（口语） + 书面藏文',
  romanName: '注音 / 威利转写',
  summary: '口语以拉萨话为标准，同时学习藏文的书面拼写。藏文是拼音文字：30 个辅音字母、4 个元音符号，再加上前加字、上加字、下加字和后加字。拉萨话的读音和拼写差别很大，所以每个词都同时给出藏文、威利转写（反映拼写）和简易注音（反映读音）。',
  stages: [
    {
      id: 'b0', title: '文字与发音', level: '入门前',
      desc: '30 个辅音字母、高低声调、4 个元音符号、后加字带来的元音变化，以及前加字、上加字、下加字组成的叠字。'
    },
    {
      id: 'b1', title: '入门会话', level: 'A1',
      desc: '问候、道谢与道别、姓名与家乡、身份、数字与年龄、家人、喝茶做客、买东西。'
    },
    {
      id: 'b2', title: '日常生活', level: 'A2',
      desc: '时间与日期、问路与方向、日常作息、天气与季节、身体与看病、过去时、洛萨与雪顿节、打电话与约时间。'
    },
    {
      id: 'b3', title: '语言与文化', level: 'B1',
      desc: '系统学习敬语、证据性（亲见/推断/听说）、复句与连词，读谚语、短文、仓央嘉措诗歌与民歌，了解书面语和口语的差别。'
    }
  ],
  resources: [
    { title: 'THL Tibetan to English Translation Tool / 词典（Mandala）', url: 'https://mandala.library.virginia.edu/', note: '弗吉尼亚大学 Tibetan & Himalayan Library，可查词、看拼写和读音说明。' },
    { title: 'Wiktionary：藏语词条', url: 'https://en.wiktionary.org/wiki/Category:Tibetan_lemmas', note: '查拼写、词义，部分词条有读音。' },
    { title: 'Tournadre & Dorje：Manual of Standard Tibetan（Snow Lion）', url: 'https://shambhala.com/manual-of-standard-tibetan.html', note: '最系统的拉萨话教材，41 课，附录音，适合配合本站使用。' },
    { title: 'Jonathan Samuels：Colloquial Tibetan（Routledge）', url: 'https://www.routledge.com/Colloquial-Tibetan-The-Complete-Course-for-Beginners/Samuels/p/book/9781138950191', note: '面向初学者的卫藏口语教材，录音可在出版社网站免费下载。' },
    { title: 'Wikipedia：Lhasa Tibetan', url: 'https://en.wikipedia.org/wiki/Lhasa_Tibetan', note: '拉萨话的声调、元音变化概况。' }
  ]
});
