function calcularArea(radio){
    return 3.14*(Math.pow(radio,2))
}

function calcularPerimetro(radio){
    return 2*3.14*radio
}

const radio=parseInt(prompt('Ingrese la Radio de un circulo'))
const area=calcularArea(radio);
const perimetro=calcularPerimetro(radio);

console.log(`El radio que ingreso fue ${radio}, Area es:${area} y Perimetro: ${perimetro}`)


//Segundo ejercicio calcular exponentes

function calculatePower(base,exponente){
    return base**exponente
}

const resultado=calculatePower(4,2)

console.log(resultado);