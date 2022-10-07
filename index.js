function capitalize(string) {
  let res = string[0].toUpperCase() + string.slice(1);

  return res;
}
function reverseString(string) {
  let res = string.split("").reverse().join("");
  return res;
}
const calculator = (function () {
  function add(x, y) {
    let res = x + y;
    return res;
  }
  function multiply(x, y) {
    let res = x * y;
    return res;
  }
  function subtract(x, y) {
    let res = x - y;
    return res;
  }
  function divide(x, y) {
    if (y == 0) throw new Error("Can't divide by Zero");
    let res = x / y;
    return res;
  }
  return { add, multiply, subtract, divide };
})();
function isAlpha(char) {
  if (
    (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
  )
    return true;
  return false;
}

function isUpper(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
}

function caesarCipher(string) {
  let res = "";
  for (let i of string) {
    let code = i.toLowerCase().charCodeAt(0);
    if (isAlpha(i)) {
      
        res +=
          code + 1 <= 122
            ? String.fromCharCode(code + 1)
            : String.fromCharCode(((code + 1) % 122) + 96);
      
    } else res += i;
  }
  return res;
}

function analyzeArray(arr) {
   let length = arr.length;
  let average = arr.reduce((prev,curr)=>prev+curr , 0)/length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
 
  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

console.log(caesarCipher("attack at ! dawn ? :"));