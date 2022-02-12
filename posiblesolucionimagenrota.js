let fotocargada=document.querySelectorAll(".fotoRelacionada")

for (foto of fotocargada) {
  if (foto.getAttribute("src","undefined")) {
    foto.remove()
}
}
