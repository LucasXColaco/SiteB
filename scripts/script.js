function openMenu() {
  menu.style.display = "flex";
  menuicon.style.display = "none";
  document.body.style.overflowY = "hidden";
  whatsapp.style.display = "none";
}

function closeMenu() {
  menu.style.display = "none";
  menuicon.style.display = "block";
  document.body.style.overflowY = "visible";
  whatsapp.style.display = "block";
}
