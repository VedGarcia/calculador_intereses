export function calcCuote(capital, interes, cuotas, ubicacion) {
  if (capital && interes && cuotas != 0) {
    let intereses = interes / 100;
    const total = (capital * intereses) / (1 - (1 + intereses) ** -cuotas);
    const monto = +total.toFixed(2);

    const data = new Object();
    data.capital = capital;
    data.interes = `${interes}%`;
    data.cuotas = cuotas;

    const arrayAmort = calcAmort(capital, interes, cuotas, monto);

    generarLista(arrayAmort, ubicacion, monto, data);
  } else {
    alert("Debes completar los campos de Capital, Interés y Cuotas");
  }
}

function calcAmort(capital, interesFijo, cuotas, amortizacion) {
  let saldoHistorial = [];
  interesFijo = interesFijo / 100;
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

function generarLista(array, ubicacion, cuotaFija, obj) {
  const container2 = document.createElement("div");
  container2.classList.add("container2");


  const idUnico = `idmix-${Date.now()}`; 
  container2.setAttribute("id", idUnico);

  const title2 = document.createElement("h3");
  title2.textContent = "Lista de Amortización por C/Cuota";

  const datos = document.createElement('p');
  datos.textContent = `El Capital es de ${obj.capital}, con un Interés de ${obj.interes} para cancelar en ${obj.cuotas} cuotas`;

  const subtitle = document.createElement('h4');
  subtitle.textContent = `La cuota fija a cancelar es: ${cuotaFija}`;
  const ol = document.createElement("ol");
  ol.classList.add("list_montos");
  const nodos = [];
  let j = 1;
  for (let i = 0; i < array.length; i++) {
    const node = document.createElement("li");
    node.textContent = `El capital menos ${j} cuota(s) es ${array[i].toFixed(2)}`;
    nodos.push(node);
    j++;
  }
  ol.append(...nodos);


  const botonEliminar = document.createElement("button"); 
  botonEliminar.textContent = "Cerrar";
  botonEliminar.classList.add("botonEliminar");
  botonEliminar.addEventListener("click", () => {
    document.getElementById(idUnico).remove(); 
  });

  container2.append(title2, datos, subtitle, ol, botonEliminar);
  ubicacion.append(container2);
}

export function cleanForm() {
  const listas = document.querySelectorAll(".container2");
  for (const lista of listas) {
    lista.remove();
  }
}
