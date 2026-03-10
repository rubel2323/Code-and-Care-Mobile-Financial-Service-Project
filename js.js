document.getElementById("login-btn").addEventListener("click", function () {
  // event.preventDefault();
  const phoneBtn = document.getElementById("input-phone-btn");
  const phoneNumber = phoneBtn.value;
  const pinBtn = document.getElementById("input-pin-btn");
  const pinNumber = pinBtn.value;
  if (phoneNumber === "017" && pinNumber === "codeandcare") {
    console.log(alert(phoneNumber + " | " + pinNumber));
    console.log("You are verified");
    window.location.href = "home.html";
  } else {
    alert("You entered wrong information");
  }
});
