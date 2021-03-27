var resultado = 0
var multiplo1 = 0
var multiplo2 = 0

function geraMultiplos() {
  multiplo1 = parseInt(Math.random() * 10)
  multiplo2 = parseInt(Math.random() * 10)
  resultado = multiplo1*multiplo2
  mostraMultiplos.innerHTML = (multiplo1 + " x " + multiplo2 + " =")
  mostraResposta.innerHTML = ""
}
  function conferir() {
  mostraMultiplos.innerHTML = (multiplo1 + " x " + multiplo2 + " = " + resultado)
  var camporesposta = document.querySelector("#resposta")
  var respostainput = camporesposta.value
  if (respostainput==resultado){
  mostraResposta.innerHTML = ("Você respondeu: " + respostainput + "<br>" + "Parabéns! Resposta correta!") 
  } else {
    mostraResposta.innerHTML = ("Você respondeu: " + respostainput + "<br>" + "Que pena, você errou. ")
  }
    camporesposta.value = ""
  }
