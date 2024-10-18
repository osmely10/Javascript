// cadena de texto

const nombre = 'carlos';
const parrafo = "este es un 'parrafo'";
const parrafo2 = 'este es un "parrafo"';
const parrafo3 = 'este es un \'parrafo\'';

// numero

const numero = 4;
const numero2 = -2.899;

// boleano

const mayorQue = 10>2;

console.log(mayorQue);

// Arrays - arreglos

const arreglo = ['texto',456,true,{propiedad:'valor'}];
console.log(arreglo);

// objetos

const persona = {
    nombre: 'carlos',
    edad:27,
    carro: {
        marca: '...',
        color: 'negro',
    }
}
console.log(persona.carro.color);

// function

function hola() {
    console.log ('hola');
}

hola();

