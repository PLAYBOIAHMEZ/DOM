const cards = document.querySelectorAll(".card");

//card object (like DOM)
cards.forEach(function (card) {
  //card is now being used as an object representing each of the three cards
  const plusButton = card.querySelector(".fa-plus-circle");
  const minusButton = card.querySelector(".fa-minus-circle");
  const trashButton = card.querySelector(".fa-trash-alt");
  const quantityElement = card.querySelector(".quantity");
  const likeButton = card.querySelector(".fa-heart");

  //for liking the item
  likeButton.addEventListener("dblclick", function () {
    likeButton.classList.add("fa-heart-like");
  });

  //for not liking the item (neutral)
  likeButton.addEventListener("click", function () {
    likeButton.classList.remove("fa-heart-like");
  });

  //for quantity addition (and updating of the total)
  plusButton.addEventListener("click", function () {
    const quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotal();
  });

  //for quantity subtraction (and updating of the total)
  minusButton.addEventListener("click", function () {
    const quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotal();
    }
  });

  //for item removal (and updating of the total)
  trashButton.addEventListener("click", function () {
    card.style.display = "none";
    updateTotal();
  });
});

// function for updating the total
function updateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    // iterates over each card and gets the current quantity and unit price values
    if (card.style.display !== "none") {
      const quantityElement = card.querySelector(".quantity");
      const unitPriceElement = card.querySelector(".unit-price");

      const quantity = parseInt(quantityElement.textContent);
      const unitPrice = parseInt(unitPriceElement.textContent);

      total += quantity * unitPrice;
    }
  });

  const totalDiv = document.querySelector(".total");
  totalDiv.textContent = "$" + total;
}
