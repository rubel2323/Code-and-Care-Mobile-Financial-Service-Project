document.getElementById("cash-out-btn").addEventListener("click", function () {
  const cashAmount = parseFloat(
    document.getElementById("cash-out-money").value,
  );
  const pinNumber = document.getElementById("cah-out-pin").value;
  const currentBalance = parseFloat(
    document.getElementById("account-balance").innerText,
  );
  if (pinNumber === "rubel") {
    const netBalance = currentBalance - cashAmount;
    document.getElementById("account-balance").innerText = netBalance;
    document.getElementById("cash-out-money").value = " ";
    document.getElementById("cah-out-pin").value = "";
  } else {
    alert("You made mistake");
  }
});
