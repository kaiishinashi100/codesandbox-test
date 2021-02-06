// var vall = "var変数";
// console.log(vall);

// //var変数は上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// var vall = "var際宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2)

// val2 = "let変数上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "kai",
//   age: 25,
// };
// val4.name = "かい";
// val4.age = 26;
// console.log(val4)

// //constで定義したプロパティは変更可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5)

//テンプレート文字列
// const name = "kai";
// const age = 25;

// //従来の方法
// const message1 = "私の名前は"　+ name + "です。年齢は" + age + "です。";
// console.log(message1)

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

//アロー関数
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (num1, num2)=> num1 + num2;

// console.log(func2(10, 20));

//分割代入
// const myProfile = {
//   name: "kai",
//   age: 26,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}際です。`;
// console.log(message1);

// const {name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}際です。`;
// console.log(message1);

// const myProfile = ['kai', 26];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}際です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("kai");

//スプレッド構文
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

//mapやfilterを使った配列の処理
// const nameArr = ["田中", "yamada", "kai"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index)=> console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "kai") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//三項演算し
//ある条件？　条件がtrueのとき　：　条件がfalseのとき
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "kai";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲ナイです';
// }
// console.log(checkSum(50, 60));

//論理演算子のほんとの意味
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も２はtrueになります");
// }

// ||は左側がfalseなら右側を返す、逆も然り
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // ＆＆は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2)
