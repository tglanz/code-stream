console.log("for loop");
for (let idx = 0; idx < 10; ++idx) {
    console.log("  - idx: " + idx);
}

console.log("for of");
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log("  value: " + value);
}