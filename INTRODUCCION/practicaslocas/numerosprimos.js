function numPrimo(num){
    if(num<=1) return false;

    for(let i=2; i <= Math.sqrt(num);i++){
        if(num %i === 0){
            return false;
        }
    }
    return true;
}

const num1=parseInt(prompt('Ingresar el numero de inicio'));
const num2=parseInt(prompt('Ingresar el numero de finalizacion'));

console.log(`El numero de inicio es ${num1} y el numero de finalizacion ${num2}`);

for(let i=num1;i<=num2;i++){
    if(numPrimo(i)){
        console.log(i);
    }
}