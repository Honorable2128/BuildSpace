const transactions = [
  {
    id: 1,
    type: "credit",
    amount: 60000,
    date: "2026-01-05",
  },
  {
    id: 2,
    type: "debit",
    amount: 12000,
    date: "2026-01-08",
  },
  {
    id: 3,
    type: "credit",
    amount: 80000,
    date: "2026-01-15",
  },
  {
    id: 4,
    type: "debit",
    amount: 45000,
    date: "2026-01-08",
  },
  {
    id: 5,
    type: "credit",
    amount: 150000,
    date: "2026-02-02",
  },
  {
    id: 6,
    type: "debit",
    amount: 2000,
    date: "2026-02-10",
  },
  { id: 7, type: "credit", amount: 90000, date: "2026-03-05" },
  {
    id: 8,
    type: "debit",
    amount: 1000,
    date: "2026-03-20",
  },
  { id: 9, type: "credit", amount: 55000, date: "2026-03-21" },
  {
    id: 10,
    type: "debit",
    amount: 1000,
    date: "2026-03-29",
  },
];

function getBalance(transactions) {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "credit") {
      return balance + transaction.amount;
    } else {
      return balance - transaction.amount;
    }
  }, 0);
}

function getTransactionByType(transactions, type) {
  return transactions.filter((transaction) => transaction.type === type);
}

function getLargestTransaction(transactions) {
  return transactions.reduce((highest, transaction) => {
    if (transaction.amount > highest.amount) {
      return transaction;
    } else {
      return highest;
    }
  });
}

// Tricky -  AI support
function getMonthlyTotals(transactions) {
  return transactions.reduce((totals, transaction) => {
    const month = transaction.date.slice(0, 7);
    if (!totals[month]) {
      totals[month] = 0;
    }

    if (transaction.type === "credit") {
      totals[month] += transaction.amount;
    } else {
      totals[month] -= transaction.amount;
    }
    return totals;
  }, {});
}

console.log(getMonthlyTotals(transactions));
