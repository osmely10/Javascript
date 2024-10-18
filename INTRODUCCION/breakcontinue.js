const nombres= ['carlos', 'estefania','cristofer', 'kenia','paula','osmely'];

for (let i= 0; i< nombres.length; i++){
    if (nombres [i][0] !== 'c'){
        console.log('Hay un nombre que no empieza por la letra c');
        break;
    }
    console.log(nombres[i])
    }

    const invitados=['carlos', 'estefania','cristofer', 'kenia','paula','osmely'];
    console.log('listas de personas aceptadas');
    
    for (let i=0; i< invitados.length; i++){
        if (invitados[i]=== 'kenia') {
            continue;
        }
        console.log(invitados[i]);

    }