/* 傈僳语课程总览：阶段划分、路线图、学习资源。
   具体课时在 stage0.js（文字与发音）、stage1.js（入门会话 A1）、stage2.js（峡谷生活与文化 A2/B1）里。 */
LX.addCourse({
  id: 'lisu',
  name: '傈僳语',
  endonym: 'ꓡꓲ-ꓢꓴ',
  variety: '怒江方言 · 老傈僳文（富能仁字母）',
  romanName: '拉丁转写',
  summary: '傈僳语属于汉藏语系藏缅语族彝语支，与凉山彝语是亲属语言，语序同样是「主—宾—动」（SOV）。老傈僳文（Fraser Script，Unicode U+A4D0–U+A4FF）由正写和旋转的大写拉丁字母组成，包含 30 个辅音、10 个元音和 6 个标点式声调符号，拼写与读音严格一一对应。',
  stages: [
    {
      id: 'l0', title: '文字与发音', level: '入门前',
      desc: '认识 30 个辅音字母（对比正写字母与倒转字母的送气/不送气规律）、10 个元音字母和 6 个声调符号。'
    },
    {
      id: 'l1', title: '入门会话', level: 'A1',
      desc: '怒江峡谷日常问候、询问姓名与家乡、介绍家庭成员、数字 1–10 与集市买卖。'
    },
    {
      id: 'l2', title: '峡谷生活与文化', level: 'A2–B1',
      desc: '怒江问路与过江、火塘待客与同心酒、阔时节（傈僳新年）与多声部民歌传统。'
    }
  ],
  resources: [
    { title: 'Wikipedia：Lisu language（傈僳语概况）', url: 'https://en.wikipedia.org/wiki/Lisu_language', note: '傈僳语语音、语法与方言分布介绍。' },
    { title: 'Wikipedia：Fraser script（老傈僳文字母表）', url: 'https://en.wikipedia.org/wiki/Fraser_script', note: '30 个辅音、10 个元音与 6 个声调符号的音值对照。' },
    { title: 'Unicode：Lisu Block (U+A4D0–U+A4FF)', url: 'https://en.wikipedia.org/wiki/Lisu_(Unicode_block)', note: '老傈僳文 Unicode 编码区段说明。' },
    { title: 'Wiktionary：Lisu language 词条分类', url: 'https://en.wiktionary.org/wiki/Category:Lisu_language', note: '可查老傈僳文拼写、国际音标与词义。' }
  ]
});
