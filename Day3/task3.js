
const cart = [
    { name: "Laptop", price: 350000, quantity: 1 },
    { name: "Phone", price: 180000, quantity: 2 },
    { name: "Headphones", price: 15000, quantity: 3 },
    { name: "Keyboard", price: 12000, quantity: 2 },
    { name: "Mouse", price: 8000, quantity: 1 }
];

function countProducts() {
    return cart.length;
}

function calculateTotal() {
    return cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
}

function findMostExpensive() {
    return cart.reduce((mostExpensive, product) =>
        product.price > mostExpensive.price ? product : mostExpensive
    );
}

function findCheapest() {
    return cart.reduce((cheapest, product) =>
        product.price < cheapest.price ? product : cheapest
    );
}

console.log("Number of products:", countProducts());
console.log("Total cart value: ₦" + calculateTotal());
console.log("Most expensive:", findMostExpensive().name);
console.log("Cheapest:", findCheapest().name);
