document
  .getElementById("cash-out-successful")
  .addEventListener("click", function () {
    const cashForm = document.getElementById("cash-out-form");
    cashForm.classList.remove("hidden");
    const addMoneyForm = document.getElementById("add-money-up-btn");
    addMoneyForm.classList.add("hidden");
  });

document
  .getElementById("user-money-add-btn")
  .addEventListener("click", function () {
    const addMoneyForm = document.getElementById("add-money-up-btn");
    addMoneyForm.classList.remove("hidden");
    const cashForm = document.getElementById("cash-out-form");
    cashForm.classList.add("hidden");
  });
