function compress(text) {
    let compressedResult = "";
    let tmp = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if (!tmp || tmp.charAt(tmp.length - 1) === c) {
            tmp += c;
        } else {
            compressedResult += tmp.charAt(0) + tmp.length;
            tmp = c;
        }
    }
    compressedResult += tmp.charAt(0) + tmp.length;
    return compressedResult.length < text.length ? compressedResult : text;
}

module.exports = compress;


// (aaa)(b)(aa)
// (a3)(b1)(a2)
// 1 + -1 + 0
