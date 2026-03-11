document.getElementById("cash-out-btn").addEventListener("click", function () {
  const cashAmount = parseFloat(
    document.getElementById("cash-out-money").value,
  );
  console.log("Your cash is", cashAmount);
  const pinNumber = document.getElementById("cash-out-pin").value;
  console.log("Your Pin is", pinNumber);
  const currentBalance = parseFloat(
    document.getElementById("account-balance").innerText,
  );
  if (pinNumber === "rubel") {
    const netBalance = currentBalance - cashAmount;
    document.getElementById("account-balance").innerText = netBalance;
    document.getElementById("cash-out-money").value = " ";
    document.getElementById("cash-out-pin").value = "";
  } else {
    alert("You made mistake");
  }
});
