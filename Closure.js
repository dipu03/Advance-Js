// Function along with it's lexical Scope bundle Together forms a closure
function sum(){
    let a = 10;
    let b = 10;
    return function (){
        return a+b
    }
}

let ans = sum();
console.log(ans())


// ------------------------------------------------
function a(){
    let x = 10;
    function b(){
        let y = 20;
        function c(){
            let z = 30
            console.log(x+y+z)
        }
        c()
    }
    b()
}
a()