'use strict';

// 空のオブジェクトを作成してください。

const empty = {};

// xとyというキーを持ち、それぞれの値が1と2であるオブジェクトを作成してください。

const objEx = {
  x: 1,
  y: 2,
};

// '問題02'のオブジェクトのxの値をコンソールに出力してください。

console.log(objEx.x);

// '問題02'のオブジェクトのyに数値3を代入してください。

objEx.y = 3;

// '問題04'のオブジェクトにキーzを追加し、それにhogeという文字列を代入してください。

objEx.z = 'hoge';

// '問題05'のオブジェクトにキーnumbersを追加し、それに数値1から4の整数を１つずつ要素に持つ配列を代入してください。

objEx.numbers = [1, 2, 3, 4];

// '問題06'のオブジェクトの全てのキーを要素に持つ配列を作成してください。

const array = Object.keys(objEx);

// '問題06'のオブジェクトの全ての値を要素に持つ配列を作成してください。

const value = Object.values(objEx);

// '問題06'のオブジェクトのキーxとyの値の和を求めてください。

console.log(objEx.x + objEx.y)

// { a: 1, b: 2, c: 3 }を[['a', 1], ['b', 2], ['c', 3]]に変換してください。

const obj01 = { a: 1, b: 2, c: 3 };
const array01 = Object.entries(obj01);
console.log(array01);

const arrChange = Object.keys(obj01).map(key => [key, obj01[key]]);
console.log(arrChange);

// [['a', 1], ['b', 2], ['c', 3]]を{ a: 1, b: 2, c: 3 }に変換してください。

const array02 = [['a', 1], ['b', 2], ['c', 3]];
const obj02 = Object.fromEntries(array02);
console.log(obj02);

const objAdd = {}
array02.forEach(([key,value])=> {
  objAdd[key] = value
})
console.log(objAdd)

// { a: 1, b: 2, c: 3 }のコピーを作成してください。

const originalObj = { a: 1, b: 2, c: 3 };
const copyObj = { ...originalObj };
console.log(copyObj); 

// { a: 1, b: 2, c: 3 }と{ d: 4, e: 5, f: 6 }を結合した別のオブジェクトを作成してください。

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const result = { ...obj1, ...obj2 }
console.log(result);

// '問題13'のオブジェクトに含まれる全ての値の和を求めてください。

let sumValue = 0

for(let value in result) {
  sumValue += result[value]
}
console.log(sumValue)

const sumObj = Object.values(result).reduce((acc,current) => {
  return acc + current
})
console.log(sumObj)

// 任意のアルファベット列が与えられた時、その文字列に現れるアルファベットの数をカウントしオブジェクトにまとめて返す。

function count(word) {
  // ここを実装してください。
  const obj = {};
  //格納するために空のオブジェクトを記述
  for (let i = 0; i < word.length; i++) {
    // count関数に入る言葉の文字の数だけ回す
    const char = word[i];
    // ループ変数iに対応する文字をcharに代入
    if (obj[char]) {
      // キーが変数charに代入された文字列wordの各文字であるプロパティが既に存在するかどうかをチェック
      obj[char]++;
      // あればプラス１
    } else {
      obj[char] = 1;
      // 新しいプロパティを追加して値を1に設定
    }
  }
  return obj;
}

const obj = count('hello');
console.log(obj); 

function countMap(word) {
  const map = new Map();
  // Mapオブジェクトを生成
  for (let i = 0; i < word.length; i++) {
    // countMap関数に入る言葉の文字の数だけ回す
    const char = word[i];
    // ループ変数iに対応する文字をcharに代入
    const count = map.get(char) || 0;
    // Mapオブジェクトからcharに対応する値を取得しcountに代入
    // またundefinedなら０を代入
    map.set(char, count + 1);
    // Mapオブジェクトに、キーとしてchar、値としてcountのペアを追加
  }
  return map;
}
const mapObj = countMap('hhhellooo');
console.log(mapObj);

module.exports = countMap;






