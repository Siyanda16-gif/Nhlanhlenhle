import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>
      <div>
      <p>${product.name}</p>
      </div>

      <div class="product-price">
        Rp${formatCurrency(product.priceCents)}
      </div>



      <div class="product-spacer"></div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity10() {
  let cartQuantity10 = 0;

  cart.forEach((cartItem) => {
    cartQuantity10 += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity10;
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity10();
    });
  });
