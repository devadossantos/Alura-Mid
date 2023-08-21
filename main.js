function tocaSom(idElementAudio){
   document.querySelector(idElementAudio).play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");

for(i = 0; i < ListaDeTeclas.length; i++){
ListaDeTeclas[i].onclick = tocaSom;
}


