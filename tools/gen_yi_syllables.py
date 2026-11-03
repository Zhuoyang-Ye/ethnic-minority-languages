#!/usr/bin/env python3
"""生成 js/yi-syllables.js：规范彝文 1165 个字符 → 彝文拼音。

Unicode 给每个彝文音节字起的名字就是它的彝文拼音（例如 U+A188 YI SYLLABLE NUO = ꆈ nuo），
所以直接从 Python 自带的 unicodedata 读取，不需要手工录入，也就不会出现字和拼音对不上的情况。

用法（在仓库根目录运行）：
    python3 tools/gen_yi_syllables.py
"""
import json
import os
import unicodedata

ITERATION_MARK = 'ꀕ'  # ꀕ 重复号，彝文拼音写作 w

INITIALS = ['b', 'p', 'bb', 'nb', 'hm', 'm', 'f', 'v',
            'd', 't', 'dd', 'nd', 'hn', 'n', 'hl', 'l',
            'g', 'k', 'gg', 'mg', 'hx', 'ng', 'h', 'w',
            'z', 'c', 'zz', 'nz', 's', 'ss',
            'zh', 'ch', 'rr', 'nr', 'sh', 'r',
            'j', 'q', 'jj', 'nj', 'ny', 'x', 'y']
VOWELS = ['i', 'ie', 'a', 'uo', 'o', 'e', 'u', 'ur', 'y', 'yr']


def parse(py):
    """把一个彝文拼音音节拆成 (声母, 韵母, 声调)。"""
    tone = py[-1] if py[-1] in 'txp' else ''
    body = py[:-1] if tone else py
    for ini in sorted(INITIALS, key=len, reverse=True) + ['']:
        if body.startswith(ini) and body[len(ini):] in VOWELS:
            return ini, body[len(ini):], tone
    raise ValueError('无法解析的音节: ' + py)


def main():
    table = {}
    for cp in range(0xA000, 0xA48D):
        ch = chr(cp)
        if ch == ITERATION_MARK:
            table[ch] = 'w'
            continue
        py = unicodedata.name(ch).replace('YI SYLLABLE ', '').lower()
        parse(py)  # 校验：每个音节都必须能拆成 声母+韵母+声调
        table[ch] = py

    used_initials = {parse(p)[0] for p in table.values() if p != 'w'}
    assert len(table) == 1165, len(table)
    assert used_initials == set(INITIALS) | {''}, used_initials

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(root, 'js', 'yi-syllables.js')
    body = json.dumps(table, ensure_ascii=False, separators=(',', ':'))
    with open(out, 'w', encoding='utf-8') as f:
        f.write('/* 自动生成，请勿手改：python3 tools/gen_yi_syllables.py\n')
        f.write('   规范彝文（Unicode Yi Syllables, U+A000–U+A48C）→ 彝文拼音 */\n')
        f.write('window.LX = window.LX || {};\n')
        f.write('LX.YI_SYLLABLES = ' + body + ';\n')
    tones = {}
    for p in table.values():
        t = 'w' if p == 'w' else (parse(p)[2] or '-')
        tones[t] = tones.get(t, 0) + 1
    print('写入', out, '共', len(table), '个字符；声调分布', tones)


if __name__ == '__main__':
    main()
