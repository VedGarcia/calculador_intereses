import "../style.css";
import { calcCuote, cleanForm } from "./constant";

// Imprimiendo en HTML
const app = document.querySelector("#app");

const container = document.createElement("div");

const title = document.createElement("h1");
const form = document.createElement("form");
const inputCapital = document.createElement("input");
const inputInteres = document.createElement("input");
const inputCuotas = document.createElement("input");
const btn = document.createElement("button");
const btnRemove = document.createElement("button");
const contain = document.createElement("div");
const firma = document.createElement("p");

title.textContent = "Calculadora de Intereses";
contain.classList.add("contain");
container.classList.add("container");
form.classList.add("formulary");
firma.classList.add("firma");

firma.textContent = "by {VEd";
inputCapital.type = "number";
inputCapital.id = "capital";
inputCapital.placeholder = "Capital";

inputInteres.type = "number";
inputInteres.id = "interes";
inputInteres.placeholder = "Tasa de interés";

inputCuotas.type = "number";
inputCuotas.id = "cuotas";
inputCuotas.placeholder = "Nro. de cuotas";

btn.textContent = "Calcular";
btn.id = "btn";
btnRemove.textContent = "Reset";
btnRemove.id = "remove";

form.append(inputCapital, inputInteres, inputCuotas, btn, btnRemove);
container.append(form);
contain.append(container);
app.append(title, contain, firma);

// Se declara variables para guardar los datos de los Inputs
let valueCapital;
let valueInteres;
let valueCuotas;

// Extrayendo datos desde inputs
inputCapital.addEventListener("change", (e) => {
  valueCapital = e.target.valueAsNumber;
});
inputInteres.addEventListener("change", (e) => {
  valueInteres = e.target.valueAsNumber;
});
inputCuotas.addEventListener("change", (e) => {
  valueCuotas = e.target.valueAsNumber;
});

function resetInputs() {
  valueCapital = "";
  valueInteres = "";
  valueCuotas = "";
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  calcCuote(valueCapital, valueInteres, valueCuotas, contain);
  form.reset();
  resetInputs();
});

btnRemove.addEventListener("click", (e) => {
  e.preventDefault();
  cleanForm();
  form.reset();
});
