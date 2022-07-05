// Currying

// older method 
function sum1(a, b, c){
    return a+b+c
}

//      ||
//      ||

// new with currying
let sum = function (a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

let res = sum(2)(5)(3);
console.log(res)


// Real Example
let obj = {
    name : "sumit",
    age : 25
}

function user(myObj){
    return function (objInfo){
        return myObj[objInfo]
    }
}

let ans = user(obj)
console.log(ans("name"))
console.log(ans("age"))