const kilometros= parseInt(prompt('Escribe los kilometros recorrido'));
const litros = parseInt(prompt('Escribe los litros de gasolinas consumidos'));
const consumodecombustible= litros/kilometros;

console.log(`El consumo de combustible por Kilometro es : ${consumodecombustible}l/km`);