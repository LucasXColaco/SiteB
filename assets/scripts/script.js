function openMenu() {
  menu.style.display = "flex";
  menu.style.animation = "fadein 0.3s";
  document.body.style.overflowY = "hidden";
  whatsapp.style.display = "none";
  whatsapp.style.animation = "fadeout 0.3s";
}

function closeMenu() {
  menu.style.animation = "fadeoutmenu 0.3s";
  setTimeout(300)
  menu.style.display = "none";
  document.body.style.overflowY = "visible";
  whatsapp.style.display = "block";
  whatsapp.style.animation = "fadein 0.3s";
}

function mudouTamanho(){
  if (window.innerWidth >= 768){
    menu.style.display = "flex";
    document.getElementsByClassName('material-symbols-outlined').style.display = 'none';
  }
  else{
    menu.style.display = "none";
    document.getElementsByClassName('material-symbols-outlined').style.display = 'block';
  }
}
