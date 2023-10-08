import "./style.css";

document.querySelector("#app").innerHTML = `
      <div class="container">
      <h1>Calculadora de Intereses</h1>
      <form class="formulary">
        <input type="number" placeholder='Capital' id="capital" value="">
        <input type="number" placeholder="Tasa de interés" id="interes" value="">
        <input type="number" placeholder="Cant. cuotas" id="cuotas" value="">
      </form>
    </div>`;


// const container = document.createElement('div');
// const form = document.createElement('form');
// const capital = document.createElement('input');
// const interes = document.createElement('input');
// const cuotas = document.createElement('input');