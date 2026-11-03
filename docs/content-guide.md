# 内容编写指南

怎么修改课文、增加新课、接入录音。课文都是 `data/` 里的普通 JavaScript 文件，不需要构建工具，改完刷新浏览器就能看到。每次改完用浏览器打开 `tests.html`，标题显示 `PASS` 才算改好。

## 1. 文件和加载顺序

`index.html` 按下面的顺序加载脚本，顺序不能乱：

```
js/core.js                 先定义 LX.addCourse、LX.addLessons 等函数
js/yi-syllables.js         彝文 → 拼音对照表
data/yi/course.js          彝语课程总览（必须在本语言的课文之前）
data/yi/phonology.js       彝语声韵调资料（讲解里的表格用）
data/yi/stage0.js          彝语课文……
data/yi/stage1.js
data/bo/course.js          藏语课程总览
data/bo/alphabet.js        藏文字母表资料
data/bo/stage0.js          藏语课文……
data/bo/stage1.js
js/exercises.js            练习题生成
js/app.js                  页面
```

新建课文文件（例如 `data/yi/stage2.js`）时，要在 `index.html` **和** `tests.html` 里都加一行 `<script src="data/yi/stage2.js"></script>`，放在同一语言的其他 data 文件后面、`js/exercises.js` 前面。

## 2. 课程总览：`course.js`

```js
LX.addCourse({
  id: 'yi',                      // 课程 id，网址和复习记录都用它
  name: '彝语',
  endonym: 'ꆈꌠꉙ',              // 用这门语言自己的文字写的名称
  variety: '北部方言 · 凉山彝语（诺苏话） · 规范彝文',
  romanName: '彝文拼音',          // 拉丁字母写法的名称（词表的列标题）
  summary: '……',
  stages: [
    { id: 'y0', title: '文字与发音', level: '入门前', desc: '……' },
    { id: 'y2', title: '生活与农事', level: 'A2', desc: '……',
      planned: ['去干活 · ꑘꁨ', '……'] }   // 规划中的课，只在课程地图上显示标题
  ],
  resources: [ { title: '……', url: 'https://……', note: '……' } ]
});
```

一课写好以后，把它的标题从 `planned` 里删掉。

## 3. 一课：`stageN.js`

```js
LX.addLessons('bo', 'b1', [      // 课程 id，阶段 id
  {
    id: 'b1-1',                  // 整门课里不能重复，建议「阶段-序号」
    kind: 'script',              // 可选：文字课写 'script'，没有会话；会话课不写
    title: '扎西德勒：问候',
    goal: '会用「扎西德勒」打招呼……',   // 课程地图和开始页显示
    minutes: 12,
    words: [ … ],                // 新词，见第 4 节
    dialogue: { … },             // 会话，见第 5 节（文字课没有）
    tips: [ … ],                 // 讲解，见第 6 节
    exercises: [ … ],            // 「想一想」选择题，见第 7 节
    source: { title: 'BabelStone 第 1 课 An Encounter on the Road', url: 'https://www.babelstone.co.uk/Yi/lesson_01.html' }
  }
]);
```

建议每课 8–12 个新词、一段 6–12 句的会话、3 条讲解（开头、中间、结尾各一条）、1–3 道「想一想」。

## 4. 新词 `words`

彝语只写文字和意思，拼音由程序根据 Unicode 自动生成：

```js
{ s: 'ꆏ', m: '你' }
{ s: 'ꋬꂺꀕ', m: '平安吗' }
{ id: 'ꀀ-居住', s: 'ꀀ', m: '居住' }    // 同形不同义的词要加 id，见下
{ s: '……', m: '……', r: '……' }         // 少数情况下想覆盖自动拼音时用 r
```

藏语要同时写威利转写 `w`（反映拼写）和简易注音 `p`（反映拉萨话读音）：

```js
{ s: 'བཀྲ་ཤིས་བདེ་ལེགས', w: 'bkra shis bde legs', p: 'tra-shi de-lek', m: '扎西德勒（你好；吉祥如意）' }
```

规则：

- `s` 不要带句末标点。藏文词末尾不要带音节点 `་`。
- **复习进度按「课程 + id」记，没有 id 就用 `s`**。同一个词在几课里重复出现时，`m` 必须一字不差，否则测试会报错。
- 同一个写法表示不同的词（例如彝文 ꀀ 既是「居住」又是别的意思），要给其中一个加 `id`，复习时才不会混在一起。
- 藏文字母课的条目由 `data/bo/stage0.js` 里的 `letters()`、`vowels()` 根据 `data/bo/alphabet.js` 自动生成，id 自动设为 `字母:ཀ` 这样的形式。字母 ང 和代词 ང「我」因此分开记复习进度。

