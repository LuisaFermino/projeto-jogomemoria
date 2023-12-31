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
let timer = null;
let primeiraCartaVirada;
let segundaCartaVirada;
let jogadas = 0;
let cartasViradas = 0;
let jogarNovamente;

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

}

function comparador() { 
	return Math.random() - 0.5; 
}

//funcao para virar carta
function virarCarta(cartaClicada){
  cartaClicada.classList.add("front");
  let primeiroVerso;
  let segundoVerso;

  if(jogadas % 2 !== 0){
    segundaCartaVirada = cartaClicada;
    primeiroVerso = primeiraCartaVirada.querySelector(".img-card").src;
    segundoVerso = segundaCartaVirada.querySelector(".img-card").src;
    if (primeiroVerso !== segundoVerso){
      
      setTimeout(desvirarCarta,500);
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

//funcao para contagem do relogio
function aumentarContagem() {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1; 
}

timer = setInterval(aumentarContagem, 1000);

function resultadoFinal(){
  if(cartasViradas === qtdCartas){
    alert(`Parabéns você ganhou em ${jogadas} jogadas! Seu tempo foi: ${relogio.innerHTML}s` );
    clearInterval(timer);
    // let jogarNovamente = prompt (`Deseja jogar novamente? Sim ou Não`);

  }
  
}

adicionarCartas();  

