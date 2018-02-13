$(document).ready(function(){

  $.ajax({
      url: "https://gateway.marvel.com/v1/public/characters?events=253&limit=5&ts=1&apikey=5ed88e99e4209269e58dc8794934a142&hash=384996b46b52aa1c3fe1741c5f11a3c7",
      type: "GET",
      success:function (data) {
        console.log("Deu certo!");

        var heroes = data.data.results//herois salvos aqui
        var a = Math.floor(Math.random() * heroes.length)//gerando número aleatório

        //tag img id="heromImg" - setando src
        document.getElementById('heroImg').src = heroes[a].thumbnail.path +"/detail."+ heroes[a].thumbnail.extension
        //tag h3 id="heroName" -  setando texto no html
        document.getElementById('heroName').innerHTML = heroes[a].name

      },
      error:function (){
        console.log("Deu merda!");
      }
    })//fim do método $.ajax

  $("#botao").on('click', function(){
    //desativa o botão - evita clicks repetidos
    $('#botao').html("Procurando...").prop('disabled',true)
    //manda a requisição para API
    $.ajax({
        url: "https://gateway.marvel.com/v1/public/characters?events=253&limit=100&ts=1&apikey=5ed88e99e4209269e58dc8794934a142&hash=384996b46b52aa1c3fe1741c5f11a3c7",
        type: "GET",
        success:function (data) {
          console.log("Deu certo!");

          var heroes = data.data.results//herois salvos aqui
          var a = Math.floor(Math.random() * heroes.length)//gerando número aleatório

          //tag img id="heromImg" - setando src
          document.getElementById('heroImg').src = heroes[a].thumbnail.path +"/detail."+ heroes[a].thumbnail.extension
          //tag h3 id="heroName" -  setando texto no html
          document.getElementById('heroName').innerHTML = heroes[a].name

          //habilita botão após completar a requisição
          $('#botao').prop('disabled', false).html('Encontre outro herói')
        },
        error:function (){
          console.log("Deu merda!");
        }
      })//fim do método $.ajax
    })//fim do botão
  })//fim da função jquery
