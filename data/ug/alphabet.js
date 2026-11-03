/* 维吾尔文字母表（32 字母）与表格模板 */
LX.UG_ALPHA = {
  vowels: [
    ['ئا / ا', 'a', '[ɑ]', '后元音、非圆唇（开口大，如「阿」）', 'ئانا', 'ana', '妈妈'],
    ['ئە / ە', 'e', '[ɛ]', '前元音、非圆唇（嘴张大发 ê，如英语 cat）', 'ئەتىگەن', 'etigen', '早上'],
    ['ئې / ې', 'ë', '[e]', '中元音、非圆唇（嘴半闭发「诶」）', 'ئېغىز', 'ëghiz', '嘴'],
    ['ئى / ى', 'i', '[i/ɨ]', '中/前元音、非圆唇（衣）', 'ئىسمىم', 'ismim', '我的名字'],
    ['ئو / و', 'o', '[o]', '后元音、圆唇（喔）', 'ئون', 'on', '十'],
    ['ئۇ / ۇ', 'u', '[u]', '后元音、圆唇（乌）', 'ئۇيغۇر', 'uyghur', '维吾尔'],
    ['ئۆ / ۆ', 'ö', '[ø]', '前元音、圆唇（发 e 时撮圆嘴唇）', 'ئۆي', 'öy', '家、房子'],
    ['ئۈ / ۈ', 'ü', '[y]', '前元音、圆唇（同拼音 ü）', 'ئۈچ', 'üch', '三']
  ].map(function (r) { return { s: r[0], w: r[1], ipa: r[2], hint: r[3], exS: r[4], exW: r[5], exM: r[6] }; }),

  consonants: [
    ['ب', 'b', '[b]', '浊双唇塞音（如英语 bee）'],
    ['پ', 'p', '[pʰ]', '送气清双唇音（同拼音 p）'],
    ['ت', 't', '[tʰ]', '送气舌尖清音（同拼音 t）'],
    ['ج', 'j', '[dʒ]', '浊塞擦音（如英语 job）'],
    ['چ', 'ch', '[tʃʰ]', '送气清塞擦音（如拼音 ch/q）'],
    ['خ', 'x', '[χ]', '清小舌擦音（比拼音 h 更靠后）'],
    ['د', 'd', '[d]', '浊舌尖音（声带振动）'],
    ['ر', 'r', '[r]', '舌尖颤音 r'],
    ['ز', 'z', '[z]', '浊平舌擦音（如英语 zoo）'],
    ['ژ', 'zh', '[ʒ]', '浊翘舌擦音（如法语 je）'],
    ['س', 's', '[s]', '清平舌擦音（同拼音 s）'],
    ['ش', 'sh', '[ʃ]', '清擦音（如拼音 sh/x）'],
    ['غ', 'gh', '[ʁ]', '浊小舌擦音（x 的浊音）'],
    ['ف', 'f', '[f]', '唇齿清擦音（同拼音 f）'],
    ['ق', 'q', '[q]', '小舌塞音（舌根极靠后的 k，配后元音）'],
    ['ك', 'k', '[kʰ]', '舌面后塞音（同拼音 k，配前元音）'],
    ['گ', 'g', '[ɡ]', '浊舌根塞音（配前元音）'],
    ['ڭ', 'ng', '[ŋ]', '后鼻音 ng（只出现在音节末尾）'],
    ['ل', 'l', '[l]', '边音 l'],
    ['م', 'm', '[m]', '鼻音 m'],
    ['ن', 'n', '[n]', '鼻音 n'],
    ['ھ', 'h', '[h]', '清喉擦音（轻柔的气流 h）'],
    ['ۋ', 'w', '[w/v]', '半元音 w / 唇齿音 v'],
    ['ي', 'y', '[j]', '半元音 y']
  ].map(function (r) { return { s: r[0], w: r[1], ipa: r[2], hint: r[3] }; })
};

(function () {
  var esc = LX.util.esc;
  LX.tpl.ugVowelTable = function () {
    return '<table class="mini"><tr><th>字母（词首/词中）</th><th>ULY</th><th>音标</th><th>发音与和谐分类</th><th>例词</th></tr>' +
      LX.UG_ALPHA.vowels.map(function (v) {
        return '<tr><td><span class="ug big">' + esc(v.s) + '</span></td><td><b>' + esc(v.w) + '</b></td><td>' + esc(v.ipa) + '</td><td><small>' + esc(v.hint) + '</small></td>' +
          '<td><span class="ug">' + esc(v.exS) + '</span> <small>' + esc(v.exW) + '（' + esc(v.exM) + '）</small></td></tr>';
      }).join('') + '</table>';
  };
  LX.tpl.ugConsonantTable = function (from, to) {
    var cs = LX.UG_ALPHA.consonants.slice(from, to), rows = '';
    for (var i = 0; i < cs.length; i += 3) {
      rows += '<tr>' + cs.slice(i, i + 3).map(function (c) {
        return '<td><span class="ug big">' + esc(c.s) + '</span><br><b>' + esc(c.w) + '</b> <small>' + esc(c.ipa) + ' ' + esc(c.hint) + '</small></td>';
      }).join('') + '</tr>';
    }
    return '<table class="mini letters">' + rows + '</table>';
  };
})();
