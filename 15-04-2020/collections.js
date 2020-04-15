console.log("======== list1 ========");
const list1 = [1, 2, 3, 4];
console.log("start: " + list1);

list1.push(5);
console.log("after push 5: " + list1);

list1.pop();
console.log("after pop: " + list1);

list1.unshift(0);
console.log("after unshift 0: " + list1);

list1.shift();
console.log("after unshift: " + list1);

console.log("second element is the value at index 1");
console.log(list1[1]);

for (const value of list1) {
    console.log("value: " + value);
}