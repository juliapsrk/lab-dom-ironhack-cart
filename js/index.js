// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = price.innerText * quantity.value;
  return +(price.innerText * quantity.value);
}

function calculateAll() {
  /*
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  */

  // ITERATION 2 + 3
  //... your code goes here
  const products = document.getElementsByClassName('product');
  const totalPrice = document.querySelector('#total-value span');

  let totalValue = 0;
  [...products].forEach((product) => (totalValue += updateSubtotal(product)));

  totalPrice.innerText = totalValue;
}

/*
  // ITERATION 2
  const products = document.getElementsByClassName('product');

  [...products];

  let totalPrice = document
    .getElementById('total-value')
    .getElementsByTagName('span');

  let sum = 0;
  [...products].forEach((product) => (sum += updateSubtotal(product)));

  totalPrice.innerText = sum;
}
*/

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
