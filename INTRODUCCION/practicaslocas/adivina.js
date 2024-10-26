const numero=5;
let adivinado=5;

while(adivinado<=10){
    if(adivinado==numero){
        console.log(adivinado);
    };
    adivinado++;
};

let palabra='HOLA';
let revertido='';
let i=palabra.length-1;

while(i>=0){
    revertido+=palabra[i];
    i--;
};

console.log(revertido);

