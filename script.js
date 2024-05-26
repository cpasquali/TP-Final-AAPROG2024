const avisoEl = document.getElementById("aviso");
const buttonAdult = document.getElementById("button-adult");
const buttonMinor = document.getElementById("button-minor");
const mainEl = document.getElementById("main");

const adultVerification = () => {
  avisoEl.className = "d-none";
  mainEl.className = "main-content";
};

const adultMinor = () => {
  avisoEl.className = "d-none";
  mainEl.className = "main-content";
  alert("Entraras bajo su responsabilidad");
};

buttonAdult.addEventListener("click", adultVerification);
buttonMinor.addEventListener("click", adultMinor);

window.addEventListener("beforeunload", function (event) {
  const message = "¿Estás seguro de que quieres salir?";
  event.preventDefault();
  return message;
});
