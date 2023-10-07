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
let primeiraCartaVirada;
let segundaCartaVirada;
let jogadas = 0;
let cartasViradas = 0;

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0 || typeof(qtdCartas)  === "string") {
  qtdCartas = parseInt(prompt("Quantas cartas você deseja? (numeros pares de 4 a 14)"));
}

function adicionarCartas() {
  const cards = document.querySelector(".container-cards");
  for(let i = 0; i < qtdCartas/2; i++){
    cartasEmJogo.push(versosCarta[i]);
    cartasEmJogo.push(versosCarta[i]);
  }

  cartasEmJogo.sort(comparador);

  for (let i = 0; i < cartasEmJogo.length; i++){
    cards.innerHTML +=`<div class="card" onclick="virarCarta(this)">
    <div class="front face"><img src="./img/${cartasEmJogo[i]}.gif" class="img-card"/></div>
      <div class="back face"></div>
    </div>`
  }

}

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(cartaClicada){
  cartaClicada.classList.add("front");
  let primeiroVerso;
  let segundoVerso;
  if(jogadas % 2 !== 0){
    segundaCartaVirada = cartaClicada;
    primeiroVerso = primeiraCartaVirada.querySelector(".img-card").src;
    segundoVerso = segundaCartaVirada.querySelector(".img-card").src;
    if (primeiroVerso !== segundoVerso){
      setTimeout(desvirarCarta,1000);
    }
    else{
      cartasViradas += 2;
      setTimeout(resultadoFinal,1000);
     
    }
    jogadas++;
  }
  else{
    primeiraCartaVirada= cartaClicada;
    jogadas++; 
  }
}

function desvirarCarta(){
  primeiraCartaVirada.classList.remove("front");
  segundaCartaVirada.classList.remove("front");
    
}

function aumentarContagem() {
  if(parseInt(relogio.innerHTML) === 100) {
    clearInterval(intervalo);
  } else {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1; 
  }
}

intervalo = setInterval(aumentarContagem, 1000);

function resultadoFinal(){
  if(cartasViradas === qtdCartas){
    alert(`Parabéns você ganhou em ${jogadas} jogadas!` )
  }
}

adicionarCartas();

