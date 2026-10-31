const transactions = [
  {
    id: 1,
    type: "credit",
    amount: 60000,
  },
  {
    id: 2,
    type: "debit",
    amount: 12000,
  },
  {
    id: 3,
    type: "credit",
    amount: 80000,
  },
  {
    id: 4,
    type: "debit",
    amount: 45000,
  },
];

function groupBy(transactions,key){
    return transactions.reduce((groups, item) => {
        const value = item[key]

        if(!groups[value]){
            groups[value] =[]
        }

        groups[value].push(item);

        return groups
    0
}, {})
}

const products = [
    {name: "Laptop", price: 350000},
    {name: "Phone", price: 450000},
    {name: "Printer", price: 180000},
    {name: "Mouse", price: 3000},

]

function sumBy(products, key){
    return products.reduce((total, item) => {
        return total + Number(item[key] || 0)
    }, 0)
}


console.log(sumBy(products, "price"));
