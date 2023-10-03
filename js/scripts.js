let qtdCartas = prompt("Quantas cartas você deseja? (numeros pares de 4 a 14)");

while (qtdCartas !== "fim") {
  adicionarPensamento(qtdCartas);
  qtdCartas = prompt("Quantas cartas você deseja? (numeros pares de 4 a 14)");
}

function adicionarPensamento(qtdCartas) {
  const elemento = document.querySelector(".container-cards");
  elemento.innerHTML =
    elemento.innerHTML +
    `<div class="card">
        <div class="front-face">  <img src="./img/front.png" class="img-card" /></div>
    </div>`;
}
