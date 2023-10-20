export default function calcCuote (capital, interes, cuotas){
    if (typeof capital && interes && cuotas === "number") 
    interes = interes/100;
    const result = (capital * interes)/(1-(1 + interes)**(-cuotas));
    return result;
}


console.log(calcCuote(500, 15, 5));