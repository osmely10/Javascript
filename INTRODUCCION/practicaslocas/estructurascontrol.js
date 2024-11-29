//condicionales
const num=-6;

if(num > 0){
    console.log(`${num} es un numero positivo`)
}else if(num < 0){
    console.log(`${num} es un numero negativo`)
}else if(num === 0){
    console.log(`${num} es igual a 0`)
}

const edad=80;

    if(edad<18){
        console.log('Es menor de Edad')
    }else if(edad>=18&&edad<=64){
        console.log('Es un Adulto')
    }else if(edad>=65){
        console.log('Es un anciano')
    }

    //Bucles

    for(let i=0;i<=4;i++){
        console.log(i);
    }

    let contador=0
    while(contador<=4){
        console.log(contador)
        contador++
    }

    let contar=0
    do{
        console.log(contar)
        contar++
    }while(contar<=4)