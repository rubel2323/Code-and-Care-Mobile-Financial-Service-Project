const addMoneyConfirm = document
  .getElementById("add-money-btn")
  .addEventListener("click", function () {
    const inputMoneyBtn = document.getElementById("input-money-btn").value;

    const inputPinBtn = document.getElementById("input-pin-btn").value;
    const balance = document.getElementById("account-balance").innerText;
    let primaryBalance = parseFloat(balance);
    let secondaryUserMoney = parseFloat(inputMoneyBtn);
    const totalBalance = primaryBalance + secondaryUserMoney;

    if (inputPinBtn === "codeandcare") {
      document.getElementById("account-balance").innerText = totalBalance;
      document.getElementById("input-money-btn").value = "";
      document.getElementById("input-pin-btn").value = "";
      console.log(totalBalance);
    } else {
      alert("Your pin is wrong");
    }
  });
