## Title: Bank Account Management Website

### Introduction:

The Bank Account Management website is a simulation that allows users to manage a bank account. This web application incorporates classes, switch statements, and try-catch-finally statements to provide a robust and user-friendly experience.

### Instructions:

- View Account Information: When you first load the website, you'll see the account holder's name, account type, and initial balance displayed.

- Deposit Funds: To deposit money, enter the desired amount in the "Amount" field and click the "Deposit" button. Ensure that the amount is greater than zero and not empty. Successful deposits will be reflected in the balance.

- Withdraw Funds: To withdraw money, enter the desired amount in the "Amount" field and click the "Withdraw" button. Make sure the amount is valid, and you have sufficient funds. Successful withdrawals will be subtracted from the balance.

### Walkthrough of Code:

1. Classes for Structured Code:
   The BankAccount class encapsulates the account details and contains methods for depositing and withdrawing funds. Properties like account holder name, account type, and balance are stored within this class.

2. Switch-Case for Transaction Handling:
   Switch statements are employed to differentiate between deposit and withdrawal transactions. Depending on the user's action, the appropriate method (deposit or withdraw) is called to handle the transaction.

3. Try-Catch-Finally for Error Handling:
   The try-catch-finally statements ensure error-free operation. When users deposit or withdraw, these statements handle exceptions such as invalid inputs, insufficient funds, or empty fields. Error messages are displayed to guide users, preventing crashes and enhancing user experience.
