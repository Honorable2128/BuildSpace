const food = 5000;
const transport = 3000;
const internet = 7000;
const entertainment = 4000;
const income = 100000;

// Total Expenses
const totalExpenses = food + transport + internet + entertainment;
console.log(`The Total Expenses : ${totalExpenses}`);

// Average Expense
const averageExpense = totalExpenses / 4;
console.log(`The total Average Expense: ${averageExpense}`);

// Find the highest expense
const highestExpense = Math.max(food, transport, internet, entertainment);
console.log(highestExpense);

// calculate remaining money
const remainingMoney = income - totalExpenses;
console.log(`Remaining money: ${remainingMoney}`);

function calculateExpenses(food, transport, internet, entertainment) {
  return food + transport + internet + entertainment;
}
console.log(calculateExpenses(1000, 2000, 4000, 5000));
