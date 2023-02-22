const nombre = document.querySelector("#nombre");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#saludar-div");
const genero = document.querySelector("#genero")
const edad = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(edad.value > 30)
      if(genero.value == "Masculino")
       div.innerHTML = "Hola Sr. " + nombre.value;
      else if(genero.value == "Femenino")
        div.innerHTML = "Hola Sra. " + nombre.value;
  if(edad.value <= 30)
      div.innerHTML = "Hola " + nombre.value;
});