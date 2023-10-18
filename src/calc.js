export default function calcCuote(capital, interes, cuotas) {
 //(capital * Porcentaje de la tasa de interés)/(1-(1 + Porcentaje de la tasa de interés)^(- Cantidad de cuotas))
let result;
interes = interes/100
result = (capital * (interes))/(1-(1+interes)**(-cuotas)) ;
return result;
}
