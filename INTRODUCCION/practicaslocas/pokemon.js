let nombrespkm=['pikachu','Kakuna','Metapod','Ivysaur'];

let habilidades=[
    [89,80,59],
    [80,90,98],
    [67,60,60],
    [45,78,90]
];

function promedio(habilidades){
    let promedio=[];
    for(let i=0;i<habilidades.length;i++){
        let fila=habilidades[i];
        let suma=0;

        for(let a=0;a<fila.length;a++){
            suma+=fila[a];
        }

        promedio[i]=suma/fila.length;
    }
    return promedio;
};

function evualuacionfinal(nombrespkm,promedio){
    for(let i=0;i<promedio.length;i++){
        if(promedio[i]>=70){
            console.log(`El pokemon ${nombrespkm[i]} supera el promedio con ${promedio[i]}`);
        }else{
            console.log(`El pokemon ${nombrespkm[i]} no supera el promedio con ${promedio[i]}`);
        }
    }
}

const promedios=promedio(habilidades);

evualuacionfinal(nombrespkm,promedios);