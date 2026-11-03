# 来源说明

本站内容由 AI 根据下列资料整理和编写，还没有经过母语者审核。每课的具体出处写在课文的 `source` 字段里，课程开始页和课文页都会显示。

## 彝语

### 彝语会话和生词

- **《凉山彝语会话六百句》**，李民、马明著，四川民族出版社，1981 年。
- **BabelStone：600 Phrases in the Liangshan Yi Dialect**：<https://www.babelstone.co.uk/Yi/contents.html>，上面这本教材的英译和注释。本站的会话课取自其中几课，对应关系如下：

| 本站 | BabelStone | 说明 |
| --- | --- | --- |
| y1-1 路上相遇 | [第 1 课 An Encounter on the Road](https://www.babelstone.co.uk/Yi/lesson_01.html) | 原句 |
| y1-2 你是哪里人？ | [第 5 课 A Conversation](https://www.babelstone.co.uk/Yi/lesson_05.html) | 原句加 2 句改编（课文里标「改编」） |
| y1-3 我的家人、y1-4 数字与年龄 | [第 3 课 Family Circumstances (Part 1)](https://www.babelstone.co.uk/Yi/lesson_03.html) | 原句，有删节 |
| y1-5 家里来客人 | [第 8 课 A Guest Arrives](https://www.babelstone.co.uk/Yi/lesson_08.html) | 原句，有删节 |
| y1-6 起床洗漱 | [第 6 课 Getting Up and Washing](https://www.babelstone.co.uk/Yi/lesson_06.html) | 原句，有删节 |
| y1-7 该睡觉了 | [第 7 课 Going to Bed](https://www.babelstone.co.uk/Yi/lesson_07.html) | 原句，有删节 |

除标了「改编」的 2 句外，会话里的每一句都逐字核对过，确认出现在 BabelStone 对应课文中。中文翻译和逐词注释是本站根据英译和生词表写的。

### 彝文和语音

- **BabelStone：The Yi Phonetic Alphabet**：<https://www.babelstone.co.uk/Yi/pinyin.html>。提供 43 个声母、10 个韵母、4 个声调的音值说明，「文字与发音」各课的例字也取自这里，例如 ꋊ cyt「赎回」、ꋋ cyx「这」、ꋌ cy「他」、ꋍ cyp「一」。
- **Unicode 彝文音节区（U+A000–U+A48F）**：每个字的 Unicode 名称就是它的彝文拼音。`js/yi-syllables.js` 由 Python 自带的 `unicodedata` 生成，见 `tools/gen_yi_syllables.py`。
- **Wikipedia：Nuosu language**：<https://en.wikipedia.org/wiki/Nuosu_language>，语音、声调和文字概况。
- **Wiktionary：Nuosu lemmas**：<https://en.wiktionary.org/wiki/Category:Nuosu_lemmas>，用来核对个别词的写法和意思，例如 ꑳ「房子」。

### 彝文字体

- **Noto Sans Yi**（Google / Noto 项目），SIL Open Font License 1.1。本站只保留了彝文部分（`assets/fonts/NotoSansYi-Yi.woff2`），许可证全文见 `assets/fonts/OFL.txt`。

### 推荐的外部资源

- Zwordy 彝文字表（可以听读音）：<https://www.zwordy.com/yi_script_table>
- 彝汉英词汇表（Internet Archive 存档）：<https://web.archive.org/web/20140918052528/http://www.yihanyingcihui.net/>

## 藏语

### 藏语会话和生词

藏语会话是本站编写的常用句，不取自某一本教材。拼写、词义和用法对照过下列词典和教材：

- **THL / Mandala**（弗吉尼亚大学 Tibetan & Himalayan Library）：<https://mandala.library.virginia.edu/>
- **Wiktionary：Tibetan lemmas**：<https://en.wiktionary.org/wiki/Category:Tibetan_lemmas>
- **Nicolas Tournadre & Sangda Dorje, *Manual of Standard Tibetan: Language and Civilization***（Snow Lion）：<https://shambhala.com/manual-of-standard-tibetan.html>
- **Jonathan Samuels, *Colloquial Tibetan: The Complete Course for Beginners***（Routledge）：<https://www.routledge.com/Colloquial-Tibetan-The-Complete-Course-for-Beginners/Samuels/p/book/9781138950191>
- **Wikipedia：Lhasa Tibetan**：<https://en.wikipedia.org/wiki/Lhasa_Tibetan>，语音和声调概况。

「买东西」一课核对讲价用语时参考过这些网页。网上流传的「打折」说法 གོང་ཆག 在词典里查不到可靠的用例，所以没有收进课文：

- <https://lhasatour.github.io/travel-blog/how-to-bargain-in-lhasas-markets-like-a-local.htm>
- <https://lhasatour.github.io/travel-blog/nepal-to-lhasa-how-to-bargain-like-a-local-1535.htm>
- <https://www.tibettour.com/useful-travel-tips/1015.html>
- <https://www.tibettour.com/useful-travel-tips/1099.html>

### 转写和注音

- **威利转写**用 Extended Wylie（EWTS）。每个词、每句话的威利都和程序自动转写（`LX.boWylie`）核对过。
- **简易注音**是本站为拉萨话定的简化写法，规则见 [content-guide.md](content-guide.md)。各家教材的拼法不一样，本站只求自身统一，没有标声调。

### 藏文字体

藏文用系统自带的字体：macOS / iOS 是 Kailasa，Windows 是 Microsoft Himalaya，安卓和 Linux 一般是 Noto Sans / Serif Tibetan。本站不附带藏文字体。

## 版权提醒

- 彝语会话课的句子来自 1981 年出版的教材，英译和注释来自 BabelStone 网站，版权分别属于原作者和译者。本仓库作为**私人学习用**保存。如果要公开仓库或发布网站，请先取得许可，或者换成自己编写的会话。
- 上面列出的书籍只用来核对，本站没有复制其中的课文或录音。
- 本站自己编写的内容（藏语会话、讲解、练习设计、代码）可以自由修改和使用。
