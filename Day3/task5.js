
const prices = [1000, 2500, 5000, 7500, 10000];

const discountedPrices = prices.map(price => price * 0.90);

const pricesAbove5000 = prices.filter(price => price > 5000);

const pricesBelow5000 = prices.filter(price => price < 5000);

const sortedPrices = [...prices].sort((a, b) => a - b);

console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);
console.log("Prices above 5000:", pricesAbove5000);
console.log("Prices below 5000:", pricesBelow5000);
console.log("Sorted prices:", sortedPrices);
