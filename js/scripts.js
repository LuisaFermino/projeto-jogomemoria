let qtdCartas = 1;

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0 || typeof(qtdCartas)  === "string") {
  qtdCartas = parseInt(prompt("Quantas cartas você deseja? (numeros pares de 4 a 14)"));
}

function adicionarCartas(qtdCartas) {
  const elemento = document.querySelector(".container-cards");
  elemento.innerHTML =
    elemento.innerHTML +
    `<div class="card">
        <div class="front-face">  <img src="./img/front.png" class="img-card" /></div>
    </div>`;
}

for(let i = 0; i < qtdCartas ;i++){
  adicionarCartas();
}


// versos = [
//  img 1
//  img 2
//  img 3
// ]

// versos[i]