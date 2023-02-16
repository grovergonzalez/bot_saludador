import sumar from "./sumador";
import multiplicador from "./multiplicador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const tercero = document.querySelector("#tercer-numero");
const cuarto = document.querySelector("#cuarto-numero");
const multiform = document.querySelector("#multi-form");
const multidiv = document.querySelector("#resultado-mult-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiform.addEventListener("submit", (event) => {
  event.preventDefault();

  const tercernumero = Number.parseInt(tercero.value);
  const cuartonumero = Number.parseInt(cuarto.value);

  multidiv.innerHTML = "<p>" + multiplicar(tercernumero, cuartonumero) + "</p>";
});