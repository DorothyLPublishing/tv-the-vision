const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const bookingForm = document.querySelector("#booking-form");
const serviceSelect = bookingForm?.querySelector('select[name="service"]');
const formStatus = document.querySelector("#form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => {
    if (serviceSelect) serviceSelect.value = button.dataset.service;
  });
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const name = formData.get("name") || "Client";
  formStatus.textContent = `Thank you, ${name}. This demo request was captured on-screen. Connect the form to TV's chosen booking service before launch.`;
  bookingForm.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
