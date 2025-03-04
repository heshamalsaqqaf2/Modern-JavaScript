'use strict';

// TODO: Encapsulation and Privacy

//? Private Fields (Modern Way)
class BankAccount {
    #balance = 0;  // Private field
    #transactions = [];

    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance;
            this.#logTransaction('initial deposit', initialBalance);
        }
    }
    // Public methods to interact with private fields
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {   
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
        this.#logTransaction('deposit', amount);
        return this.#balance;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
        this.#logTransaction('withdrawal', amount);
        return this.#balance;
    }
    // Private method
    #logTransaction(type, amount) {
        this.#transactions.push({
            type,
            amount,
            date: new Date()
        });
    }
    // Public method to view transaction history
    getTransactionHistory() {
        // Return a copy to prevent modification
        return [...this.#transactions];
    }
}

const account = new BankAccount(1000);

console.log(account.getBalance());  // 1000
account.deposit(500);               // Works
account.withdraw(200);              // Works

// console.log(account.#balance);   //! Error! Can't access private field
// account.#logTransaction();       //! Error! Can't access private method 