class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} dollar added.New balance is՝ ${this.balance} dollar`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            console.log(`${amount} dollar has been withdrawn.The new balance is՝ ${this.balance} dollar`)
        } else {
            console.log("Insufficient funds")
        }
    }
}

const myAccount = new BankAccount("Ani")
myAccount.deposit(200)
myAccount.withdraw(300)
console.log(`Final balance՝ ${myAccount.balance} dollar`)
