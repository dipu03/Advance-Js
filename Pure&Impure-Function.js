// Pure Function
// function sum(a, b){
//     return a+b
// }
// let a = 10;
// let b = 20;
// console.log(sum(a, b));
// console.log(sum(a, b));
// console.log(sum(a, b));

// Impure Function
let a = 1;
function sum(b){
    a = a+b;
    return a
}

console.log(a) // 1
console.log(sum(5));
console.log(a) // 6
console.log(sum(5));
console.log(a) // 11
console.log(sum(5));
