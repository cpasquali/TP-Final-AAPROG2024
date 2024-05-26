const avisoEl = document.getElementById("aviso");
const buttonAdult = document.getElementById("button-adult");
const buttonMinor = document.getElementById("button-minor");
const mainEl = document.getElementById("main");
const citysEl = document.getElementById("citys");
const mensajeEnvio = document.getElementById("res-envio");
const buttonEnvio = document.getElementById("btn-envio");

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

const calculateShipping = () => {
  let totalEnvio = 0;
  let mensaje = "";
  if (
    (citysEl.value === "San Nicolas") |
    (citysEl.value === "Villa Ramallo") |
    (citysEl.value === "Villa Campi")
  ) {
    totalEnvio = 0;
    mensaje = "Su envio es gratis!!";
  } else if ((citysEl.value === "Rosario") | (citysEl.value === "Mendoza")) {
    totalEnvio = 800;
    mensaje = "El total de su envio es de 800 pesos";
  }

  mensajeEnvio.innerHTML = `<h2>${mensaje}</h2>`;
};

buttonEnvio.addEventListener("click", calculateShipping);
