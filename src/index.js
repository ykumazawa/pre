import "./styles.css";

var val1 = "変数宣言";
console.log(val1);

const val4 = {
  name: "ymama",
  age: 23
};
console.log(val4);

const name = "kuma";
const age = 23;

// 従来の文字列結合方法
const msg1 = "watasinonamaeha" + name + "desu.nennreiha" + age + "desu.";
console.log(msg1);

// テンプレート文字列
const msg2 = `私の名前は${name}です。`;
console.log(msg2);

// 従来の関数
// パターン１
function func0(str) {
  return str + "ya";
}
console.log(func0("なん0"));
// パターン2
const func1 = function (str) {
  return str + "yan";
};

console.log(func1("なんで1"));

// アロー関数
// パターン１
const func2 = (str) => {
  return str + "yanen";
};
console.log(func2("なんで2"));

// パターン2 引数が一つの時　（）を省略可能
const func3 = (str) => {
  return str + "yanen";
};
console.log(func3("なんで3"));

// パターン3 一行処理の時 returnを省略可能
const func4 = (str) => str + "省略可能";
console.log(func4("なんで4"));
