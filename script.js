var resultado;
var multiplo1;
var multiplo2;
var points = 0
var games = 0

showStats()

document.querySelector(".start-game").addEventListener("click",generateParcels)
document.querySelector(".check-answer").addEventListener("click", check)
document.querySelector(".clear-stats").addEventListener("click",clear)

function showStats(){
    document.getElementById("total-points").innerText = points
    document.getElementById("total-games").innerText = games
}

function generateParcels() {
    multiplo1 = parseInt(Math.random() * 10)
    multiplo2 = parseInt(Math.random() * 10)
    resultado = multiplo1*multiplo2

    document.querySelector(".show-multiplication").innerText = (multiplo1 + " x " + multiplo2 + " =")
    document.querySelector(".show-result").innerText = ""
    document.querySelector(".answered-wrong").innerText = ""
    document.querySelector(".answered-right").innerText = ""
}

  function check() {
    const inputField = document.querySelector("#input-answer")
    var respostainput = Number(inputField.value)
    if (respostainput != 0){
        document.querySelector(".show-result").innerText = resultado
        if (respostainput==resultado){
            document.querySelector(".answered-right").innerText = `Parabéns! Resposta correta!` 
            points++ 

        } if (respostainput != resultado) {
            document.querySelector(".answered-wrong").innerText = `Que pena, você errou.`
        }
            inputField.value = ""
            games++
            showStats()
            document.getElementById("percentage").innerText = parseFloat((points/games)*100).toFixed(2) + " %"
        }
    }

function clear () {
    points = 0
    games = 0
    document.querySelector(".show-multiplication").innerText = ""
    document.querySelector(".show-result").innerText = ""
    document.querySelector(".answered-wrong").innerText = ""
    document.querySelector(".answered-right").innerText = ""
    document.getElementById("percentage").innerText = ""
    showStats()

}