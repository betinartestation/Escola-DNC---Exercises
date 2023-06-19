var arrowLeft = window.document.getElementById("arrow-left");
var brunaCard = window.document.getElementById("bruna-card");
var leonardoCard = window.document.getElementById("leonardo-card");
var samanthaCard = window.document.getElementById("samantha-card");
var arrowRight = window.document.getElementById("arrow-right");

function ScrollRight() {
  arrowRight.style = "visibility: hidden"
  brunaCard.style = "display: none"
  samanthaCard.style = "display: flex"
  arrowLeft.style = "visibility: visible"
}

function ScrollLeft() {
  arrowRight.style = "visibility: visible"
  brunaCard.style = "display: flex"
  samanthaCard.style = "display:none"
  arrowLeft.style = "visibility: hidden"
}