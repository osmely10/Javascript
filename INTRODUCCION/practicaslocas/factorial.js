function calculadoraFactorial(number){
    let result=1;
    for(let i=1;i<=number;i++){
        result*=i;
    }

    console.log(`El factorial del ${number} es: ${result}`);
}

const number=parseInt(prompt('Ingrese un numero que no sea negativo'));

calculadoraFactorial(number);