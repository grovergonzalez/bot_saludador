
const cantItems = document.querySelector("#cantidad");
const form = document.querySelector("#Mostrar-form");
const div = document.querySelector("#Mostrar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "Cantidad de items: " + cantItems.value ;
});