## 5. 会话 `dialogue`

```js
dialogue: {
  scene: '早上，小林在拉萨的街上遇见朋友索朗。',
  people: { '索朗': 'བསོད་ནམས།', '小林': '' },   // 说话人：中文名 → 本族文字写法（没有就留空）
  lines: [
    { who: '索朗',
      s: 'ཁྱེད་རང་ སྐུ་གཟུགས་ བདེ་པོ་ ཡིན་པས།',
      w: 'khyed rang sku gzugs bde po yin pas/',
      p: 'khye-rang ku-suk de-po yin-pe?',
      g: '您 身体（敬） 安好 是吗',
      m: '您身体好吗？' }
  ]
}
```

- **`s` 用空格分词**，一个空格隔开的部分就是一张词卡，也是「排句子」里的一块。标点跟在前一个词后面。显示时程序按书写习惯把词拼回去：彝文不留空格，藏文只在 ། 后面留空格。
- **`g` 逐词注释**：用空格隔开，个数必须和 `s` 的词数一样。一个词的注释里不能有空格，补充说明用全角括号，例如 `身体（敬）`。
- **藏语 `w`**：整句的威利转写。音节点 `་` 写成空格，句末符 `།` 写成 `/`。测试会用程序把 `s` 自动转写一遍，两者必须一致。
- **藏语 `p`**：整句注音，**每个词一段**，段数必须和 `s` 的词数一样。一个词里的音节用连字符连起来，句末可以带 `. ? !`。
- **`adapted: true`**：句子不是原文，而是按原句替换词语改写的。课文里会标「改编」。
- 彝语会话如果取自 BabelStone 课文，请保持原句。可以删句子，但改动句子时一定要标 `adapted`。

## 6. 讲解 `tips`

```js
{ at: 'mid', kind: 'grammar', title: '「是」放在句末；疑问加 པས',
  html: '<p>……</p><p class="ex"><span class="bo">ང་བདེ་པོ་ཡིན།</span><br>我 安好 是 → 我很好</p>' }
```

- `at`：`start`（开头）、`mid`（新词之后）、`end`（结尾）。
- `kind`：`pron` 发音、`grammar` 语法、`culture` 文化。
- `html` 可以是字符串，也可以是返回字符串的函数。表格类讲解用函数，调用 `LX.tpl` 里的模板：

| 模板 | 内容 |
| --- | --- |
| `LX.tpl.yiToneTable()` | 彝语四个声调 |
| `LX.tpl.yiVowelTable()` | 彝语十个韵母 |
| `LX.tpl.yiInitialTable(['b', 'p', …])` | 指定的彝语声母 |
| `LX.tpl.boConsonantTable(from, to)` | 藏文辅音字母（按序号范围） |
| `LX.tpl.boVowelTable()` | 藏文元音符号 |
| `LX.tpl.boSuffixTable()` | 后加字 |
| `LX.tpl.boStackTable()` | 上加字、下加字 |

- 讲解里的彝文、藏文请包在 `<span class="yi">…</span>` 或 `<span class="bo">…</span>` 里，例句用 `<p class="ex">`。标签要成对，测试会检查。

## 7. 「想一想」`exercises`

```js
{ type: 'choice', q: '句末的 ཡིན་པས 表示什么？', options: ['疑问「……吗？」', '过去', '否定'], answer: 0 }
{ type: 'choice', q: '礼貌地回答「是的」：', options: ['ལགས་ཡིན།', 'ཡིན་པས།', 'བཀྲ་ཤིས།'], answer: 0, script: true }
```

`answer` 是正确选项的序号（从 0 开始），显示时选项顺序会打乱。选项是彝文或藏文时加 `script: true`，用大字显示。

## 8. 拼音和注音

### 彝文拼音（自动）

`js/yi-syllables.js` 由 `tools/gen_yi_syllables.py` 生成。Unicode 给每个彝文字起的名字就是它的拼音（例如 U+A188 YI SYLLABLE NUO = ꆈ nuo），所以拼音和字一定对得上。

