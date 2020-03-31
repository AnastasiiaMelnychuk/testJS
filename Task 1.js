var totalPrice;
var saved;
var fullPrice = parseFloat(prompt('Enter price without discount',));
var discount = parseFloat(prompt('Enter the discount',));

if (fullPrice >= 0 && discount >= 0) {
  totalPrice = fullPrice * (100 - discount) / 100;
  saved = fullPrice - totalPrice;
  
  console.log(`
  Price without discount: ${parseFloat(fullPrice.toFixed(2))}
  Discount: ${parseFloat(discount.toFixed(2))} %
  Price with discount: ${parseFloat(totalPrice.toFixed(2))}
  Saved: ${parseFloat(saved.toFixed(2))}`);
} else {
  console.log('Invalid data');
}
