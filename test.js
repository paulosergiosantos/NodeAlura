const TOKEN_INIT_RG = /^([0-9A-Fa-f]{8}:|:)/;

const tokenCommandRegExp = new RegExp(TOKEN_INIT_RG);

const strs = [
    'AB10CD32:3RRERERE', 
    'AB10CD32:',
    ':123456781:abdsfasfsafsfas:12345678:SFSFSFS', 
    'kkkkkkkk:aabcdef12345678:safsafsafs', 
    'abcdefghijklmnopq:sfsafsfsa', 
    
];

strs.forEach((str, index, strs) => console.log(index, str, tokenCommandRegExp.test(str), strs[index], tokenCommandRegExp.test(strs[index])));

