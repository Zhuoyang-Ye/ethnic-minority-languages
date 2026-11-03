/* 老傈僳文（富能仁字母 Fraser Script）字母表与表格模板。 */
LX.LISU_ALPHA = {
  consonants: [
    ['ꓐ', 'b', '[b]', '浊唇音（如彝语 bb）'],
    ['ꓑ', 'p', '[p]', '不送气清音（同拼音 b）'],
    ['ꓒ', 'ph', '[pʰ]', '送气清音（倒转 P，同拼音 p）'],
    ['ꓓ', 'd', '[d]', '浊舌尖音（如彝语 dd）'],
    ['ꓔ', 't', '[t]', '不送气清音（同拼音 d）'],
    ['ꓕ', 'th', '[tʰ]', '送气清音（倒转 T，同拼音 t）'],
    ['ꓖ', 'g', '[ɡ]', '浊舌根音（如彝语 gg）'],
    ['ꓗ', 'k', '[k]', '不送气清音（同拼音 g）'],
    ['ꓘ', 'kh', '[kʰ]', '送气清音（倒转 K，同拼音 k）'],
    ['ꓙ', 'j', '[dʑ]', '浊舌面塞擦音（如彝语 jj）'],
    ['ꓚ', 'c', '[tɕ]', '不送气舌面音（同拼音 j）'],
    ['ꓛ', 'ch', '[tɕʰ]', '送气舌面音（倒转 C，同拼音 q）'],
    ['ꓜ', 'dz', '[dz]', '浊平舌音（如彝语 zz）'],
    ['ꓝ', 'ts', '[ts]', '不送气平舌音（同拼音 z）'],
    ['ꓞ', 'tsh', '[tsʰ]', '送气平舌音（倒转 F，同拼音 c）'],
    ['ꓟ', 'm', '[m]', '鼻音 m'],
    ['ꓠ', 'n', '[n]', '鼻音 n'],
    ['ꓡ', 'l', '[l]', '边音 l'],
    ['ꓢ', 's', '[s]', '清擦音 s'],
    ['ꓣ', 'z', '[z]', '浊擦音 z（如彝语 ss）'],
    ['ꓤ', 'rr', '[ʐ]', '浊卷舌音 r'],
    ['ꓥ', 'ng', '[ŋ]', '舌根鼻音 ng（倒转 G）'],
    ['ꓦ', 'v', '[v]', '唇齿浊擦音 v（倒转 V）'],
    ['ꓧ', 'h', '[x]', '清舌根擦音 h'],
    ['ꓨ', 'hh', '[ɦ]', '浊喉擦音 hh'],
    ['ꓩ', 'f', '[f]', '唇齿清擦音 f'],
    ['ꓪ', 'w', '[w]', '半元音 w'],
    ['ꓫ', 'sh', '[ɕ/ʂ]', '清擦音 x / sh'],
    ['ꓬ', 'y', '[ʑ/j]', '半元音 y'],
    ['ꓭ', 'gh', '[ɣ]', '浊舌根擦音 gh（倒转 Y，如彝语 w）']
  ].map(function (r) { return { s: r[0], w: r[1], ipa: r[2], hint: r[3] }; }),

  vowels: [
    ['ꓮ', 'a', '[ɑ]', '开口元音 a（辅音不带元音字母时也默认读 a）'],
    ['ꓯ', 'ae', '[ɛ]', '前开元音 ê（倒转 A）'],
    ['ꓰ', 'e', '[e]', '半高前元音 e'],
    ['ꓱ', 'eu', '[ø]', '圆唇前元音 ö（倒转 E）'],
    ['ꓲ', 'i', '[i]', '高前元音 i'],
    ['ꓳ', 'o', '[o]', '圆唇后元音 o'],
    ['ꓴ', 'u', '[u]', '高后圆唇元音 u'],
    ['ꓵ', 'ue', '[y]', '撮口元音 ü（倒转 U）'],
    ['ꓶ', 'uh', '[ɯ]', '不圆唇高后元音（如彝语 e）'],
    ['ꓷ', 'oe', '[ə]', '央元音 er/e']
  ].map(function (r) { return { s: r[0], w: r[1], ipa: r[2], hint: r[3] }; }),

  tones: [
    ['ꓸ', 't', '55', '高平调（单点 .）', 'ꓟꓮꓸ', 'mat', '教'],
    ['ꓹ', 'x', '35', '高升调（撇号 ,）', 'ꓟꓮꓹ', 'max', '竹子'],
    ['ꓺ', 'd', '44', '中紧调（双点 ..）', 'ꓟꓮꓺ', 'mad', '做、干'],
    ['ꓻ', 'l', '33', '中平调（点加逗号 .,）', 'ꓟꓮꓻ', 'mal', '满满地'],
    ['ꓼ', 'q', '42', '低降调（冒号 :）', 'ꓟꓮꓼ', 'maq', '士兵'],
    ['ꓽ', 'r', '31', '低促调（分号 ;）', 'ꓟꓮꓽ', 'mar', '母亲；大']
  ].map(function (r) { return { s: r[0], w: r[1], value: r[2], name: r[3], exS: r[4], exW: r[5], exM: r[6] }; })
};

(function () {
  var esc = LX.util.esc;
  LX.tpl.lisuConsonantTable = function (from, to) {
    var cs = LX.LISU_ALPHA.consonants.slice(from, to), rows = '';
    for (var i = 0; i < cs.length; i += 3) {
      rows += '<tr>' + cs.slice(i, i + 3).map(function (c) {
        return '<td><span class="lisu big">' + esc(c.s) + '</span><br><b>' + esc(c.w) + '</b> <small>' + esc(c.ipa) + ' ' + esc(c.hint) + '</small></td>';
      }).join('') + '</tr>';
    }
    return '<table class="mini letters">' + rows + '</table>';
  };
  LX.tpl.lisuVowelTable = function () {
    return '<table class="mini"><tr><th>字母</th><th>转写</th><th>音标</th><th>发音提示</th></tr>' +
      LX.LISU_ALPHA.vowels.map(function (v) {
        return '<tr><td><span class="lisu big">' + esc(v.s) + '</span></td><td><b>' + esc(v.w) + '</b></td><td>' + esc(v.ipa) + '</td><td><small>' + esc(v.hint) + '</small></td></tr>';
      }).join('') + '</table>';
  };
  LX.tpl.lisuToneTable = function () {
    return '<table class="mini"><tr><th>符号</th><th>转写尾字母</th><th>调值</th><th>名称</th><th>例字</th></tr>' +
      LX.LISU_ALPHA.tones.map(function (t) {
        return '<tr><td><span class="lisu big">' + esc(t.s) + '</span></td><td><b>-' + esc(t.w) + '</b></td><td>' + esc(t.value) + '</td><td>' + esc(t.name) + '</td>' +
          '<td><span class="lisu">' + esc(t.exS) + '</span> <small>' + esc(t.exW) + '（' + esc(t.exM) + '）</small></td></tr>';
      }).join('') + '</table>';
  };
})();
