var a = 20;
console.log(typeof(a));

let s ="Hello";
console.log(typeof(s));

const b = true;
console.log(typeof(b));

// let behaviour on re-assignment (no error)
let num = 10;
console.log(num);
num = "change"
console.log(num);

// const behaviour on re-assignment (const cannot be re-assigned and the program
// never reaches the last console log statement)
const check = 50;
console.log(check);
check = 22;
console.log(check);