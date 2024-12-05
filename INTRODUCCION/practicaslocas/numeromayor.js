// Pedirle a el usuario cual es la cantidad de número que va a ingresar
const cantidadnum=parseInt(prompt('Ingresa la cantidad de números'))

//Ingresar numero por numero
    const listanum=[]

for(let i=1;i<=cantidadnum;i++){
    listanum.push(parseInt(prompt(`Ingrese el número ${i}:`)));
}

function findLargestNumber(numeros){
let mayor=numeros[0];
for(let i=0;i<numeros.length;i++){
    if(numeros[i]>mayor){
        mayor = numeros[i]
    }}
    return mayor;
}

const resultadoNumMayor=findLargestNumber(listanum);

console.log(resultadoNumMayor)





