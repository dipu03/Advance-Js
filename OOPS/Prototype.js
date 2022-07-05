// ProtoType

function BankAccount ( customer_name, ballance=0 ) {
    this.customer_name = customer_name;
    this.account_No = Date.now();
    this.ballance = ballance
}

BankAccount.prototype.deposit = function (amount){
    this.ballance += amount
}

BankAccount.prototype.widrawal = function (amount){
    this.ballance -= amount
}

const john_Account = new BankAccount("John Doe", 5000);
john_Account.deposit(500);
john_Account.widrawal(200)
console.log(john_Account)