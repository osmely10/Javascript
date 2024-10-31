class Calculadora {
    constructor ( ){

    }

    static suma(numero,numero2){
        return `La operacion suma: ${numero+numero2}`;
    }

    static resta(numero,numero2){
        return `La operacion resta: ${numero-numero2}`;
    }

    static division(numero,numero2){
        return `La operacion division: ${numero/numero2}`;
    }

    static multiplicacion(numero,numero2){
        return `La operacion Multiplicacion: ${numero*numero2}`;
    }
}

console.log(Calculadora.multiplicacion(4,6));