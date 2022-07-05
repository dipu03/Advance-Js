// CallBack  function :- When a function pass as an argument it is called call bac function.
// call back can sync or async, it is depends in which condition it is using


// Sync call back
function printName(){
    console.log("What is Your Name")
    getName()
}

function getName(){
    console.log("i am sumit")
}

printName()


// Async Call Back

function payment_status(){
    console.log("i am before payment")
    setTimeout(() => {
        console.log("i am inside setTimeOut")
    }, 5000)
    console.log("I am after Payment")
}

payment_status()
