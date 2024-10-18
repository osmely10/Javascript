
const operacion = (tipo,numero1, numero2) => {

if (tipo === 'suma') {
    console.log (numero1+numero2);
} else if (tipo === 'resta') {
    console.log (numero1-numero2);
}

};

operacion ('resta',5,5);
operacion ('resta',6,5);