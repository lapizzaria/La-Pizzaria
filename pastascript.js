// Cart array to store the added items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Create an object for the item
  const item = {
    name: itemName,
    price: itemPrice
  };

  // Add the item to the cart
  cartItems.push(item);

  // Show a confirmation message
  alert(`Added ${itemName} to the cart!`);
}

// Get all the quantity input fields
const quantityInputs = document.querySelectorAll('.item-quantity input');

// Add event listener to each quantity input
quantityInputs.forEach(input => {
  input.addEventListener('change', updateTotal);
});

// Get all the minus and plus buttons
const minusButtons = document.querySelectorAll('.quantity-btn.minus');
const plusButtons = document.querySelectorAll('.quantity-btn.plus');

// Add event listener to each minus button
minusButtons.forEach(button => {
  button.addEventListener('click', decreaseQuantity);
});

// Add event listener to each plus button
plusButtons.forEach(button => {
  button.addEventListener('click', increaseQuantity);
});

// Function to decrease the quantity
function decreaseQuantity(event) {
  const input = event.target.nextElementSibling;
  const currentValue = parseInt(input.value);
  const minValue = parseInt(input.min);
  
  if (!isNaN(currentValue) && currentValue > minValue) {
    input.value = currentValue - 1;
    updateTotal();
  }
}

// Function to increase the quantity
function increaseQuantity(event) {
  const input = event.target.previousElementSibling;
  const currentValue = parseInt(input.value);
  const maxValue = parseInt(input.max);

  if (!isNaN(currentValue) && currentValue < maxValue) {
    input.value = currentValue + 1;
    updateTotal();
  }
}

// Function to calculate and update the total
function updateTotal() {
  // Remaining code remains the same
  // ...
}

// Get the cart count element
const cartCount = document.querySelector('.cart-count');

// Initialize the cart count to 0
let count = 0;

// Function to update the cart count
function updateCartCount(newCount) {
  count = newCount;
  cartCount.textContent = count;
}

// Example usage: Add an item to the cart
function addToCart() {
  count++;
  updateCartCount(count);
}

// Example usage: Remove an item from the cart
function removeFromCart() {
  if (count > 0) {
    count--;
    updateCartCount(count);
  }
}

// Example event listeners
document.querySelector('.add-to-cart-button').addEventListener('click', addToCart);
document.querySelector('.remove-from-cart-button').addEventListener('click', removeFromCart);

function openCheckout() {
  // Open the checkout page in a new window or tab
  window.open('checkout.html', '_blank');
}

