'use strict';

// TODO: ------------------- Use Private Fields Appropriately -------------------
class BankAccount {
    #balance = 0;  // Private - internal state
    accountHolder; // Public - okay to access directly

    deposit(amount) {
        this.#validateAmount(amount);
        this.#balance += amount;
    }

    #validateAmount(amount) {
        if (amount <= 0) throw new Error('Invalid amount');
    }
}

// TODO: ------------------- Implement Method Chaining When Appropriate -------------------
class QueryBuilder {
    #query = '';

    select(fields) {
        this.#query += `SELECT ${fields} `;
        return this;
    }
    from(table) {
        this.#query += `FROM ${table} `;
        return this;
    }
    where(condition) {
        this.#query += `WHERE ${condition}`;
        return this;
    }
    getQuery() {
        return this.#query;
    }
}

const query = new QueryBuilder()
    .select('*')
    .from('users')
    .where('age > 18')
    .getQuery();


// TODO: ------------------- Use Static Methods Judiciously -------------------
class DateUtils {
    static isWeekend(date) {
        const day = date.getDay();
        return day === 0 || day === 6;
    }

    static isBusinessHour(date) {
        const hours = date.getHours();
        return hours >= 9 && hours < 17;
    }
}
