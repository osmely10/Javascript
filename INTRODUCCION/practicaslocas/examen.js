function examen(open,close){
    if(open === undefined || close === undefined) {
        console.log('Error no ingreso parametros');
    }else{
        let hoy = new Date();
        let pruebaOpen= new Date(open);
        let pruebaClose= new Date(close);

        let resultadoTiempoOpen= Math.floor((pruebaClose.getTime()-pruebaOpen.getTime())/(1000*60));
        let resultadoTiempoRest= Math.floor((pruebaOpen.getTime()-hoy.getTime())/(1000*60));

        if(pruebaClose.getTimee<hoy.getTime){
            return console.log('el examen ya cerro');
        }else{
            if(resultadoTiempoRest>0){
                console.log(`Faltan ${resultadoTiempoRest} minutos para que abran`);
            }else{
                console.log('El examen esta abierto');
                console.log(`El examen durara abierto ${resultadoTiempoOpen} minutos`)
            }
        }

    }
};

examen('wed nov 13 2024 15:00:00', 'wed nov 13 2024 17:00:00');