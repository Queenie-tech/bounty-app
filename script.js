class BankAccount {
    constructor(accountHolder, accountType, initialBalance) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0 || amount === ' ') {
            throw new Error("Amount should not be empty and must be greater than zero.");
        }
        this.balance = Number(amount) + this.balance;
        console.log(this.balance)
        console.log(typeof this.balance)
    }

    withdraw(amount) {
        if (amount <= 0 || amount === ' ') {
            throw new Error("Amount should not be empty and must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
    }
}
let accountName = document.getElementById('account-holder');
let accountType = document.getElementById('account-type');
let balance = document.getElementById('balance')

const account = new BankAccount("Blessed", "Savings", 10);
accountName.textContent = account.accountHolder;
accountType.textContent = account.accountType;
balance.textContent = account.balance

let amount = document.getElementById("transaction-amount")
document.getElementById("deposit-btn").addEventListener("click", () => {
     try {
        account.deposit(amount.value);
        updateAccountInfo();
        displayResult(`Successfully deposited $${amount.value}`, true);
    } catch (error) {
        displayResult(error.message, false);
    }
    amount.value = '';
});

document.getElementById("withdraw-btn").addEventListener("click", () => {
     try {
        account.withdraw(amount.value);
        updateAccountInfo();
        displayResult(`Successfully withdrew $${amount.value}`, true);
    } catch (error) {
        displayResult(error.message, false);
    }

    amount.value = '';

});

function updateAccountInfo() {
    document.getElementById("account-holder").textContent = account.accountHolder;
    document.getElementById("account-type").textContent = account.accountType;
    document.getElementById("balance").textContent = `$${account.balance}`;
}

function displayResult(message, response) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
    resultElement.className = response ? 'btn-success': 'btn-danger'
}


