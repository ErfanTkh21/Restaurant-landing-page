const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const quantityEl = document.getElementById("quantity");

let quantity = parseInt(quantityEl.textContent);

increaseBtn.addEventListener("click", () => {
  quantity++;
  quantityEl.textContent = quantity;
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityEl.textContent = quantity;
  }
});
