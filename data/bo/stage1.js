/* 藏语 · 阶段 1：入门会话（A1，拉萨话）
   会话是本站编写的常用句，拼写和用法对照过 docs/sources.md 里列出的词典和教材。
   每句话用空格分词，s / p / g 三个字段的词数必须一样：
   s 藏文，w 威利转写（整句），p 注音（每个词一段，用连字符连接音节），g 逐词注释，m 意译。 */
LX.addLessons('bo', 'b1', [
  {
    id: 'b1-1',
    title: '扎西德勒：问候',
    goal: '会用「扎西德勒」打招呼，会问「您身体好吗？」并回答。',
    minutes: 12,
    words: [
      { s: 'བཀྲ་ཤིས་བདེ་ལེགས', w: 'bkra shis bde legs', p: 'tra-shi de-lek', m: '扎西德勒（你好；吉祥如意）' },
      { s: 'ཁྱེད་རང', w: 'khyed rang', p: 'khye-rang', m: '您、你' },
      { s: 'སྐུ་གཟུགས', w: 'sku gzugs', p: 'ku-suk', m: '身体（敬语）' },
      { s: 'བདེ་པོ', w: 'bde po', p: 'de-po', m: '安好、舒服' },
      { s: 'ཡིན', w: 'yin', p: 'yin', m: '是（说自己）' },
      { s: 'ཡིན་པས', w: 'yin pas', p: 'yin-pe', m: '是……吗？' },
      { s: 'ལགས་ཡིན', w: 'lags yin', p: 'lak-yin', m: '是的（礼貌）' },
      { s: 'ང', w: 'nga', p: 'nga', m: '我' },
      { s: 'ཡང', w: 'yang', p: 'yang', m: '也；又' }
    ],
    dialogue: {
      scene: '早上，小林在拉萨的街上遇见朋友索朗。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '索朗', s: 'བཀྲ་ཤིས་ བདེ་ལེགས།', w: 'bkra shis bde legs/', p: 'tra-shi de-lek!', g: '吉祥 安康', m: '扎西德勒！' },
        { who: '小林', s: 'བཀྲ་ཤིས་ བདེ་ལེགས།', w: 'bkra shis bde legs/', p: 'tra-shi de-lek!', g: '吉祥 安康', m: '扎西德勒！' },
        { who: '索朗', s: 'ཁྱེད་རང་ སྐུ་གཟུགས་ བདེ་པོ་ ཡིན་པས།', w: 'khyed rang sku gzugs bde po yin pas/', p: 'khye-rang ku-suk de-po yin-pe?', g: '您 身体（敬） 安好 是吗', m: '您身体好吗？' },
        { who: '小林', s: 'ལགས་ཡིན། ང་ བདེ་པོ་ ཡིན།', w: 'lags yin/ nga bde po yin/', p: 'lak-yin. nga de-po yin.', g: '是的 我 安好 是', m: '是的，我很好。' },
        { who: '小林', s: 'ཁྱེད་རང་ ཡང་ སྐུ་གཟུགས་ བདེ་པོ་ ཡིན་པས།', w: 'khyed rang yang sku gzugs bde po yin pas/', p: 'khye-rang yang ku-suk de-po yin-pe?', g: '您 也 身体（敬） 安好 是吗', m: '您身体也好吗？' },
        { who: '索朗', s: 'ལགས་ཡིན། ང་ ཡང་ བདེ་པོ་ ཡིན།', w: 'lags yin/ nga yang bde po yin/', p: 'lak-yin. nga yang de-po yin.', g: '是的 我 也 安好 是', m: '是的，我也很好。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'བཀྲ་ཤིས་བདེ་ལེགས：扎西德勒',
        html: '<p>字面意思是「吉祥、安康」，是最通用的问候语：见面、过节、祝贺都可以说。回答也说同一句。</p>' +
          '<p>注意读音：<span class="bo">བཀྲ</span> 拼写是 bkra，读 tra；<span class="bo">ལེགས</span> 拼写是 legs，读 lek。这就是藏文「拼写 ≠ 读音」的典型例子。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '「是」放在句末；疑问加 པས',
        html: '<p>藏语和彝语一样，动词放在最后：</p>' +
          '<p class="ex"><span class="bo">ང་བདེ་པོ་ཡིན།</span><br>我 安好 是 → 我很好</p>' +
          '<p>把 <span class="bo">ཡིན</span> yin 换成 <span class="bo">ཡིན་པས</span> yin-pe 就成了问句：「……吗？」。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '敬语：对别人用敬语词',
        html: '<p>拉萨话有一套<b>敬语</b>：说到对方的身体、名字、动作时，要换成专门的敬语词。</p>' +
          '<ul><li><span class="bo">ཁྱེད་རང</span> khye-rang「您」：对不太熟的人都用它</li>' +
          '<li><span class="bo">སྐུ་གཟུགས</span> ku-suk「贵体」：普通说法是 <span class="bo">གཟུགས་པོ</span> suk-po，只用来说自己</li></ul>' +
          '<p>回答「是的」时，前面加 <span class="bo">ལགས</span> lak 更礼貌：<span class="bo">ལགས་ཡིན</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '句末的 ཡིན་པས 表示什么？', options: ['疑问「……吗？」', '过去', '否定'], answer: 0 },
      { type: 'choice', q: '礼貌地回答「是的」：', options: ['ལགས་ཡིན།', 'ཡིན་པས།', 'བཀྲ་ཤིས།'], answer: 0, script: true }
    ],
    referenceAudio: [
      LX.SLR158.tracks['b1-1-greeting'],
      LX.SLR158.tracks['b1-1-wellbeing']
    ],
    source: { title: '本站编写（常用问候语）' }
  },
  {
    id: 'b1-2',
    title: '谢谢，再见',
    goal: '会道谢，会请人再来，分清两种「再见」。',
    minutes: 12,
    words: [
      { s: 'ཐུགས་རྗེ་ཆེ', w: 'thugs rje che', p: 'thuk-je-che', m: '谢谢' },
      { s: 'ཇ', w: 'ja', p: 'cha', m: '茶' },
      { s: 'ཞིམ་པོ', w: 'zhim po', p: 'shim-po', m: '好吃、好喝' },
      { s: 'འདུག', w: '\'dug', p: 'duk', m: '（亲眼看到的）有、是' },
      { s: 'ཡང་བསྐྱར', w: 'yang bskyar', p: 'yang-kyar', m: '再次' },
      { s: 'ཕེབས', w: 'phebs', p: 'phep', m: '来、去（敬语）' },
      { s: 'རོགས་གནང', w: 'rogs gnang', p: 'rok-nang', m: '请（敬语）' },
      { s: 'འགྲོ', w: '\'gro', p: 'dro', m: '去、走' },
      { s: 'ག་ལེ་ཕེབས', w: 'ga le phebs', p: 'kha-le phep', m: '慢走（对离开的人说）' },
      { s: 'ག་ལེ་བཞུགས', w: 'ga le bzhugs', p: 'kha-le shuk', m: '请留步（对留下的人说）' }
    ],
    dialogue: {
      scene: '小林在索朗家喝完茶，准备回去。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '小林', s: 'ཇ་ ཞིམ་པོ་ འདུག', w: 'ja zhim po \'dug', p: 'cha shim-po duk.', g: '茶 好喝 （亲见）', m: '茶真好喝。' },
        { who: '小林', s: 'ཐུགས་རྗེ་ཆེ།', w: 'thugs rje che/', p: 'thuk-je-che!', g: '谢谢', m: '谢谢！' },
        { who: '索朗', s: 'ཡང་བསྐྱར་ ཕེབས་ རོགས་གནང་།', w: 'yang bskyar phebs rogs gnang/', p: 'yang-kyar phep rok-nang.', g: '再次 来（敬） 请', m: '欢迎再来！' },
        { who: '小林', s: 'ལགས་སོ། ང་ འགྲོ་ གི་ ཡིན།', w: 'lags so/ nga \'gro gi yin/', p: 'lak-so. nga dro gi yin.', g: '好的 我 走 （将要） 是', m: '好的。我要走了。' },
        { who: '索朗', s: 'ག་ལེ་ ཕེབས།', w: 'ga le phebs/', p: 'kha-le phep.', g: '慢慢 走（敬）', m: '慢走！' },
        { who: '小林', s: 'ག་ལེ་ བཞུགས།', w: 'ga le bzhugs/', p: 'kha-le shuk.', g: '慢慢 坐（敬）', m: '请留步！' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: 'ཐུགས་རྗེ་ཆེ：谢谢',
        html: '<p><span class="bo">ཐུགས་རྗེ་ཆེ</span> thuk-je-che 字面是「大慈悲」，是最常用的「谢谢」。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '请对方做事：动词 + རོགས་གནང',
        html: '<p>在动词后面加 <span class="bo">རོགས་གནང</span> rok-nang，就是客气地请对方做某事：</p>' +
          '<p class="ex"><span class="bo">ཡང་བསྐྱར་ཕེབས་རོགས་གནང་།</span><br>再次 来（敬） 请 → 欢迎再来</p>' +
          '<p>请别人做的动作最好也用敬语动词，比如 <span class="bo">ཕེབས</span> phep（来、去）。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '两种「再见」',
        html: '<p><span class="bo">ག་ལེ</span> kha-le 是「慢慢地」。告别时要看谁走谁留：</p>' +
          '<ul><li>对<b>要走的人</b>说 <span class="bo">ག་ལེ་ཕེབས</span>「慢慢走」</li>' +
          '<li>对<b>留下的人</b>说 <span class="bo">ག་ལེ་བཞུགས</span>「慢慢坐」</li></ul>'
      },
      {
        at: 'end', kind: 'grammar', title: 'འདུག：亲眼看到、亲口尝到',
        html: '<p><span class="bo">ཇ་ཞིམ་པོ་འདུག</span>「茶很好喝」用 <span class="bo">འདུག</span> duk，表示这是说话人<b>亲身感受到</b>的。这是藏语「证据性」的一部分，以后会系统学。</p>' +
          '<p>注意：以 <span class="bo">ག</span> 结尾的音节后面通常不写垂符 <span class="bo">།</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '你要离开朋友家，对留在家里的主人说：', options: ['ག་ལེ་བཞུགས།', 'ག་ལེ་ཕེབས།', 'ཐུགས་རྗེ་ཆེ།'], answer: 0, script: true },
      { type: 'choice', q: 'རོགས་གནང 加在动词后面表示：', options: ['请（客气地请对方做）', '已经做了', '不要做'], answer: 0 }
    ],
    source: { title: '本站编写（常用礼貌用语）' }
  },
  {
    id: 'b1-3',
    title: '您叫什么名字？',
    goal: '会问名字、说自己的名字，会问对方是哪里人。',
    minutes: 15,
    words: [
      { s: 'མིང', w: 'ming', p: 'ming', m: '名字' },
      { s: 'མཚན', w: 'mtshan', p: 'tshen', m: '名字（敬语）' },
      { s: 'ག་རེ', w: 'ga re', p: 'kha-re', m: '什么' },
      { s: 'ཟེར', w: 'zer', p: 'ser', m: '叫、说' },
      { s: 'ངའི', w: 'nga\'i', p: 'nge', m: '我的' },
      { s: 'ག་ནས', w: 'ga nas', p: 'kha-ne', m: '从哪里' },
      { s: 'པེ་ཅིན', w: 'pe cin', p: 'pe-cin', m: '北京' },
      { s: 'རྒྱ་མི', w: 'rgya mi', p: 'gya-mi', m: '汉族人' },
      { s: 'བོད་པ', w: 'bod pa', p: 'phö-pa', m: '藏族人' },
      { s: 'ལྷ་ས', w: 'lha sa', p: 'lha-sa', m: '拉萨' }
    ],
    dialogue: {
      scene: '小林和索朗第一次见面。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '小林', s: 'ཁྱེད་རང་གི་ མཚན་ལ་ ག་རེ་ ཞུ་གི་ཡོད།', w: 'khyed rang gi mtshan la ga re zhu gi yod/', p: 'khye-rang-gi tshen-la kha-re shu-gi-yö?', g: '您的 尊名 什么 称呼', m: '您叫什么名字？' },
        { who: '索朗', s: 'ངའི་ མིང་ལ་ བསོད་ནམས་ ཟེར་གྱི་ཡོད།', w: 'nga\'i ming la bsod nams zer gyi yod/', p: 'nge ming-la sö-nam ser-gi-yö.', g: '我的 名字 索朗 叫', m: '我叫索朗。' },
        { who: '索朗', s: 'ཁྱེད་རང་གི་ མཚན་ལ་ ག་རེ་ ཞུ་གི་ཡོད།', w: 'khyed rang gi mtshan la ga re zhu gi yod/', p: 'khye-rang-gi tshen-la kha-re shu-gi-yö?', g: '您的 尊名 什么 称呼', m: '您叫什么名字？' },
        { who: '小林', s: 'ངའི་ མིང་ལ་ ལིན་ ཟེར་གྱི་ཡོད།', w: 'nga\'i ming la lin zer gyi yod/', p: 'nge ming-la lin ser-gi-yö.', g: '我的 名字 林 叫', m: '我叫林。' },
        { who: '索朗', s: 'ཁྱེད་རང་ ག་ནས་ ཡིན།', w: 'khyed rang ga nas yin/', p: 'khye-rang kha-ne yin?', g: '您 从哪里 是', m: '您是哪里人？' },
        { who: '小林', s: 'ང་ པེ་ཅིན་ནས་ ཡིན། ང་ རྒྱ་མི་ ཡིན།', w: 'nga pe cin nas yin/ nga rgya mi yin/', p: 'nga pe-cin-ne yin. nga gya-mi yin.', g: '我 北京来的 是 我 汉族人 是', m: '我是北京人，是汉族。' },
        { who: '小林', s: 'ཁྱེད་རང་ ལྷ་ས་ནས་ ཡིན་པས།', w: 'khyed rang lha sa nas yin pas/', p: 'khye-rang lha-sa-ne yin-pe?', g: '您 拉萨来的 是吗', m: '您是拉萨人吗？' },
        { who: '索朗', s: 'ལགས་ཡིན། ང་ བོད་པ་ ཡིན། ལྷ་ས་ནས་ ཡིན།', w: 'lags yin/ nga bod pa yin/ lha sa nas yin/', p: 'lak-yin. nga phö-pa yin. lha-sa-ne yin.', g: '是的 我 藏族人 是 拉萨来的 是', m: '是的，我是藏族，拉萨人。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: 'ནས「从」和 ལ',
        html: '<p><span class="bo">ནས</span> ne 是「从」，放在地名<b>后面</b>：<span class="bo">ལྷ་ས་ནས་ཡིན</span>「是从拉萨来的」。</p>' +
          '<p><span class="bo">ལ</span> la 用法很多，这一课的 <span class="bo">མིང་ལ</span>「名字（叫）」里它标出话题。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '问别人用 མཚན，说自己用 མིང',
        html: '<p>问对方的名字用敬语 <span class="bo">མཚན</span> tshen，动词用谦语 <span class="bo">ཞུ</span> shu（称呼、禀告）；说自己的名字用普通词 <span class="bo">མིང</span> ming 和 <span class="bo">ཟེར</span> ser（叫）。</p>' +
          '<p>称呼别人时，在名字后面加 <span class="bo">ལགས</span> la 表示尊敬：<span class="bo">བསོད་ནམས་ལགས</span> 索朗啦。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '「我的」「您的」',
        html: '<p>属格（「的」）以元音结尾的词加 <span class="bo">འི</span>：<span class="bo">ང</span> nga → <span class="bo">ངའི</span> nge「我的」。</p>' +
          '<p>以辅音结尾的词加 <span class="bo">གི / ཀྱི / གྱི</span>：<span class="bo">ཁྱེད་རང་གི</span> khye-rang-gi「您的」。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '问别人的名字，用哪个词？', options: ['མཚན（敬语）', 'མིང（普通）'], answer: 0, script: true },
      { type: 'choice', q: 'ནས 是什么意思？', options: ['从', '和', '的'], answer: 0 },
      { type: 'choice', q: 'ངའི 是什么意思？', options: ['我的', '我们', '您的'], answer: 0 }
    ],
    source: { title: '本站编写（自我介绍常用句）' }
  },
  {
    id: 'b1-4',
    title: '你是学生吗？',
    goal: '分清两个「是」：说自己用 ཡིན，说别人用 རེད；会问「她是谁？」。',
    minutes: 15,
    words: [
      { s: 'སློབ་ཕྲུག', w: 'slob phrug', p: 'lop-thruk', m: '学生' },
      { s: 'དགེ་རྒན', w: 'dge rgan', p: 'ge-gen', m: '老师' },
      { s: 'རེད', w: 'red', p: 're', m: '是（说别人）' },
      { s: 'རེད་པས', w: 'red pas', p: 're-pe', m: '是……吗？（问别人）' },
      { s: 'ལགས་མ་རེད', w: 'lags ma red', p: 'lak-ma-re', m: '不是（礼貌）' },
      { s: 'ཁོ', w: 'kho', p: 'kho', m: '他' },
      { s: 'མོ', w: 'mo', p: 'mo', m: '她' },
      { s: 'སུ', w: 'su', p: 'su', m: '谁' },
      { s: 'ནུ་མོ', w: 'nu mo', p: 'nu-mo', m: '妹妹' }
    ],
    dialogue: {
      scene: '在学校门口，索朗遇见小林。一位男老师和一个女孩正朝他们走来。',
      people: { '索朗': 'བསོད་ནམས།', '小林': '' },
      lines: [
        { who: '索朗', s: 'ཁྱེད་རང་ སློབ་ཕྲུག་ ཡིན་པས།', w: 'khyed rang slob phrug yin pas/', p: 'khye-rang lop-thruk yin-pe?', g: '您 学生 是吗', m: '你是学生吗？' },
        { who: '小林', s: 'ལགས་ཡིན། ང་ སློབ་ཕྲུག་ ཡིན།', w: 'lags yin/ nga slob phrug yin/', p: 'lak-yin. nga lop-thruk yin.', g: '是的 我 学生 是', m: '是的，我是学生。' },
        { who: '索朗', s: 'ཁོ་ ཡང་ སློབ་ཕྲུག་ རེད་པས།', w: 'kho yang slob phrug red pas/', p: 'kho yang lop-thruk re-pe?', g: '他 也 学生 是吗', m: '他也是学生吗？' },
        { who: '小林', s: 'ལགས་མ་རེད། ཁོ་ དགེ་རྒན་ རེད།', w: 'lags ma red/ kho dge rgan red/', p: 'lak-ma-re. kho ge-gen re.', g: '不是 他 老师 是', m: '不是，他是老师。' },
        { who: '索朗', s: 'མོ་ སུ་ རེད།', w: 'mo su red/', p: 'mo su re?', g: '她 谁 是', m: '她是谁？' },
        { who: '小林', s: 'མོ་ ངའི་ ནུ་མོ་ རེད།', w: 'mo nga\'i nu mo red/', p: 'mo nge nu-mo re.', g: '她 我的 妹妹 是', m: '她是我妹妹。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '两个「是」：ཡིན 和 རེད',
        html: '<table class="mini"><tr><th></th><th>是</th><th>不是</th></tr>' +
          '<tr><th>说自己（我、我们）</th><td><span class="bo">ཡིན</span> yin</td><td><span class="bo">མིན</span> min</td></tr>' +
          '<tr><th>说别人（他、她、这个）</th><td><span class="bo">རེད</span> re</td><td><span class="bo">མ་རེད</span> ma-re</td></tr></table>' +
          '<p>问对方「你是……吗？」时也用 <span class="bo">ཡིན་པས</span>，因为对方回答时说的是自己。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '有疑问词就不加 པས',
        html: '<p>句子里有 <span class="bo">སུ</span>（谁）、<span class="bo">ག་རེ</span>（什么）、<span class="bo">ག་ནས</span>（从哪里）这类疑问词时，句末直接用 <span class="bo">རེད</span> 或 <span class="bo">ཡིན</span>，不再加 <span class="bo">པས</span>：</p>' +
          '<p class="ex"><span class="bo">མོ་སུ་རེད།</span> 她是谁？</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '回答是非问句',
        html: '<ul><li>问 <span class="bo">ཡིན་པས</span> → 答 <span class="bo">ལགས་ཡིན</span>（是）/ <span class="bo">ལགས་མིན</span>（不是）</li>' +
          '<li>问 <span class="bo">རེད་པས</span> → 答 <span class="bo">ལགས་རེད</span>（是）/ <span class="bo">ལགས་མ་རེད</span>（不是）</li></ul>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「他是老师」应该用哪个「是」？', options: ['རེད', 'ཡིན'], answer: 0, script: true },
      { type: 'choice', q: '「我是学生」应该用哪个「是」？', options: ['ཡིན', 'རེད'], answer: 0, script: true },
      { type: 'choice', q: 'མོ་སུ་རེད། 是什么意思？', options: ['她是谁？', '她是我妹妹。', '他是老师吗？'], answer: 0 }
    ],
    source: { title: '本站编写' }
  },
  {
    id: 'b1-5',
    title: '数字与年龄',
    goal: '会数 1 到 10，会问孩子几岁、会客气地问大人的年纪。',
    minutes: 15,
    words: [
      { s: 'གཅིག', w: 'gcig', p: 'cik', m: '一' },
      { s: 'གཉིས', w: 'gnyis', p: 'nyi', m: '二' },
      { s: 'གསུམ', w: 'gsum', p: 'sum', m: '三' },
      { s: 'བཞི', w: 'bzhi', p: 'shi', m: '四' },
      { s: 'ལྔ', w: 'lnga', p: 'nga', m: '五' },
      { s: 'དྲུག', w: 'drug', p: 'thruk', m: '六' },
      { s: 'བདུན', w: 'bdun', p: 'dün', m: '七' },
      { s: 'བརྒྱད', w: 'brgyad', p: 'gye', m: '八' },
      { s: 'དགུ', w: 'dgu', p: 'gu', m: '九' },
      { s: 'བཅུ', w: 'bcu', p: 'cu', m: '十' },
      { s: 'ཉི་ཤུ', w: 'nyi shu', p: 'nyi-shu', m: '二十' },
      { s: 'ལོ', w: 'lo', p: 'lo', m: '岁；年' },
      { s: 'ག་ཚོད', w: 'ga tshod', p: 'kha-tsö', m: '多少' }
    ],
    dialogue: {
      scene: '小林去卓玛家做客，几个孩子在院子里玩。',
      people: { '小林': '', '卓玛': 'སྒྲོལ་མ།' },
      lines: [
        { who: '小林', s: 'ཕྲུ་གུ་ འདི་ ལོ་ ག་ཚོད་ རེད།', w: 'phru gu \'di lo ga tshod red/', p: 'thru-gu di lo kha-tsö re?', g: '孩子 这个 岁 多少 是', m: '这个孩子几岁了？' },
        { who: '卓玛', s: 'ལོ་ བདུན་ རེད།', w: 'lo bdun red/', p: 'lo dün re.', g: '岁 七 是', m: '七岁。' },
        { who: '小林', s: 'ཁོ་ཚོ་ ཡང་ ལོ་ བདུན་ རེད་པས།', w: 'kho tsho yang lo bdun red pas/', p: 'kho-tsho yang lo dün re-pe?', g: '他们 也 岁 七 是吗', m: '他们也是七岁吗？' },
        { who: '卓玛', s: 'ལགས་མ་རེད། ཁོ་ ལོ་ དགུ་ རེད། མོ་ ལོ་ བཅུ་ རེད།', w: 'lags ma red/ kho lo dgu red/ mo lo bcu red/', p: 'lak-ma-re. kho lo gu re. mo lo cu re.', g: '不是 他 岁 九 是 她 岁 十 是', m: '不是。他九岁，她十岁。' },
        { who: '卓玛', s: 'ཁྱེད་རང་ དགུང་ལོ་ ག་ཚོད་ ཡིན།', w: 'khyed rang dgung lo ga tshod yin/', p: 'khye-rang gung-lo kha-tsö yin?', g: '您 年纪（敬） 多少 是', m: '您多大年纪？' },
        { who: '小林', s: 'ང་ ལོ་ ཉི་ཤུ་ ཡིན།', w: 'nga lo nyi shu yin/', p: 'nga lo nyi-shu yin.', g: '我 岁 二十 是', m: '我二十岁。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '1 到 10',
        html: '<table class="mini nums"><tr><td><span class="bo">གཅིག</span><br>cik 1</td><td><span class="bo">གཉིས</span><br>nyi 2</td><td><span class="bo">གསུམ</span><br>sum 3</td><td><span class="bo">བཞི</span><br>shi 4</td><td><span class="bo">ལྔ</span><br>nga 5</td></tr>' +
          '<tr><td><span class="bo">དྲུག</span><br>thruk 6</td><td><span class="bo">བདུན</span><br>dün 7</td><td><span class="bo">བརྒྱད</span><br>gye 8</td><td><span class="bo">དགུ</span><br>gu 9</td><td><span class="bo">བཅུ</span><br>cu 10</td></tr></table>' +
          '<p>藏文也有自己的数字符号：<span class="bo">༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩ ༡༠</span>。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '十几、几十',
        html: '<ul><li><span class="bo">བཅུ་གཅིག</span> cu-cik 十一（十 + 一）</li>' +
          '<li><span class="bo">ཉི་ཤུ</span> nyi-shu 二十</li><li><span class="bo">སུམ་ཅུ</span> sum-cu 三十</li></ul>' +
          '<p>说年龄：<span class="bo">ལོ</span> lo（岁）放在数字<b>前面</b>：<span class="bo">ལོ་བདུན</span> 七岁。</p>'
      },
      {
        at: 'end', kind: 'culture', title: '问大人的年纪要用敬语',
        html: '<p>问孩子用普通词 <span class="bo">ལོ</span> lo；问大人、长辈要用敬语 <span class="bo">དགུང་ལོ</span> gung-lo：</p>' +
          '<p class="ex"><span class="bo">ཁྱེད་རང་དགུང་ལོ་ག་ཚོད་ཡིན།</span> 您多大年纪？</p>' +
          '<p>「孩子」<span class="bo">ཕྲུ་གུ</span> 按拼写读 thru-gu，口语里也常听到 pu-gu。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: 'བདུན 是几？', options: ['七', '八', '九'], answer: 0 },
      { type: 'choice', q: '问长辈的年纪，用哪个词更礼貌？', options: ['དགུང་ལོ', 'ལོ'], answer: 0, script: true },
      { type: 'choice', q: 'ཉི་ཤུ 是多少？', options: ['二十', '十二', '二'], answer: 0 }
    ],
    source: { title: '本站编写' }
  },
  {
    id: 'b1-6',
    title: '我的家人',
    goal: '会问「您家有几口人」，会用「……ལ……ཡོད」说自己有什么人。',
    minutes: 15,
    words: [
      { s: 'ཚང', w: 'tshang', p: 'tshang', m: '家、户' },
      { s: 'མི', w: 'mi', p: 'mi', m: '人' },
      { s: 'ཡོད', w: 'yod', p: 'yö', m: '有' },
      { s: 'མེད', w: 'med', p: 'me', m: '没有' },
      { s: 'ཨ་ལྕག', w: 'a lcag', p: 'a-cak', m: '姐姐' },
      { s: 'ཇོ་ལགས', w: 'jo lags', p: 'cho-la', m: '哥哥' },
      { s: 'ཕྲུ་གུ', w: 'phru gu', p: 'thru-gu', m: '孩子' },
      { s: 'བུ', w: 'bu', p: 'phu', m: '儿子、男孩' },
      { s: 'བུ་མོ', w: 'bu mo', p: 'phu-mo', m: '女儿、女孩' },
      { s: 'དང', w: 'dang', p: 'dang', m: '和' }
    ],
    dialogue: {
      scene: '小林和卓玛聊起家里人。',
      people: { '小林': '', '卓玛': 'སྒྲོལ་མ།' },
      lines: [
        { who: '小林', s: 'ཁྱེད་རང་ཚང་ལ་ མི་ ག་ཚོད་ ཡོད།', w: 'khyed rang tshang la mi ga tshod yod/', p: 'khye-rang-tshang-la mi kha-tsö yö?', g: '您家里 人 多少 有', m: '您家有几口人？' },
        { who: '卓玛', s: 'ང་ཚང་ལ་ མི་ ལྔ་ ཡོད།', w: 'nga tshang la mi lnga yod/', p: 'nga-tshang-la mi nga yö.', g: '我家里 人 五 有', m: '我家有五口人。' },
        { who: '小林', s: 'ཁྱེད་རང་ལ་ ཨ་ལྕག་ ཡོད་པས།', w: 'khyed rang la a lcag yod pas/', p: 'khye-rang-la a-cak yö-pe?', g: '您（有） 姐姐 有吗', m: '您有姐姐吗？' },
        { who: '卓玛', s: 'ལགས་མེད། ང་ལ་ ཇོ་ལགས་ གཅིག་ ཡོད།', w: 'lags med/ nga la jo lags gcig yod/', p: 'lak-me. nga-la cho-la cik yö.', g: '没有 我（有） 哥哥 一 有', m: '没有。我有一个哥哥。' },
        { who: '小林', s: 'ཁྱེད་རང་ལ་ ཕྲུ་གུ་ ག་ཚོད་ ཡོད།', w: 'khyed rang la phru gu ga tshod yod/', p: 'khye-rang-la thru-gu kha-tsö yö?', g: '您（有） 孩子 多少 有', m: '您有几个孩子？' },
        { who: '卓玛', s: 'བུ་ གཅིག་ དང་ བུ་མོ་ གཅིག་ ཡོད།', w: 'bu gcig dang bu mo gcig yod/', p: 'phu cik dang phu-mo cik yö.', g: '儿子 一 和 女儿 一 有', m: '一个儿子，一个女儿。' },
        { who: '小林', s: 'བུ་མོ་ སློབ་ཕྲུག་ རེད་པས།', w: 'bu mo slob phrug red pas/', p: 'phu-mo lop-thruk re-pe?', g: '女儿 学生 是吗', m: '女儿上学了吗？' },
        { who: '卓玛', s: 'ལགས་རེད། མོ་ ལོ་ བཅུ་ རེད།', w: 'lags red/ mo lo bcu red/', p: 'lak-re. mo lo cu re.', g: '是的 她 岁 十 是', m: '是的，她十岁了。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '「我有……」：ང་ལ་ …… ཡོད',
        html: '<p>藏语说「我有一个哥哥」，字面是「对我来说，有一个哥哥」：</p>' +
          '<p class="ex"><span class="bo">ང་ལ་ཇོ་ལགས་གཅིག་ཡོད།</span><br>我（对） 哥哥 一 有</p>' +
          '<p>数字放在名词<b>后面</b>。否定是 <span class="bo">མེད</span> me（没有），问句是 <span class="bo">ཡོད་པས</span> yö-pe。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '称呼家人：ལགས',
        html: '<p>称呼家里的长辈常在后面加 <span class="bo">ལགས</span>：<span class="bo">ཕ་ལགས</span> pha-la 父亲、<span class="bo">ཨ་མ་ལགས</span> a-ma-la 母亲、<span class="bo">ཇོ་ལགས</span> cho-la 哥哥。</p>' +
          '<p><span class="bo">ཚང</span> tshang 是「家、户」：<span class="bo">ཁྱེད་རང་ཚང</span> 您家，<span class="bo">ང་ཚང</span> 我家。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: 'ཡོད 和 ཡིན 不一样',
        html: '<ul><li><span class="bo">ཡིན</span> yin：「是」（A 是 B）</li><li><span class="bo">ཡོད</span> yö：「有、在」</li></ul>' +
          '<p>和 ཡིན/རེད 一样，说别人时 <span class="bo">ཡོད</span> 常换成 <span class="bo">ཡོད་རེད</span> 或 <span class="bo">འདུག</span>，这些到 A2 阶段再系统学。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「我有一个哥哥」怎么说？', options: ['ང་ལ་ཇོ་ལགས་གཅིག་ཡོད།', 'ང་ཇོ་ལགས་གཅིག་ཡིན།', 'ང་ལ་ཨ་ལྕག་གཅིག་ཡོད།'], answer: 0, script: true },
      { type: 'choice', q: 'ཡོད（有）的否定是：', options: ['མེད', 'མིན', 'མ་རེད'], answer: 0, script: true }
    ],
    source: { title: '本站编写' }
  },
  {
    id: 'b1-7',
    title: '请喝茶',
    goal: '会用敬语请人喝茶，会说要什么、不要什么，会夸茶好喝。',
    minutes: 12,
    words: [
      { s: 'བཞེས', w: 'bzhes', p: 'she', m: '吃、喝（敬语）' },
      { s: 'དགོས', w: 'dgos', p: 'gö', m: '要、需要' },
      { s: 'ལགས་མི་དགོས', w: 'lags mi dgos', p: 'lak-mi-gö', m: '不用了（礼貌）' },
      { s: 'ཇ་མངར་མོ', w: 'ja mngar mo', p: 'cha-ngar-mo', m: '甜茶' },
      { s: 'བོད་ཇ', w: 'bod ja', p: 'phö-cha', m: '酥油茶' },
      { s: 'ཧ་ཅང', w: 'ha cang', p: 'ha-cang', m: '非常' },
      { s: 'ཞིམ་པོ', w: 'zhim po', p: 'shim-po', m: '好吃、好喝' },
      { s: 'རོགས་གནང', w: 'rogs gnang', p: 'rok-nang', m: '请（敬语）' }
    ],
    dialogue: {
      scene: '小林在卓玛家做客，卓玛给他倒茶。',
      people: { '卓玛': 'སྒྲོལ་མ།', '小林': '' },
      lines: [
        { who: '卓玛', s: 'ཇ་ བཞེས་ རོགས་གནང་།', w: 'ja bzhes rogs gnang/', p: 'cha she rok-nang.', g: '茶 喝（敬） 请', m: '请喝茶。' },
        { who: '小林', s: 'ཐུགས་རྗེ་ཆེ།', w: 'thugs rje che/', p: 'thuk-je-che.', g: '谢谢', m: '谢谢。' },
        { who: '卓玛', s: 'ཁྱེད་རང་ལ་ ཇ་མངར་མོ་ དགོས་པས།', w: 'khyed rang la ja mngar mo dgos pas/', p: 'khye-rang-la cha-ngar-mo gö-pe?', g: '您（要） 甜茶 要吗', m: '您要甜茶吗？' },
        { who: '小林', s: 'ལགས་མི་དགོས། ང་ལ་ བོད་ཇ་ དགོས།', w: 'lags mi dgos/ nga la bod ja dgos/', p: 'lak-mi-gö. nga-la phö-cha gö.', g: '不用了 我（要） 酥油茶 要', m: '不用了，我要酥油茶。' },
        { who: '卓玛', s: 'བོད་ཇ་ ཞིམ་པོ་ འདུག་གམ།', w: 'bod ja zhim po \'dug gam/', p: 'phö-cha shim-po duk-gam?', g: '酥油茶 好喝 （亲见）吗', m: '酥油茶好喝吗？' },
        { who: '小林', s: 'ཧ་ཅང་ ཞིམ་པོ་ འདུག', w: 'ha cang zhim po \'dug', p: 'ha-cang shim-po duk.', g: '非常 好喝 （亲见）', m: '非常好喝。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'culture', title: '酥油茶和甜茶',
        html: '<p><span class="bo">བོད་ཇ</span> phö-cha「藏茶」就是酥油茶，用茶、酥油和盐打成，是藏族家庭每天都喝的饮料。</p>' +
          '<p><span class="bo">ཇ་མངར་མོ</span> cha-ngar-mo 是加奶加糖的甜茶，拉萨街头有很多甜茶馆。做客时主人会不停地给你添茶。</p>'
      },
      {
        at: 'mid', kind: 'grammar', title: '敬语动词 བཞེས',
        html: '<p>请别人吃、喝，要用敬语 <span class="bo">བཞེས</span> she：<span class="bo">ཇ་བཞེས་རོགས་གནང་།</span>（请喝茶）。说自己喝，用普通动词 <span class="bo">འཐུང</span> thung。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '「要」：ལ …… དགོས',
        html: '<p>和「有」的句型一样：<span class="bo">ང་ལ་བོད་ཇ་དགོས།</span>「我要酥油茶」。否定是 <span class="bo">མི་དགོས</span>（不要），客气的拒绝是 <span class="bo">ལགས་མི་དགོས</span>。</p>'
      }
    ],
    exercises: [
      { type: 'choice', q: '请客人喝茶，「喝」要用哪个词？', options: ['བཞེས', 'འགྲོ', 'ཉོ'], answer: 0, script: true },
      { type: 'choice', q: 'ལགས་མི་དགོས 是什么意思？', options: ['不用了（礼貌）', '是的', '很好喝'], answer: 0 }
    ],
    source: { title: '本站编写' }
  },
  {
    id: 'b1-8',
    title: '买东西',
    goal: '会问价钱、说「太贵了」，会说「我买这个」。',
    minutes: 12,
    words: [
      { s: 'འདི', w: '\'di', p: 'di', m: '这、这个' },
      { s: 'གོང', w: 'gong', p: 'khong', m: '价钱' },
      { s: 'ག་ཚོད', w: 'ga tshod', p: 'kha-tsö', m: '多少' },
      { s: 'སྒོར་མོ', w: 'sgor mo', p: 'gor-mo', m: '元（钱）' },
      { s: 'སུམ་ཅུ', w: 'sum cu', p: 'sum-cu', m: '三十' },
      { s: 'ཉི་ཤུ', w: 'nyi shu', p: 'nyi-shu', m: '二十' },
      { s: 'ཆེན་པོ', w: 'chen po', p: 'chen-po', m: '大' },
      { s: 'ཡག་པོ', w: 'yag po', p: 'yak-po', m: '好' },
      { s: 'ཉོ', w: 'nyo', p: 'nyo', m: '买' }
    ],
    dialogue: {
      scene: '小林在拉萨八廓街的小摊上看中了一顶帽子，摊主叫扎西。',
      people: { '小林': '', '扎西': 'བཀྲ་ཤིས།' },
      lines: [
        { who: '小林', s: 'འདི་ གོང་ ག་ཚོད་ རེད།', w: '\'di gong ga tshod red/', p: 'di khong kha-tsö re?', g: '这个 价钱 多少 是', m: '这个多少钱？' },
        { who: '扎西', s: 'སྒོར་མོ་ སུམ་ཅུ་ རེད།', w: 'sgor mo sum cu red/', p: 'gor-mo sum-cu re.', g: '元 三十 是', m: '三十元。' },
        { who: '小林', s: 'ཧ་ཅང་ གོང་ ཆེན་པོ་ འདུག', w: 'ha cang gong chen po \'dug', p: 'ha-cang khong chen-po duk.', g: '非常 价钱 大 （亲见）', m: '太贵了！' },
        { who: '扎西', s: 'ཡག་པོ་ རེད། སྒོར་མོ་ ཉི་ཤུ་ རེད།', w: 'yag po red/ sgor mo nyi shu red/', p: 'yak-po re. gor-mo nyi-shu re.', g: '好 是 元 二十 是', m: '好吧，二十元。' },
        { who: '小林', s: 'ཐུགས་རྗེ་ཆེ། ང་ འདི་ ཉོ་ གི་ ཡིན།', w: 'thugs rje che/ nga \'di nyo gi yin/', p: 'thuk-je-che. nga di nyo gi yin.', g: '谢谢 我 这个 买 （将要） 是', m: '谢谢！我买这个。' }
      ]
    },
    tips: [
      {
        at: 'start', kind: 'grammar', title: '这个多少钱？',
        html: '<p class="ex"><span class="bo">འདི་གོང་ག་ཚོད་རེད།</span><br>这个 价钱 多少 是</p>' +
          '<p><span class="bo">སྒོར་མོ</span> gor-mo 原义是「圆的东西、硬币」，现在用来说「元」。</p>'
      },
      {
        at: 'mid', kind: 'culture', title: '讨价还价',
        html: '<p>在八廓街这样的集市上，讲价很常见。觉得贵可以说 <span class="bo">ཧ་ཅང་གོང་ཆེན་པོ་འདུག</span>「价钱太大了」。摊主同意降价时常说 <span class="bo">ཡག་པོ་རེད</span>「好吧」。</p>'
      },
      {
        at: 'end', kind: 'grammar', title: '「我要做……」：动词 + གི་ཡིན',
        html: '<p>说自己<b>打算、将要</b>做的事，用「动词 + <span class="bo">གི་ཡིན</span>」：</p>' +
          '<ul><li><span class="bo">ང་འདི་ཉོ་གི་ཡིན།</span> 我要买这个。</li><li><span class="bo">ང་འགྲོ་གི་ཡིན།</span> 我要走了。（第 2 课）</li></ul>'
      }
    ],
    exercises: [
      { type: 'choice', q: '「太贵了！」怎么说？', options: ['ཧ་ཅང་གོང་ཆེན་པོ་འདུག', 'འདི་གོང་ག་ཚོད་རེད།', 'ཡག་པོ་རེད།'], answer: 0, script: true },
      { type: 'choice', q: 'ང་འདི་ཉོ་གི་ཡིན། 是什么意思？', options: ['我要买这个。', '我买过这个了。', '这个多少钱？'], answer: 0 }
    ],
    source: { title: '本站编写' }
  }
]);
