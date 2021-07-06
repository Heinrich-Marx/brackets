module.exports = function check(str, bracketsConfig) {
  //  str = '111115611111111222288888822225577877778775555666677777777776622222' 
  //  bracketsConfig = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
  let open = [];
  let close = {};
  let sumbol;
  let arr = [];
  let elem;
  for (let i = 0; i <bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let j = 0; j<str.length; j++) {
      sumbol = str[j];
      if (open.includes(sumbol)) {
        arr.push(sumbol);
      }
      else {
        if (arr.length === 0) {
          return false;
        } 
      
        elem = arr[arr.length - 1];
        if (close[sumbol] == elem) {
          arr.pop();
        }
        else {
          return false;
        }
      }  
  }
    if (arr.length == 0) 
    return true;
  else 
    return false;   
  
}

/*
exports = function check(str, bracketsConfig) {

  let open = [];
  let close = {};
  let sumbol;
  let arr = [];
  let elem;
  for (let i = 0; i <bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let j = 0; j<str.length; j++) {
      sumbol = str[j];
      if (open.includes(sumbol)) {
        arr.push(sumbol);
      }
      else {
        if (arr.length === 0) {
          return false;
        } 
      
        elem = arr[arr.length - 1];
        if (close[sumbol] == elem) {
          arr.pop();
        }
        else {
          return false;
        }
      }  
  }
  return arr.length == 0;
}

export('111115611111111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])

*/