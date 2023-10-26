export function calcCuote(capital, interes, cuotas, ubicacion) {
  if (capital && interes && cuotas != 0) {
    let intereses = interes / 100;
    const total = (capital * intereses) / (1 - (1 + intereses) ** -cuotas);
    const monto = +total.toFixed(2);
    console.log(`El monto de la cuota es ${monto}`);
    const arrayAmort = calcAmort(capital, interes, cuotas, monto);
    console.log(arrayAmort)
    generarLista(arrayAmort, ubicacion);
  } else {
    alert("Debes completar los campos de Capital, Interés y Cuotas");
  }
}
// Debes arreglar esto que es lo que esta fallando
function calcAmort(capital, interesFijo, cuotas, amortizacion) {
    let saldoHistorial = [];
interesFijo = interesFijo/100;
    for (let i = 0; i < cuotas; i++) {
        let interes = capital * interesFijo;
        let montoCuota = amortizacion - interes;

        if (montoCuota > capital) {
            montoCuota = capital;
        }

        capital -= montoCuota;

        if (capital <= 0) {
            capital = 0;
        }

        saldoHistorial.push(capital);

        if (capital === 0) {
            break;
        }
    }

    return saldoHistorial;
}
  /*
  capital, intereses, cantCuotes, amountCuote
  let historial = [];
  let interes;
  let amount;
  for (let i = 0; i < cantCuotes; i++) {
    interes = capital * intereses;
    console.log(interes)
    amount = interes - amountCuote;
    console.log(amount)
    capital = capital - amount;
    console.log(capital)
    historial.push(capital);
  }
  return historial;
}*/
// console.log(calcAmort(1200, .10, 6, 275.53))

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
