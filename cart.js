// ==========================================
// PHARMACY SHOP CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("pharmacyCart")) || [];

// ==========================================
// ADD TO CART BUTTONS
// ==========================================

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get product information directly from the button
    const product = {
      name: this.dataset.name,
      price: parseFloat(this.dataset.price),
      category: this.dataset.category,
      icon: this.dataset.icon || "💊",
    };

    addToCart(product);
  });
});

// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addToCart(product) {
  const existingProduct = cart.find((item) => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      category: product.category,
      icon: product.icon,
      quantity: 1,
    });
  }

  saveCart();

  updateCartCount();

  showCartMessage(product.name);
}

// ==========================================
// SAVE CART
// ==========================================

function saveCart() {
  localStorage.setItem("pharmacyCart", JSON.stringify(cart));
}

// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");

  if (!cartCount) return;

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  cartCount.textContent = totalItems;
}

// ==========================================
// CART MESSAGE
// ==========================================

function showCartMessage(productName) {
  const message = document.createElement("div");

  message.className = "cart-message";

  message.innerHTML = `
        <span>✓</span>
        ${productName} added to cart
    `;

  document.body.appendChild(message);

  setTimeout(() => {
    message.classList.add("show");
  }, 10);

  setTimeout(() => {
    message.classList.remove("show");

    setTimeout(() => {
      message.remove();
    }, 300);
  }, 2500);
}

// ==========================================
// INITIAL CART COUNT
// ==========================================

updateCartCount();
