//catch the button by Id step-1;
const addMoneyConfirm = document
  .getElementById("add-money-btn")
  .addEventListener("click", function () {
    // step-2: get input field from the form

    const inputMoneyBtn = document.getElementById("input-money-btn").value;

    const inputPinBtn = document.getElementById("input-pin-btn").value;

    // step-3; get the information about user main account and process
    const balance = document.getElementById("account-balance").innerText;
    let primaryBalance = parseFloat(balance);
    let secondaryUserMoney = parseFloat(inputMoneyBtn);
    const totalBalance = primaryBalance + secondaryUserMoney;

    // step-4 : verify user and result
    if (inputPinBtn === "codeandcare") {
      document.getElementById("account-balance").innerText = totalBalance;
      document.getElementById("input-money-btn").value = "";
      document.getElementById("input-pin-btn").value = "";
      console.log(totalBalance);
    } else {
      alert("Your pin is wrong");
    }
  });
