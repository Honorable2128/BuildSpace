// Build a product object
const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 1200,
  category: "Accessories",
  inStock: true,
};

function formatProduct(name, price, inStock) {
  const stockStatus = inStock ? "In Stock" : "Out of Stock";
  return `${name} - NGN ${price} ${stockStatus}`;
}

console.log(formatProduct("Wireless Mouse", 1200, true));

// task2
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 1200,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Laptop",
    price: 30000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "Solar Panel",
    price: 20000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 4,
    name: "Invisible Mouse",
    price: 2500,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 5,
    name: "Wireless Keyboard",
    price: 1000,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 6,
    name: "Monitor",
    price: 1500,
    category: "Accessories",
    inStock: true,
  },
];

function getInStockProducts(products){
    return products.filter((item) => item.inStock == true)
}

function getProductNames(products){
  return products.map((item) => item.name)
}

function findProductById(products, id){
  return products.find((item) => item.id === id )
}

function getTotalCatalogValue(products){
  return product.reduce((total_price, item) => total_price + item.price, 0)
}
console.log(getTotalCatalogValue(products));

