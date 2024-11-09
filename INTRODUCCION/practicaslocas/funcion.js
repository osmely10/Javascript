
function guardar (a,b) {
let guardar =[];

for (let i= a; i<=b;i++){
if(i%2===0) guardar.push(i);
}
console.log(guardar)
}

guardar(1,10);

function multiplicacion(a){
    for(let i=0;i<=12;i++){
        let numero=a*i;
        if(i==5){
            continue;
        }
        console.log(`${a} x ${i}= ${numero}`);
    }
};

multiplicacion(2);


function filtrar (){
    let numeros=[];
    for(let i=1;i<=100;i++){
        if(i%3===0){
            numeros[numeros.length]=i;
        }
    }
    console.log(numeros);
}

filtrar();