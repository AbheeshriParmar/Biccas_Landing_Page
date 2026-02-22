let hamIcon = document.querySelector(".ham-icon");
let navMenu = document.querySelector(".main-menus");

hamIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
