for(let i=20;i<=30;i++){
    console.log(i)
}

for(let i=30;i<=50;i++){
    if(i%2===0){
        console.log(i)
    }
} 

// Tercer ejercicio sumar los primeros 50 numeros naturales

let suma=0;
for (let i=0;i<=50;i++ ){
    suma=suma+i
}
console.log(`La suma de los primeros 50 numeros naturales son: ${suma}`)

//Tabla de Multiplicar

for(let i=1;i<=12;i++){
    console.log(`8 x ${i} = ${8*i}`)
}

//Imprimir los elementos de un arreglo

const colores=['Rosado','Negro','Azul','Rojo','Amarillo']
for(let i=0;i<colores.length;i++){
    console.log(colores[i])
}
