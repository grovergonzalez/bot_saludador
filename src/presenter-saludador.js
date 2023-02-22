import verificarHora from "./VerificarHora";


const nombre = document.querySelector("#nombre");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#saludar-div");
const genero = document.querySelector("#genero")
const edad = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  div.innerHTML = "<p>" + verificarHora(nombre.value, edad.value, genero.value, horaActual) + "<p>";

});