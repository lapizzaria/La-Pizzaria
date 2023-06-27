document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
  
    // Validate the form fields
    if (name.trim() === '' || email.trim() === '' || address.trim() === '') {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // Perform any necessary processing or API calls here
  
    // Show a success message
    var container = document.querySelector('.container');
    container.innerHTML = `
      <div class="success-message">
        <h2>Thank you for your order, ${name}!</h2>
        <p>An email confirmation has been sent to ${email}.</p>
      </div>
    `;
  });

  // Retrieve cart items
var cartItems = getCartItems();

// Function to render cart items
function renderCartItems() {
  var cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
    return;
  }

  var itemsList = document.createElement('ul');
  itemsList.classList.add('cart-items-list');

  cartItems.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.textContent = item;
    itemsList.appendChild(listItem);
  });

  cartItemsContainer.appendChild(itemsList);
}

// Call the renderCartItems function
renderCartItems();
