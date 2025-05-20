const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const quantityEl = document.getElementById("quantity");
const totalEl = document.getElementById("total");

let quantity = parseInt(quantityEl.textContent);
const pricePerItem = 5.39;

function updateDisplay() {
  // آپدیت مقدار سفارش
  quantityEl.textContent = quantity;

  // انیمیشن عدد سفارش
  quantityEl.classList.remove("pop-animation");
  void quantityEl.offsetWidth;
  quantityEl.classList.add("pop-animation");

  // آپدیت قیمت کل
  totalEl.textContent = (quantity * pricePerItem).toFixed(2);
}

increaseBtn.addEventListener("click", () => {
  quantity++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    updateDisplay();
  }
});

updateDisplay(); 

document.getElementById("order-btn").addEventListener("click", function () {
  window.location.href = "order.html";
});
