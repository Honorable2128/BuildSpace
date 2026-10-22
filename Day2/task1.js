// Temperature Converter
function celsiusToFahrenheit(scale) {
  if (typeof scale !== "number" ||Number.isNaN(scale)) {
    return "You can't convert non-number input";
  }
  return (scale * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(30));

function fahrenheitToCelsius(scale) {
  if (typeof scale !== "number" || Number.isNaN(scale)) {
    return "You can't convert non-number input";
  }
  return ((scale - 32) * 5) / 9;
}

console.log(fahrenheitToCelsius(86));
