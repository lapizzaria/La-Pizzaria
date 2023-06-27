// Function to handle the "Add to Cart" button click
function addToCart() {
  // Show the "Place an Order" page
  document.getElementById("place-order-page").classList.add("show");
}

// Function to handle the order form submission
document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission (for demonstration purposes)

  // Retrieve customer details from form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Process the order (e.g., send to server, store in database, etc.)
  // You can add additional logic here based on your requirements

  // Display a success message (you can customize this message)
  var success;
}
