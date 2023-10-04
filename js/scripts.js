let qtdCartas = 1;

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0 || typeof(qtdCartas)  === "string") {
  qtdCartas = parseInt(prompt("Quantas cartas você deseja? (numeros pares de 4 a 14)"));
}

function adicionarCartas(qtdCartas) {
  const elemento = document.querySelector(".container-cards");
  elemento.innerHTML =
    elemento.innerHTML +
    `<div class="card" onclick="virarCarta()">
      <div class="front face">${versoTeste}</div>
      <div class="back face"></div>
    </div>`;
}

for(let i = 0; i < qtdCartas/2 ;i++){
  adicionarCartas();
}

for(let i = 0; i < qtdCartas/2 ;i++){
  adicionarCartas();
}

// const versosCarta = [
//   `<img src="./img/unicornparrot.gif" class="img-card" />`,
//   `<img src="./img/triplestsparrot.gif" class="img-card" />`,
//   `<img src="./img/revertitparrot.gif" class="img-card" />`,
//   `<img src="./img/metalparrot.gif" class="img-card" />`,
//   `<img src="./img/fiestaparrot.gif" class="img-card" />`,
//   `<img src="./img/explodyparrot.gif" class="img-card" />`,
//   `<img src="./img/bobrossparrot.gif" class="img-card" />`

// ]


const versoTeste = ["lulu", "Paulão"]