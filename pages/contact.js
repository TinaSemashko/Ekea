const form = document.querySelector("#form");
const nom = document.querySelector("#nom");
const email = document.querySelector("#email");
const sujet = document.querySelector("#sujet");
const messageInput = document.querySelector("#message");
const output = document.querySelector("#output");

const EmptyFilds = () => {
  let result = " bien reçu";

  const input = new Map([
    ["message", messageInput.value],
    ["nom", nom.value],
    ["email", email.value],
    ["sujet", sujet.value],
  ]);

  let ok = true;
  input.forEach((value, key) => {
    if (!value) {
      result = key;
      ok = false;
    }
  });

  ok
    ? alert(`Merci, votre message est ${result}`)
    : alert(`information incomplète dans le champs ${result} !`);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  EmptyFilds(messageInput);
});
