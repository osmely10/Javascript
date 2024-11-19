// Declaramos las variables
const numero1=parseInt(prompt('Ingrese un numero entero'));
const numero2=parseInt(prompt('Ingrese un numero entero'));
// Realizamos una resta con los valores ingresado y almacenarlo en una variable
const resta=numero1-numero2;
//Aqui colocamos una condicional para mostrar nuestro resultado
if(resta>0){
    console.log(`El resultado de la resta es mayor a 0`);
    if(resta%2===0){
        console.log(`El resultado es par`);
    }else{
        console.log(`El resultado es impar`);
    }
}else{
    console.log(`El resultado de nuestra resta es menor o igual a 0`);
}