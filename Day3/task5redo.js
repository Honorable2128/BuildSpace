const prices = [1000, 2500, 5000, 7500, 10000];

function discountedPrices(prices){
    return prices.map(price => price * 0.9);
}

function priceAbove5000(prices){
    return prices.filter(price => price > 5000);
}

function PricesBelow5000(prices) {
    return prices.filter(price => price < 5000);
}

function sortPrices(prices) {
    return [...prices].sort((a, b) => a - b);
}

console.log("Discounted prices:", discountedPrices(prices));
console.log("Prices above 5000:", priceAbove5000(prices));
console.log("Prices below 5000:", PricesBelow5000(prices));
console.log("Sorted prices:", sortPrices(prices));