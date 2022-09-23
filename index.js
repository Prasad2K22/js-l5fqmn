// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let a = [101, 98, 99, 89,99,9,-101,-98,6,-2,10,0];

// const nearestNumFunc = (arr, num, n) => {
//   const unqArr = [...new Set(arr)];
//   const obj = unqArr.reduce((acc, el) => {
//     let key=num -el;
//     if (key < 0) key *= -1;
//     if (acc[key] || acc[key] === 0) {
//       const val =acc[key].length > 1 ? [...acc[key]] : acc[key];
//       acc[key] = [val, el];
//     } else {
//       acc[key] = el;
//     }

//     return acc;
//   }, {});

//   const key = Object.keys(obj).slice(0,n);
//   return key.map(el => obj[el]);
// };

// console.log(nearestNumFunc(a, -100, 3));

const str = 'welcome to World of JS';

const charInvWord = (str) => {
  let j = 0;
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
      word += str.slice(j, i);
      j = i + 1;
    }
  }
  return word;
};

console.log(charInvWord(str));
