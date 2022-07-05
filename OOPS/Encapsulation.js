/*
Encapsulation => The process of wrapping property and function within a single unit is known as encapsulation.
*/

class BankAccount {
    #ballance = 0
    customer_name
    constructor(customer_name, ballance = 0) {
        this.customer_name = customer_name;
        this.account_no = Date.now();
        this.#ballance = ballance
    }

    set ballance(amount){

        if(isNaN(amount)){
            throw new Error("entered amount is invalid")
        }else{
            this.#ballance = amount;
        }
    }

    get ballance(){
        return this.#ballance
    }
}

const john_Account = new BankAccount("John Doe", 5000);

console.log(john_Account)   // ballance will not shown

john_Account.ballance = 10000  // we can set private property

console.log(john_Account.ballance)  // we can get private property outside class
