const numeros=[3,5,6,7,8,8,99];
numeros.forEach((numero,index)=>{
    console.log(numero);
});

const frutas=['fresa','mora','durazno','melon','naranja','mandarinas'];

for (const i in frutas){
    console.log(i,frutas[i]);
}

const lista=[3,6,7,8,8,9];
let suma=0;
for (let juntos of lista){
    suma+=juntos;
};
console.log(suma);