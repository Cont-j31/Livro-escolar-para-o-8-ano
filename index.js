const bt1e2 = ["b1", "b2"]; 
const btn3 = document.getElementById("b3");
const btn4 = document.getElementById("b4");
const bc = document.getElementById("btcal");

btn4.addEventListener("click", function () {
    alert("Este bimestre não está disponível");
});

btn3.addEventListener('click', () => {
   window.location.href = 'https://cont-j31.github.io/Livro-escolar-para-o-8-ano/degrau1b/1bimestre.html';
});

bt1e2.forEach(botao => {
    const botaoElemento = document.getElementById(botao);
    
    if (botao) {
        botaoElemento.addEventListener('click', () => {
            alert("Este bimestre já foi encerrado");
        });
    }
});
btcal.addEventListener("click", () => {
    window.location.href = "degrau.cal/cal.html";
});