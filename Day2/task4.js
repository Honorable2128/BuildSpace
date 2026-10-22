const product1 = 15000;
const product2 = 25000;
const product3 = 10000;

function calculateSubtotal() {
  return product1 + product2 + product3;
}

function calculateDiscount() {
  const subtotal = calculateSubtotal();

  if (subtotal <= 20000) {
    return 0;
  } else if (subtotal <= 50000) {
    return subtotal * 0.05;
  } else {
    return subtotal * 0.1;
  }
  
}

function calculateFinalTotal() {
  return calculateSubtotal() - calculateDiscount();
}
console.log(`Subtotal:  ${calculateSubtotal()}`);
console.log(`Subtotal:  ${calculateDiscount()}`);
console.log(`Subtotal:  ${calculateFinalTotal()}`);
