export default function calcCuote(capital, interes, cuotas) {
  if (capital && interes && cuotas != 0) {
    let intereses = interes / 100;
    const result = (capital * intereses) / (1 - (1 + intereses) ** -cuotas);
    return alert(result);

} else {return alert("Debes completar los campos de Capital, Interés y Cuotas")}
}
