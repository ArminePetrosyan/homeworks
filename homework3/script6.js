let cart = [];

function addProduct(product) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].SKU === product.SKU) {
      cart[i].quantity += product.quantity;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push(product);
  }
}

addProduct({ name: "Product A", SKU: "SKU1", price: 20, quantity: 2 });
addProduct({ name: "Product A", SKU: "SKU1", price: 20, quantity: 2 });
addProduct({ name: "Product A", SKU: "SKU4", price: 20, quantity: 2 });
// addProduct({ name: "Product A", SKU: "SKU3", price: 20, quantity: 2 });

// console.log(cart, "cart");

function removeProduct(SKU) {
  let indexToRemove = -1;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].SKU === SKU) {
      indexToRemove = i;
      break;
    }
  }

  if (indexToRemove !== -1) {
    cart[indexToRemove] = cart[cart.length - 1];
    cart.pop();
  }
}

// removeProduct("SKU3");
// console.log(cart, "cart");

function updateQuantity(SKU, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].SKU === SKU) {
      cart[i].quantity = quantity;
      break;
    }
  }
}

// updateQuantity("SKU1", 3);
// console.log(cart);

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// const total = calculateTotal();
// console.log("Total price:", total);

function getCartDetails() {
  return cart;
}

function applyDiscount(discountCode) {
  const discountRate = discountCode || 0;

  const total = calculateTotal();
  console.log(total);
  const discountedTotal = total * (1 - discountRate / 100);

  return discountedTotal;
}
// console.log(getCartDetails());

// console.log("Discounted total price:", applyDiscount(20));
