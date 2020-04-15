function fAdd(a, b) {
    return a + b;
}

function fSub(a, b) {
    return a - b;
}

function fMul(a, b) {
    return a * b;
}

function fDiv(a, b) {
    return a / b;
}

function fCompute(computation, a, b) {
    const ans = computation(a, b);
    return ans;
}

const operators = [fAdd, fSub, fMul, fDiv];

for (const operator of operators) {
    console.log("value: " + fCompute(operator, 2, 3));
}

// console.log("fAdd: " + fCompute(fAdd, 2, 3));
// console.log("fSub: " + fCompute(fSub, 2, 3));
// console.log("fMul: " + fCompute(fMul, 2, 3));
// console.log("fDiv: " + fCompute(fDiv, 2, 3));
