document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    const phoneBtn = document.getElementById("input-phone-btn");
    const phoneNumber = phoneBtn.value;
    if (phoneNumber === "017") {
      console.log("Your Phone no is verified");
    } else {
      console.log("Not added");
    }
  });
