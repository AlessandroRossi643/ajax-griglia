// Mi creo il template con cui a stampare la griglia in html
$(document).ready(function(){
  var template_griglia=$('#template-griglia').html();
  $('body').append(template_griglia);


  $('.quadrato').click(function(){
    // Variabile che mi permette di salvare il quadrato che ho cliccato
    var quadratoSelezionato=$(this);
    // Contenuto iniziale del quadrato che mi servirà per il controllo
    var valoreIniziale= $(quadratoSelezionato).html();
    $.ajax({
      url: "https://www.boolean.careers/api/random/int",
      method:"GET",
      success: function(numero){
        // Se il contenuto è uguale a stringa vuota, si procede con la funzione
        if (valoreIniziale=="") {
          // Salvo il numero generatomi dall'Api in una variabile
          var numeroRandom=numero.response;
          console.log("Il numero generato è: " + numeroRandom);
          // Stampo il numero all'interno del quadrato
          quadratoSelezionato.text(numeroRandom);
          // Se il numero è minore/uguale a 5, aggiungo il bg yellow
          if (numeroRandom<=5) {
            quadratoSelezionato.addClass('yellow');
          }
          // Se il numero è maggiore a 5, aggiungo il bg green
          else{
            quadratoSelezionato.addClass('green');
          }
        }

      },
      error: function(){
        alert("Ops, c'è qualcosa che non va.")
      }
    });
  });
});
