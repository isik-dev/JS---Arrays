const account = {
    name:'David Bowie',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpense = 0
        let totalIncome = 0
        let totalBalance= 0

        this.expenses.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        totalBalance = totalIncome - totalExpense
        return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpense} in expenses.`
    }
     
}




// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> David Bowie has $1250 in expenses.


// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// David Bowie has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
