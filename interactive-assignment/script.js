// --------- FORM VALIDATION --------------------------
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Custom validation rules
  if (username.length < 3) {
    message = "Username must be at least 3 characters long.";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "Please enter a valid email address.";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters.";
  } else {
    message = "Form submitted successfully ✅";
  }

  // Show validation message
  document.getElementById("formMessage").innerText = message;
});


// --------- FEATURE 1: CHANGE BACKGROUND --------------------------
document.getElementById("bgBtn").addEventListener("click", function() {
  // Pick a random color
  const colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});


// --------- FEATURE 2: LIVE TEXT PREVIEW ---------------------------
document.getElementById("liveInput").addEventListener("input", function() {
  let text = document.getElementById("liveInput").value;
  document.getElementById("previewText").innerText = text;
});