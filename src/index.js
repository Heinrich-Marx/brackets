module.exports = function check(str, bracketsConfig) {
  //function check(str, bracketsConfig) {
  //  str = '111115611111111222288888822225577877778775555666677777777776622222'
  //  bracketsConfig = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
  // '||'  [['|', '|']];         |!, |
  // open = [|!]

  let open = [];
  let close = {};
  let sumbol;
  let sumbol2;
  let arr = [];
  let elem;
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      bracketsConfig[i][0] = bracketsConfig[i][0] + "!";
      //console.log(bracketsConfig[i][0]);
    }
    open.push(bracketsConfig[i][0]);
    //console.log(close[bracketsConfig[i][1]]);
    // console.log("-----");
    close[bracketsConfig[i][1]] = bracketsConfig[i][0];
    // console.log(bracketsConfig[i][0]);
    //console.log(bracketsConfig[i][0]);
    // console.log(close[bracketsConfig[i][1]]);

    // |! = |!
    // open.push(bracketsConfig[i][1]);
    console.log("close", close);
    console.log("open ", open);
  }
  for (let j = 0; j < str.length; j++) {
    sumbol = str[j];
    sumbol2 = str[j] + "!";
    console.log("sumbol", sumbol);
    if (open.includes(sumbol) || open.includes(sumbol2)) {
      if (arr.includes(sumbol) && close[sumbol] == sumbol2) {
        arr.pop();
        console.log("arr after pop ", arr);
      } else {
        arr.push(sumbol);
        console.log("arr", arr);
      }
    } else {
      if (arr.length === 0) {
        if (open[j] === close[sumbol]) {
          return true;
        }
        return false;
      }

      elem = arr[arr.length - 1];
      // console.log(close[sumbol]);
      // console.log("sumbol ", sumbol);
      console.log("elem ", elem);
      if (close[sumbol] == elem || close[sumbol] + "!" == elem) {
        console.log("close[sumbol] ", close[sumbol]);
        console.log("close[sumbol] + !", close[sumbol] + "!");

        arr.pop();
      }
      //    else {
      //    return false;
      //}
      console.log("arr ", arr);
    }
  }
  if (arr.length == 0) return true;
  else return false;
};
// check("|()|(||)||", [
//   ["(", ")"],
//   ["|", "|"],
// ]);
// check("[]()", [
//   ["(", ")"],
//   ["[", "]"],
// ]);

/*
function expor(str, bracketsConfig) {

  let open = [];
  let close = {};
  let sumbol;
  let arr = [];
  let elem;
  for (let i = 0; i <bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      bracketsConfig[i][1] = bracketsConfig[i][1] + bracketsConfig[i][1]
    }
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

expor('111115611111111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])

*/

// let aq = ["heelo"];
// console.log(aq.length);
