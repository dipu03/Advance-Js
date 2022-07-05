// promise declaration
function Payment() {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {

            const status = false;
            if (status) {
                console.log("Payment Successfull");
                resolve();

            } else {
                console.log("Payment Failed");
                reject();
            }

        }, 5000);
    })
}

Payment().then(function () {
    console.log("Thanks for resolving");

}).catch(function () {
    console.log("task is rejected");

}).finally(function () {
    console.log("i am done");
});




// Promise expression
let myPromise = new Promise(function (resolve, reject) {

    const payment = true;
    if(payment){
        resolve()

    }else{
        reject()
    }
})

myPromise.then( () => {
    console.log("payement is done")

}).catch(() => {
    console.log("payment is failed")
})
