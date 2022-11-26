//Programs dropdown menu event listener
const dropDown = document.querySelector(".programs-dropdown");
document.addEventListener("click", function (e) {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  const isDropdown = e.target.matches("[data-dropdown]");

  //do nothing if inside dropdown
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) {
    return;
  }

  let currentDropdown;
  if (isDropdownButton) {
    // toggles active class for dropdown otherwise
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  } else if (!isDropdown) {
    currentDropdown = e.target.closest("[data-dropdown]");
    dropDown.classList.remove("active");
  }
});

//
const nav = document.querySelector("#nav");
const navToggleBtn = document.querySelector("#nav-toggle");
navToggleBtn.addEventListener("click", () => {
  console.log("navToggleBtn clicked");
  nav.classList.toggle("visible");
});
