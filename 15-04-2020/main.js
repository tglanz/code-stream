const lib2 = require('./lib2');

function main() {
    console.log("All keys: " + Object.keys(lib2));
    lib2.ben();
    console.log("NUM STUFF: " + lib2.NUM_STUFF);
}

main();