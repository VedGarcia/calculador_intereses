export function calcCuote(capital, interes, cuotas, ubicacion) {
  if (capital && interes && cuotas != 0) {
    let intereses = interes / 100;
    const total = (capital * intereses) / (1 - (1 + intereses) ** -cuotas);
    const monto = total.toFixed(2);

    const arrayAmort = calcAmort(capital, interes, cuotas, monto);
    generarLista(arrayAmort, ubicacion);
  } else {
    alert("Debes completar los campos de Capital, Interés y Cuotas");
  }
}

function calcAmort(capital, intereses, cantCuotes, amountCuote) {
  let historial = [];
  let interes;
  let amount;
  for (let i = 0; i < cantCuotes; i++) {
    interes = capital * intereses;
    amount = amountCuote - interes;
    capital = capital - amount;
    historial.push(capital);
  }
  return historial;
}

function generarLista(array, ubicacion) {
  const container2 = document.createElement("div");
  container2.classList.add("container2");

  const title2 = document.createElement("h4");
  title2.textContent = "Lista de Amortizacion por C/Cuota";
  const ol = document.createElement("ol");
  ol.classList.add("list_montos");
  const nodos = [];
  for (let i = 0; i < array.length; i++) {
    const node = document.createElement("li");
    node.textContent = array[i];
    nodos.push(node);
  }
  ol.append(...nodos);
  container2.append(title2, ol);
  ubicacion.append(container2);
}
