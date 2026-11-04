/* SLR158 reference-speech pilot.
   The manifest intentionally names only two utterances from the first pilot
   subset; the full 33.5-hour archive is not bundled with the web app. */
(function () {
  var source = {
    title: 'NICT-Tib1 / OpenSLR SLR158（Lhasa Tibetan read speech）',
    url: 'https://openslr.org/158/',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    attribution: 'Kak Soky、Zhuo Gong、Sheng Li；NICT-Tib1',
    dialect: '拉萨话（卫藏方言）',
    note: '试点音频来自 SLR158 的 16 kHz、16-bit 单声道 WAV；这里只保留两条跟读样本的清单，不打包约 33.5 小时的完整语料。'
  };

  LX.SLR158 = {
    source: source,
    tracks: {
      'b1-1-greeting': {
        id: 'b1-1-greeting',
        corpusId: '007_01_007_24',
        utterance: 'ང་རང་ཉིད་ཀྱིས་བློ་མཐུན་ཚོར་སེམས་གཏིང་ནས་བཀྲ་ཤིས་བདེ་ལེགས་ཞུས་པ་ཡིན་ཟེར།',
        meaning: '我谨向同志们致以新年祝福。',
        speaker: 'SLR158 pilot speaker A',
        path: 'audio/bo/slr158/b1-1-greeting.wav'
      },
      'b1-1-wellbeing': {
        id: 'b1-1-wellbeing',
        corpusId: '012_01_012_337',
        utterance: 'ཁྱེད་རང་རྒྱལ་ཁབ་ཀྱི་ཀྲུའུ་ཞིར་བདམས་པར་ངས་སེམས་གཏིང་ནས་རྟེན་འབྲེལ་ཞུས་པ་ཡིན།',
        meaning: '我谨向您当选国家主席表示衷心祝贺。',
        speaker: 'SLR158 pilot speaker A',
        path: 'audio/bo/slr158/b1-1-wellbeing.wav'
      }
    }
  };
})();
