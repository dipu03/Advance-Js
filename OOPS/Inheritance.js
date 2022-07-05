/*
Inheritance – It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects. 

*/

class BankAccount {
    constructor( customer_name, ballance =0 ) {
        this.customer_name = customer_name;
        this.account_no = Date.now();
        this.ballance = ballance
    }

    getLoan(amount){
        console.log("i am taking loan of : "+ amount)
    }

    deposit(amount){
        this.ballance += amount
    }

    widrow(amount){
        this.ballance -= amount
    }
}

class Curr_Account extends BankAccount {
    constructor( customer_name, ballance=0, transactionLimit ) {
        super(customer_name, ballance)
        this.transactionLimit = transactionLimit
    }

    getLoan(amount){
        console.log("i am taking loan :  " + amount)
    }
}


const john_Account = new Curr_Account("John Doe", 10000, 50000);
john_Account.deposit(5000);
john_Account.widrow(2000)
john_Account.getLoan(2000)
console.log(john_Account)





/*
Method Overriding =>  Method Overriding allows method in a child class to have the same name and method signature as that of a parent class. 
here we use get loan method in both child and parent class
*/