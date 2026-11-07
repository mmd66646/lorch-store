
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// باز و بسته کردن منوی موبایل
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // بستن منو بعد از انتخاب هر بخش
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}
