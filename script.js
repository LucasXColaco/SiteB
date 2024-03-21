function openMenu() {
  menu.style.display = "flex";
  menuicon.style.display = "none";
  document.body.style.overflowY = 'hidden'
}

function closeMenu() {
  menu.style.display = "none";
  menuicon.style.display = "block";
  document.body.style.overflowY = 'scroll'
}
