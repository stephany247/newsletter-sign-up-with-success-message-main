const submitBtn = document.getElementById("submit");
const homePage = document.getElementById("homepage");
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const successModal = document.getElementById("successModal");
const dismissBtn = document.getElementById("dismissBtn");
const userEmail = document.getElementById("userEmail");

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// optimize code

// Show error message and apply error styles
const showError = (message) => {
  emailError.textContent = message;
  emailError.classList.remove("hidden");
  emailInput.classList.add("border-tomato", "bg-pink-200/50");
};

// Hide error message and reset styles
const hideError = () => {
  emailError.classList.add("hidden");
  emailInput.classList.remove("border-tomato", "bg-pink-200/50");
};

// Form submit event handler
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  // Validate email
  if (emailValue === "") {
    showError("Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    showError("Valid email required");
  } else {
    hideError();
    successModal.classList.remove("hidden");
    homePage.classList.add("hidden", "sm:hidden");
    userEmail.textContent = emailValue;
  }
});

// Dismiss modal and reset form
dismissBtn.addEventListener("click", () => {
  successModal.classList.add("hidden");
  homePage.classList.remove("hidden", "sm:hidden");
  emailInput.classList.remove("bg-pink-200/50");
  emailInput.value = "";
});

// Hide error on input change
emailInput.addEventListener("input", hideError);