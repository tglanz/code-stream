// function map(list, func) {
//     const ans = [];
//     for (const value of list) {
//         const newValue = func(value);
//         ans.push(newValue);
//     }
//     return ans;
// }

// function forEach(list, func) {
//     for (let idx = 0; idx < list.length; ++idx) {
//         const value = list[idx];
//         func(value, idx);
//     }
// }


const list = [1, 2, 3, 4, 5];

// forEach(list, (x, i) => console.log("i: " + i + ", x is : " + x));

// console.log("mapped: " + list.map(value => value + 1));
// list.forEach(value => console.log(" value is: " + value));
// list.forEach((value, index) => console.log(" value at: " + index + " is: " + value));

// [T] :: (F) => [T]
//  where F :: T => boolean
// console.log("filtered odds: " + list.filter(x => x % 2 == 0));

// console.log("accumulated: " + 
//     list.reduce((accumulator, value) => accumulator + value, 0));

function compute1(list) {
    let acc = 0;
    for (const value of list) {
        if (value % 2 == 0){ 
            const newValue = value * 13;

            acc += newValue;
        }
    }    
    return acc;
}

console.log("compute 1: " + compute1(list));

console.log("compute functional: " + list     // [1, 2]
    .filter(x => x % 2 == 0)                  // [2]
    .map(x => x * 13)                         // [26]
    .reduce((acc, curr) => acc + curr), 0);   // 26