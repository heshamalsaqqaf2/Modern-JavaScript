'use strict';

// TODO: Modern JavaScript also supports private fields using #:
class BankAccount {
    #balance = 0;  // Private field

    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance;
        }
    }

    deposit(amount) {
        this.#balance += amount;
        this.#logTransaction('deposit', amount);
    }

    getBalance() {
        return this.#balance;
    }

    #logTransaction(type, amount) {
        console.log(`${type}: ${amount}`);
    }
}

const account = new BankAccount(100);
console.log(account.getBalance()); // 100

console.log(account.balance); //! undefined
// account.logTransaction(); //! Error! account.logTransaction is not a function

// console.log(account.#balance); //! Error!
// account.#logTransaction(); //! Error!