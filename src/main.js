import "../style.css";
import calcCuote from "./calc";

//imprimiendo en HTML
const app = document.querySelector("#app");

const container = document.createElement("div");
const title = document.createElement("h1");
const form = document.createElement("form");
const inputCapital = document.createElement("input");
const inputInteres = document.createElement("input");
const inputCuotas = document.createElement("input");
const btn = document.createElement("button");

title.textContent = "Calculadora de Intereses";
container.classList.add("container");
form.classList.add("formulary");

inputCapital.type = "number";
inputCapital.id = "capital";
inputCapital.placeholder = "Capital";

inputInteres.type = "number";
inputInteres.id = "interes";
inputInteres.placeholder = "Tasa de interés";

inputCuotas.type = "number";
inputCuotas.id = "cuotas";
inputCuotas.placeholder = "Nro. de cuotas";

btn.textContent = 'Calcular';
btn.id = "btn";


form.append(inputCapital, inputInteres, inputCuotas, btn);
container.append(title, form);
app.append(container);

//Se declara variables para guardar los datos de los Inputs
let valueCapital;
let valueInteres;
let valueCuotas;

//Extrayendo datos desde inputs
inputCapital.addEventListener("change", (e) => {
  valueCapital = e.target.valueAsNumber;
});
inputInteres.addEventListener("change", (e) => {
  valueInteres = e.target.valueAsNumber;
});
inputCuotas.addEventListener("change", (e) => {
  valueCuotas = e.target.valueAsNumber;
});

// Se agrega escucha a Boton Calcular
const calcular = () => calcCuote(valueCapital, valueInteres, valueCuotas);
btn.addEventListener('click', calcular)
