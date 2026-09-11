// ==========================================
// PHARMACY SHOP CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("pharmacyCart")) || [];

// ==========================================
// PRODUCT INFORMATION
// ==========================================

const products = [
  {
    name: "Auntie Mary's Gripe Mixture",
    price: 25,
    category: "Medicines",
  },
  {
    name: "Daily Multivitamins",
    price: 65,
    category: "Vitamins",
  },
  {
    name: "Digital Thermometer",
    price: 45,
    category: "Medical Devices",
  },
  {
    name: "Body Lotion",
    price: 55,
    category: "Personal Care",
  },
  {
    name: "Adhesive Bandages",
    price: 30,
    category: "First Aid",
  },
  {
    name: "Antibacterial Soap",
    price: 22,
    category: "Personal Care",
  },
  {
    name: "Blood Pressure Monitor",
    price: 180,
    category: "Medical Devices",
  },
  {
    name: "Baby Care Essentials",
    price: 75,
    category: "Baby Care",
  },
  {
    name: "Oral Rehydration Salts",
    price: 18,
    category: "Healthcare",
  },
  {
    name: "Dental Care Kit",
    price: 48,
    category: "Personal Care",
  },
  {
    name: "Disposable Gloves",
    price: 35,
    category: "First Aid",
  },
  {
    name: "Baby Moisturizing Lotion",
    price: 62,
    category: "Baby Care",
  },
];

// ==========================================
// ADD TO CART
// ==========================================

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = products[index];

    addToCart(product);
  });
});

// ==========================================
// ADD PRODUCT
// ==========================================

function addToCart(product) {
  const existingProduct = cart.find((item) => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      ...product,
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
// UPDATE CART NUMBER
// ==========================================

function updateCartCount() {
  const cartCount = document.querySelector(".cart-icon small");

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
// CART ICON
// ==========================================

const cartButton = document.querySelector(".cart-icon");

if (cartButton) {
  cartButton.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
}

// ==========================================
// INITIAL CART COUNT
// ==========================================

updateCartCount();
