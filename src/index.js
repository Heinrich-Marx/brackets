module.exports = function check(str, bracketsConfig) {
  // your solution
  let open = [];
  let close = new Object();
  let sumbol;
  let arr = [];
  let elem;
  for (let i = 0; i <bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let i = 0; i<str.length; i++) {
      sumbol = str[i];
      if (open.includes(sumbol)) {
        arr.push(sumbol);
      }
      else {
        if (arr.length === 0) {
          return false;
        } 
      }
      elem = arr[arr.length - 1];
      if (close.sumbol == elem) {
        arr.pop()
      }
      else {
        return false;
      }
  }
  return arr.length === 0;
}

/*let bracketsConfig = [['(', ')']];
let str = '((()))()';

let open = [];
let close = new Object();
let sumbol;
let arr = [];
let elem;
for (let i = 0; i <bracketsConfig.length; i++) {
  open.push(bracketsConfig[i][0]);
  close[bracketsConfig[i][1]] = bracketsConfig[i][0];
}
for (let i = 0; i<str.length; i++) {
    sumbol = str[i];
    if (open.includes(sumbol)) {
      arr.push(sumbol);
    }
    else {
      if (arr.length === 0) {
        return false;
      } 
    }
    elem = arr[arr.length - 1];
    if (close[sumbol] == elem) {
      arr.pop()
    }
    else {
      return false;
    }
}
return arr.length === 0; */