- 声调写在音节末尾：`t` 高平 55、`x` 次高 34、不标 中平 33、`p` 低降 21。
- 重复号 ꀕ 写作 `w`，表示重复前一个音节（例如 ꃪꀕ vatw = vat vat）。

### 藏语威利转写 `w`

用标准的 Extended Wylie（EWTS）写法，例如：

- འ 写作 `'`：`'dug`；
- 前加字 ག 加基字 ཡ 写作 `g.yag`，以区别于 གྱ `gya`；
- 数字直接写阿拉伯数字。

`LX.boWylie(藏文)` 可以把藏文转成威利，在浏览器控制台里就能用，写新词时可以先用它核对。

### 藏语简易注音 `p`

注音反映拉萨话的实际读音，规则尽量简单，不标声调（高低调可以从字母推出来）：

| 规则 | 例子 |
| --- | --- |
| 不送气的清音写 k c t p ts tr | ཀ ka · ཅ ca · པེ་ཅིན pe-cin · བཀྲ་ཤིས tra-shi |
| 送气音写 kh ch th ph tsh thr | ཁྱེད་རང khye-rang · ཐུགས་རྗེ་ཆེ thuk-je-che · མཚན tshen |
| 单独的 ག ཇ ད བ ཛ 读成低调送气音，也写 kh ch th ph tsh | ག་རེ kha-re · ཇ cha · བུ phu |
| 带前加字或上加字的浊音字母写 g j d b dz dr | རྒྱ་མི gya-mi · བདེ་པོ de-po · འདུག duk · འགྲོ dro |
| ཞ ཤ 都写 sh，ཟ ས 都写 s | ཞིམ་པོ shim-po · ཟེར ser |
| 后加字 ད ན ལ ས 让元音变化：a→e，o→ö，u→ü；ད ས 本身不发音 | ཡོད yö · བོད་པ phö-pa · བདུན dün · ག་ནས kha-ne |
| 后加字 ག 读 k，བ 读 p | ལེགས lek · ཕེབས phep |
| བ 在第二个音节常读 w | ཀ་བ ka-wa |
| 词中的 ལགས 读 la | ཕ་ལགས pha-la |

别的教材有不同写法，例如把单独的 ག 写成 g。这里只要全站统一就好。

## 9. 接入录音

1. 把录音文件放进 `audio/<课程>/`，例如 `audio/bo/tashi-delek.mp3`。用 mp3 或 m4a，单个文件尽量小于 100 KB。
2. 新建 `data/<课程>/audio.js`，登记「文字 → 文件」：

   ```js
   LX.addAudio('bo', {
     'བཀྲ་ཤིས་བདེ་ལེགས': 'audio/bo/tashi-delek.mp3',            // 词
     'ཁྱེད་རང་ སྐུ་གཟུགས་ བདེ་པོ་ ཡིན་པས།': 'audio/bo/b1-1-3.mp3' // 整句：直接复制会话里的 s
   });
   ```

   键里的空格和句末标点会被忽略，写不写都行。

3. 在 `index.html` 里这门语言的 data 文件后面加 `<script src="data/bo/audio.js"></script>`。

登记过的词和句子会在词卡、会话、课文页和字母表上显示「▶ 录音」按钮。录音请用自己录的，或者有授权的材料。

## 10. 改完以后检查

用浏览器打开 `tests.html`，它会检查以下几项：

- 彝文字符和拼音是否合法；
- 藏文威利转写是否和自动转写一致，注音、逐词注释的段数是否对得上；
- 同一个词在不同课里的释义是否一致；
- 讲解的 HTML 标签是否成对；
- 每一课随机生成 5 次练习，检查每道题是否有且只有一个正确答案；
- 模拟把每一课做完、把所有词复习一遍；
- 每个页面是否都能打开。

页面标题显示 `PASS 数字` 表示全部通过，`FAIL 数字` 表示有几项失败，失败的具体原因列在页面上。

## 11. 写一课的清单

- [ ] `id` 不重复，`title`、`goal`、`minutes` 都写了
- [ ] 新词 8–12 个，会话里出现的生词都在 `words` 里
- [ ] 会话每句的 `s`、`g`（藏语还有 `p`）词数一致
- [ ] 改写过的句子标了 `adapted: true`
- [ ] 讲解开头、中间、结尾各一条，彝文和藏文都包在 `span` 里
- [ ] `source` 写明出处
- [ ] 从 `planned` 里删掉这一课的标题
- [ ] `tests.html` 显示 PASS
- [ ] 在浏览器里把这一课完整做一遍
