const moonButton = document.getElementById("moon-button");
const moonSystem = document.getElementById("moon-system");

if (moonButton && moonSystem) {
  moonButton.addEventListener("click", () => {
    moonSystem.classList.toggle("active");
  });
}