let qtdCartas = 1;
const versosCarta = [
  `unicornparrot`,
  `tripletsparrot`,
  `revertitparrot`,
  `metalparrot`,
  `fiestaparrot`,
  `explodyparrot`,
  `bobrossparrot`
]
const cartasEmJogo = []
const relogio = document.querySelector(".relogio");
let intervalo = null;


while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0 || typeof(qtdCartas)  === "string") {
  qtdCartas = parseInt(prompt("Quantas cartas você deseja? (numeros pares de 4 a 14)"));
}

//funcao para adicionar cartas
function adicionarCartas() {
  const cards = document.querySelector(".container-cards");
  for(let i = 0; i < qtdCartas/2; i++){
    cartasEmJogo.push(versosCarta[i]);
    cartasEmJogo.push(versosCarta[i]);
  }

  //funcao 
  cartasEmJogo.sort(comparador);

  for (let i = 0; i < cartasEmJogo.length; i++){
    cards.innerHTML +=`<div class="card" onclick="virarCarta(this)">
    <div class="front face"><img src="./img/${cartasEmJogo[i]}.gif" class="img-card"/></div>
      <div class="back face"></div>
    </div>`
  }
  console.log(cartasEmJogo);
}

function comparador() { 
	return Math.random() - 0.5; 
}

//funcao para virar carta
function virarCarta(cartaClicada){
  cartaClicada.classList.add("front");
  setTimeout(desvirarCarta,5000);
}

function desvirarCarta(cartaClicada){
    cartaClicada.classList.remove("front");
   
}

//funcao para contagem do relogio
function aumentarContagem() {
  if(parseInt(relogio.innerHTML) === 100) {
    clearInterval(intervalo);
  } else {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1; 
  }
}

intervalo = setInterval(aumentarContagem, 1000);
console.log(intervalo);

adicionarCartas();
// tenho que clicar em uma carta - gerenciar jogadas (variavel) 
// compara as cartas - controlar se estou virando a primeira ou a segunda
// 1 segundo desvira setimeout

// controlar jogadas através da carta que foi virada
// no caso de cartas iguais elas continuam para cima 
// dicaaaaaaaaaaaa: cartaClicada.queryselector