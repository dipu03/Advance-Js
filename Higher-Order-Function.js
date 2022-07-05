// when a function takes a function as input  or returns a function as output or both called higher order fuction

function add(a, b){
    return a+b
}

function sum(a, b, fn){
    let result = fn(a, b);
    console.log(result)
}
sum(2, 4, add)