// console.time('myFilter');
// const arr = [1, 2, 3, false, null, '', 4, 'string', 5];
// function countNaN(filterArr) {
//   let count = 0;
//   for (let i = 0; i < filterArr.length; i++) {
//     if (typeof filterArr[i] !== 'number') {
//       count++;
//     }
//   }
//   return count;
// }
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (typeof arr[j] !== 'number' && typeof arr[j + 1] === 'number') {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// arr.length -= countNaN(arr);
// console.timeEnd('myFilter');

// function countNaN(filterArr) {
//   let count = 0;
//   for (let i = 0; i < filterArr.length; i++) {
//     if (typeof filterArr[i] !== 'number') {
//       count++;
//     }
//   }
//   return count;
// }

// function quickSortAlgo(origArray) {
//   if (origArray.length <= 1) {
//     return origArray;
//   }
//   const left = [];
//   const right = [];
//   const newArray = [];
//   const pivot = origArray.pop();
//   const { length } = origArray;
//   for (let i = 0; i < length; i++) {
//     if (typeof origArray[i] !== 'number' && typeof pivot === 'number') {
//       right.push(origArray[i]);
//     } else {
//       left.push(origArray[i]);
//     }
//   }
//   return newArray.concat(quickSortAlgo(left), pivot, quickSortAlgo(right));
// }
// console.time('myFilter');
// let arr = [1, 2, 3, false, null, '', 4, 'string', 5];
// arr = quickSortAlgo(arr);
// arr.length -= countNaN(arr);
// console.timeEnd('myFilter');

// console.time('filter');
// const arr2 = [1, 2, 3, false, null, '', 4, 'string', 5];
// const filterArr = arr2.filter((item) => typeof item === 'number');
// console.timeEnd('filter');
const names = [
  'Ayman',
  'Abu Rayhan',
  'Anik',
  'Elias Emon',
  'Engr. Sabbir',
  'Fahim Faisal',
  'Feroz Khan',
  'Habib',
  'HM Azizul',
  'Hridoy Saha',
  'Jahid Hassan',
  'Johir',
  'Md Al-Amin',
  'Md Arafatul',
  'Md Ashraful',
  'Parvez',
];

// const namesGroup = {
// 	A: ['Ayman', 'Abu Rayhan', 'Anik'],
// 	E: ['Elias Emon', 'Engr. Sabbir'],
// 	F: ['Fahim Faisal', 'Feroz Khan'],
// };

const namesGrouped = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acc) {
    acc[firstLetter].push(cur);
  } else {
    acc[firstLetter] = [cur];
  }
  return acc;
}, {});

console.time('nayeem');
Object.keys(namesGrouped).forEach((groupKey) => {
//   console.log('-----------', groupKey, '-----------');
  namesGrouped[groupKey].forEach((name) => {});
});
console.timeEnd('nayeem');

console.time('me');
Object.keys(namesGrouped).forEach((groupKey) => {
//   console.log('-----------', groupKey, '-----------');
  namesGrouped[groupKey].join('\n');
});
console.timeEnd('me');
