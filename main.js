import "./style.css";
import calcCuote from "./src/calc";

const app = document.querySelector("#app");

const container = document.createElement("div");
const title = document.createElement('h1');
const form = document.createElement('form');
const inputCapital = document.createElement('input');
const inputInteres = document.createElement('input');
const inputCuotas = document.createElement('input');


title.textContent = 'Calculadora de Intereses';
container.classList.add("container");
form.classList.add("formulary");
inputCapital.type = "number";
inputCapital.id = 'capital';
inputCapital.placeholder = 'Capital';
inputInteres.type = "number";
inputInteres.id = 'interes';
inputInteres.placeholder = 'Tasa de interés';
inputCuotas.type = "number";
inputCuotas.id = 'cuotas';
inputCuotas.placeholder = 'Nro. de cuotas';
form.appendChild(inputCapital);
form.appendChild(inputInteres);
form.appendChild(inputCuotas);
container.appendChild(title);
container.appendChild(form);

app.appendChild(container);
