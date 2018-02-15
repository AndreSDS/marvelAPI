function ready(fn) {
  if (document.readyState != 'loading') {
    fn()
  }else{
    document.addEventListener('DOMContentLoaded',fn)
  }
}
ready(function () {
  const url = "https://gateway.marvel.com/v1/public/characters?events=253&limit=5&ts=1&apikey=5ed88e99e4209269e58dc8794934a142&hash=384996b46b52aa1c3fe1741c5f11a3c7"

  document.getElementById('botao').addEventListener('click', function(){
   //desativa o botão - evita clicks repetidos
   var btn = document.getElementById('botao')
   btn.disabled = true
   btn.innerHTML = "Procurando..."

    fetch(url,{method: 'get'})
      .then(function (response) {
        response.json()
          .then(function (data) {

            var heroes = data.data.results//herois salvos aqui
            var a = Math.floor(Math.random() * heroes.length)//gerando número aleatório

            //tag img id="heromImg" - setando src
            document.getElementById('heroImg').src = heroes[a].thumbnail.path +"/detail."+ heroes[a].thumbnail.extension
            //tag h3 id="heroName" -  setando texto no html
            document.getElementById('heroName').innerHTML = heroes[a].name

            //habilita botão após completar a requisição
            btn.disabled = false
            btn.innerHTML = "Encontre outro herói"
          })
        })
          .catch(function (err) {
          console.error(err);
      })//fim do método fetch

    })//fim do botão

})//fim da função ready
