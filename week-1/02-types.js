let x = 21;
console.log(typeof x); // "number"
let sym_id = Symbol("id");
console.log(typeof sym_id); // "symbol"
let address = "93 Quay St";
console.log(typeof address); // "string"
let isGay = false;
console.log(typeof isGay); // "boolean"
let und;
console.log(typeof und); // "undefined"
let n = null;
console.log(typeof n); // "null"
let arry = [21, "So High", false];
console.log(typeof arry); // "object"
let obj = { age: 21, height: "So High", female: false };
console.log(typeof obj); // "object"

let str1 = "21";
let str2 = "ab21";
let str3 = "21ab";
let str4 = "";
let num1 = 77;
let n1 = null;
let und1;

console.log(Number(str1)); // 21
console.log(Number(str2)); // NaN
console.log(Number(str3)); // NaN
console.log(Number(str4)); // NaN
console.log(parseInt(str1)); // 21
console.log(parseInt(str2)); // NaN
console.log(parseInt(str3)); // 21
console.log(parseInt(str4)); // NaN

console.log(String(num1)); // "77"
console.log(String(n1)); // "null"
console.log(String(und1)); // "undefined"
console.log(num1.toString()); // "77"
// console.log(n1.toString()); // error
// console.log(und1.toString()); // error

console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" * "2"); // 10
console.log([] + {}); // "[{}]", actual: [object Object] from "" + "[object Object]"
console.log({} + []); // "[{}]" actual: [object Object] from "[object Object]" + ""
console.log([] + []); // "[[]]" actual: "" from "" + "", because all the values inside those arrays are empty
console.log("5" + true); // "5true"
console.log("5" - true); // 4, the "true" boolean value got numbered into 1?
console.log(1 + "1" + 1); // "111"
console.log(10 + 20 + "30"); // "102030" actual: 3030, because it's processed or calculated from the left