let u1 = {
    id: 12387,
    name: "ben",
    age: 13
};

console.log(u1);

// . syntax
console.log("name of u1: " + u1.name + ", age: " + u1.age);

// [name] syntax
console.log("name of u1: " + u1["name"] + ", age: " + u1["age"]);

// get all keys
console.log();
const keys = Object.keys(u1); // [string]
console.log("keys are");
for (const key of keys) {
    console.log("  - " + key + ": " + u1[key]);
}

console.log();
console.log("keys using for in");
// for (const key of Object.keys(u1))
for (const key in u1) {
    console.log("  - " + key + ": " + u1[key]);
}

console.log();
console.log("values are");
// for (Object value: u1)
for (const value of Object.values(u1)) {
    console.log("  - value: " + value);
}

console.log();
// destructure each entry to [key, value]
for (const [key, value] of Object.entries(u1)) {
    // entry: [key, value]
    console.log("  - key: " + key + ", value: " + value);
}

// adding fields to an object
console.log(u1);
u1.address = "some address";
console.log(u1);
u1.address = "some other address";
console.log(u1);
delete u1.address
console.log(u1);

// const, is it really const?
const u2 = {
    name: "some name",
    age: 13
};

console.log("====== u2 ========");
console.log(u2);
u2.name = "some other name";
console.log(u2);

console.log("====== u3 ========");
let age = 30;
const u3 = {
    name: "some name",
    // age: age
    age
};

console.log(u3);