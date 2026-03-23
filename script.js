let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  tamanhoFonte -= 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function toggleContraste() {
  document.body.classList.toggle("alto-contraste");
}

function lerTexto() {
  const texto = document.getElementById("textoPrincipal").innerText;
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  speechSynthesis.speak(fala);
}