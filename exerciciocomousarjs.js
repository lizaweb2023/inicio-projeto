let btnexecutar = document.getElementById("btnexecutar");

let resultado = document.getElementById("resultado");

btnexecutar.addEventListener("click" , function() {

let nome = "maria";

let frutas = ["banana","maça","pera"];

let mensagem = "ola,"+ nome +"!a fruta é" + frutas.join(", ");
resultado.innerHTML = mensagem;
});
