// It is a Blueprint of object by using this blue print we can make as many object as we can

class BankAccount {

    constructor( customer_name, ballance =0 ) {
        this.customer_name = customer_name
        this.account_No = Date.now()
        this.ballance = ballance
    }

    deposit(amount){
        this.ballance += amount
    }

    widrawal(amount){
        this.ballance -= amount
    }
}

const sumit_Account = new BankAccount("Sumit",1000)
sumit_Account.deposit(1000)
sumit_Account.widrawal(500)
console.log(sumit_Account)

const john_Account = new BankAccount("John Doe");
john_Account.deposit(5000);
john_Account.widrawal(2000);
console.log(john_Account)