let contraseña=5667;
let intento=0;
do {
    if(contraseña==intento){
        console.log(`Contraseña correcta`);
    } else {
        console.log(`Contraseña Incorrecta`);
    } 
    intento+=1000000;
} while(contraseña==intento);

let contar;
do {
    contar=Math.random();
    console.log(contar.toFixed(1));
}while(contar<=0.8);
console.log('se genero un numero mayor que 0.8');



