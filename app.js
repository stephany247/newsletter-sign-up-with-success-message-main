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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    emailError.textContent = "Email cannot be empty";
    emailError.classList.remove("hidden");
    emailInput.classList.add("border-tomato");
    return;
  }

  if (!isValidEmail(emailValue)) {
    emailError.textContent = "Valid email required";
    emailError.classList.remove("hidden");
    emailInput.classList.add("border-tomato");
    emailInput.classList.add("bg-pink-200/50");
    return;
  }

  emailError.classList.add("hidden");
  successModal.classList.remove("hidden");
  homePage.classList.add("hidden");
  homePage.classList.add("sm:hidden");
  userEmail.textContent = emailValue;
});

dismissBtn.addEventListener("click", () => {
  successModal.classList.add("hidden");
  homePage.classList.remove("hidden");
  homePage.classList.remove("sm:hidden");
  emailInput.classList.remove("bg-pink-200/50");
  emailInput.value = "";
});

emailInput.addEventListener("input", () => {
  emailError.classList.add("hidden");
  emailInput.classList.remove("border-tomato");
});
