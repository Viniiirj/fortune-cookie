const fortuneClosed = document.querySelector('#closed')
const fortuneOpened = document.querySelector('#opened')
const againTry = document.querySelector('#btn')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckDay = document.querySelector('#luckDay')
let numberRandom = Math.round((Math.random()) * 10)

// Eventos
fortuneClosed.addEventListener("click", handleReset)
againTry.addEventListener("click", handleReset)

function toggleScreen() {
screen1.classList.toggle('hide')
screen2.classList.toggle("hide")
}

function handleReset() {
toggleScreen()
luck(numberRandom)
numberRandom = Math.round(Math.random() * 10)
}

function luck(number) {
  switch (number) {
  case 0:
    luckDay.innerText =
      "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    break
  case 1:
    luckDay.innerText = "Uma jornada de mil milhas começa com o primeiro passo."
    break
  case 2:
    luckDay.innerText =
      "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
    break
  case 3:
    luckDay.innerText =
      "São os nossos amigos que nos ensinam as mais valiosas lições."
    break
  case 4:
    luckDay.innerText =
      "São os nossos amigos que nos ensinam as mais valiosas lições."
    break
  case 5:
    luckDay.innerText =
      "O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência."
    break
  case 6:
    luckDay.innerText =
      "Grande homem é aquele que não perdeu a candura da infância."
    break
  case 7:
    luckDay.innerText =
      "E que seja assim daqui por diante: amar, viver e começar cada dia juntos!."
    break
  case 8:
    luckDay.innerText =
      "Não te preocupes com os que não te conhecem, mas esforça-te por seres digno de ser conhecido."
    break
  case 9:
    luckDay.innerText = "A saúde é melhor do que riqueza."
    break
  case 10:
    luckDay.innerText =
      "Amizade e Amor são coisas que podem virar uma só num piscar de olhos."
    break
}

}

