var wrapper = document.querySelector(".marquee-wrapper"),
  marquee = document.querySelector(".marquee"),
  wrapperWidth = wrapper.offsetWidth,
  marqueeWidth = marquee.scrollWidth / 2;

function move() {
  var currentTX = getComputedStyle(marquee).transform.split(",");
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }

  if (-currentTX >= marqueeWidth) {
    marquee.style.transform = "translateX(" + wrapperWidth + "px)";
  } else {
    marquee.style.transform = "translateX(" + currentTX + "px)";
  }
}
var interval = setInterval(move, 5);

const button1 = document.createElement("button");
button1.innerText = "Voir plus";
button1.id = "Button";

const col1 = document.querySelector(".col11");
col1.appendChild(button1);

button1.addEventListener(
  "click",
  () => (location = "../pages/inspirations.html")
);

const button2 = document.createElement("button");
button2.innerText = "Voir plus";
button2.id = "Button";

const col2 = document.querySelector(".col22");
col2.appendChild(button2);
button2.addEventListener("click", () => (location = "../pages/services.html"));

const showTexteBasket = () => {
  const contTexte = document.querySelector(".container-texte");
  contTexte.style.display = "flex";
  contTexte.style.justifyContent = "space-between";
  contTexte.style.alignItems = "center";
  contTexte.style.backgroundColor = "var(--font-color-kaki2)";
  contTexte.style.height = "20vh";
  const flexEl = document.createElement("div");
  const texte = document.createElement("div");
  texte.textContent = "Votre Panier a été validé avec succés !";
  texte.style.fontSize = "3.6vw";
  texte.style.color = "var(--font-color-blanche)";
  texte.style.paddingTop = "4vh";
  const charClose = document.createElement("div");
  charClose.innerHTML = "&times;";
  charClose.style.paddingRight = "2vw";
  charClose.style.fontSize = "2rem";
  charClose.style.color = "var(--font-color-blanche)";
  charClose.style.cursor = "pointer";
  contTexte.appendChild(flexEl);
  contTexte.appendChild(texte);
  contTexte.appendChild(charClose);
  charClose.addEventListener("click", () => (location = "./index.html"));
};
const contImg = document.querySelector(".cont-image");
if (document.referrer.includes("panier")) showTexteBasket();
else contImg.style.paddingTop = "8vh";
