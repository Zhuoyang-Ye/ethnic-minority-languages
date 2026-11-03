/* 传统蒙古文（胡都木蒙文 Hudum Mongolian）字母表、格助词与表格模板 */
LX.MN_ALPHA = {
  vowels: [
    ['ᠠ', 'a', 'a', '阳性（后元音）', 'ᠠᠪᠤ', 'abu', 'aav', '爸爸'],
    ['ᠡ', 'e', 'e / ə', '阴性（前元音）', 'ᠡᠵᠢ', 'eji', 'eej', '妈妈'],
    ['ᠢ', 'i', 'i', '中性元音（可配阴阳）', 'ᠪᠢ', 'bi', 'bi', '我'],
    ['ᠣ', 'o', 'o / ɔ', '阳性（圆唇后元音）', 'ᠮᠣᠷᠢ', 'mori', 'mori', '马'],
    ['ᠤ', 'u', 'u / ʊ', '阳性（高后圆唇）', 'ᠤᠰᠤ', 'usu', 'us', '水'],
    ['ᠥ', 'ö', 'ö / o', '阴性（圆唇前元音）', 'ᠥᠪᠥᠷ', 'öbör', 'övör', '南、前胸'],
    ['ᠦ', 'ü', 'ü / u', '阴性（高前圆唇）', 'ᠰᠦᠨ', 'sün', 'süü', '奶、牛奶']
  ].map(function (r) { return { s: r[0], w: r[1], p: r[2], group: r[3], exS: r[4], exW: r[5], exP: r[6], exM: r[7] }; }),

  consonants: [
    ['ᠨ', 'n', 'n', '鼻音 n（词首带点）'],
    ['ᠩ', 'ng', 'ng', '后鼻音 ng（只出现在音节末）'],
    ['ᠪ', 'b', 'b / v', '双唇音 b（词中元音间常读 v/w）'],
    ['ᠫ', 'p', 'p', '送气清唇音 p'],
    ['ᠬ', 'q', 'kh / h', '清舌根/小舌擦音 kh（同拼音 h）'],
    ['ᠭ', 'g', 'g / gh', '浊舌根/小舌音 g（在长元音结构中不发音）'],
    ['ᠮ', 'm', 'm', '鼻音 m'],
    ['ᠯ', 'l', 'l', '边音 l'],
    ['ᠰ', 's', 's', '清擦音 s'],
    ['ᠱ', 'sh', 'sh', '清擦音 sh / x'],
    ['ᠲ', 't', 't', '送气舌尖清音 t'],
    ['ᠳ', 'd', 'd', '不送气/浊舌尖音 d'],
    ['ᠴ', 'ch', 'ch', '送气清塞擦音 ch / q'],
    ['ᠵ', 'j', 'j', '不送气塞擦音 j / zh'],
    ['ᠶ', 'y', 'y', '半元音 y'],
    ['ᠷ', 'r', 'r', '颤音 r（一般不出现在本土词词首）'],
    ['ᠸ', 'v', 'v / w', '唇齿半元音 v / w'],
    ['ᠹ', 'f', 'f', '唇齿清擦音 f'],
    ['ᠺ', 'k', 'k', '借词清塞音 k'],
    ['ᠾ', 'h', 'h', '喉擦音 h']
  ].map(function (r) { return { s: r[0], w: r[1], p: r[2], hint: r[3] }; }),

  cases: [
    ['属格（……的）', ' ᠶᠢᠨ /  ᠤ /  ᠦᠨ', '-yin / -u / -ün', 'ᠮᠢᠨᠤ (minu → minii) 我的'],
    ['与位格（在…… / 去……）', ' ᠳᠤ /  ᠳᠦ /  ᠲᠤ /  ᠲᠦ', '-du / -dü / -tu / -tü', 'ᠭᠡᠷ ᠲᠦ (ger-tü → gert) 在蒙古包里'],
    ['宾格（把……）', ' ᠶᠢ /  ᠢ', '-yi / -i', 'ᠴᠠᠢ ᠶᠢ (chai-yi → chaig) 把茶'],
    ['从格（从……）', ' ᠠᠴᠠ /  ᠡᠴᠡ', '-acha / -eche', 'ᠬᠣᠲᠠ ᠠᠴᠠ (qota-acha → hotoos) 从城市'],
    ['共同格（和……一起）', ' ᠲᠠᠢ /  ᠲᠡᠢ', '-tai / -tei', 'ᠰᠦᠨ ᠲᠡᠢ ᠴᠠᠢ (sün-tei chai → süütei tsai) 奶茶（带奶的茶）']
  ].map(function (r) { return { name: r[0], s: r[1], w: r[2], ex: r[3] }; })
};

(function () {
  var esc = LX.util.esc;
  LX.tpl.mnVowelTable = function () {
    return '<table class="mini"><tr><th>字母</th><th>转写</th><th>口语</th><th>元音和谐类别</th><th>例词</th></tr>' +
      LX.MN_ALPHA.vowels.map(function (v) {
        return '<tr><td><span class="mn big">' + esc(v.s) + '</span></td><td><b>' + esc(v.w) + '</b></td><td>' + esc(v.p) + '</td><td><small>' + esc(v.group) + '</small></td>' +
          '<td><span class="mn">' + esc(v.exS) + '</span> <small>' + esc(v.exP) + ' (' + esc(v.exW) + ') ' + esc(v.exM) + '</small></td></tr>';
      }).join('') + '</table>';
  };
  LX.tpl.mnConsonantTable = function (from, to) {
    var cs = LX.MN_ALPHA.consonants.slice(from, to), rows = '';
    for (var i = 0; i < cs.length; i += 4) {
      rows += '<tr>' + cs.slice(i, i + 4).map(function (c) {
        return '<td><span class="mn big">' + esc(c.s) + '</span><br><b>' + esc(c.w) + '</b> <small>读 ' + esc(c.p) + '<br>' + esc(c.hint) + '</small></td>';
      }).join('') + '</tr>';
    }
    return '<table class="mini letters">' + rows + '</table>';
  };
  LX.tpl.mnCaseTable = function () {
    return '<table class="mini"><tr><th>格</th><th>书面形式</th><th>转写</th><th>例词</th></tr>' +
      LX.MN_ALPHA.cases.map(function (c) {
        return '<tr><td><b>' + esc(c.name) + '</b></td><td><span class="mn">' + esc(c.s) + '</span></td><td>' + esc(c.w) + '</td><td><small>' + esc(c.ex) + '</small></td></tr>';
      }).join('') + '</table>';
  };
})();
