//Programs dropdown menu event listener
document.addEventListener("click", function (e) {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  //do nothing if inside dropdown
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) { // toggles active class for dropdown otherwise
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle('active');
  }
});
