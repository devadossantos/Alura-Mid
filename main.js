function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);


      if (elemento && elemento.localName === 'audio') {
         elemento.play();
      }
      else {
         console.log('Elemento nao encontrado');
      }
   }
const ListaDeTeclas = document.querySelectorAll(".tecla");

for(i = 0; i < ListaDeTeclas.length; i++){

   const tecla = ListaDeTeclas[i];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function() {
      tocaSom(idAudio);
   }

   tecla.onkeydown = function() {
      tecla.classList.add('ativa');
   }
   tecla.onkeyup = function() {
      tecla.classList.remove('ativa');
   }
}


