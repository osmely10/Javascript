for (let i=1;i<=20;i++){
    if(i%3===0){
    continue;  
    }
    console.log(i);
};

const numeros=[2,4,5,6,7,78,9,34];
let suma=0;

for (let i=0;i<numeros.length;i++){
    suma+=numeros[i];
    if(suma>100){
        console.log(suma);
        break;
    };
};

const nepo=[3,4,5,-7,-8,2,6,-1];
for (let i=0;i<nepo.length;i++){
    if(nepo[i]< -0){
        continue;
    };
    console.log(nepo[i]);
};