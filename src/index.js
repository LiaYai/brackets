module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  };
  let newStr = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsConfig[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
  };
  while (str !== newStr) {
    newStr = str;
    for (let j = 0; j < bracketsConfig.length; j++) {
    str = str.replace(bracketsConfig[j],'');
    };
  };
  
  return (newStr === '');
};