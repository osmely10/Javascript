//Interrupciones

for(let i=0;i<10;i++){
    if(i===3){
    break
    }
    console.log(i)
}

for(let x=0;x<10;x++){
    if(x===2){
        continue;
    }
    console.log(x)
}

//condicional switch

const mes=prompt('Porfavor ingresar un numero del 1 al 12')

switch(mes){
    case '1':
        console.log('Mes de Enero')
        break;
    case '2':
        console.log('Mes de Febrero')
        break;
    case '3':
        console.log('Mes de Marzo')
        break;
    case '4':
        console.log('Mes de Abril')
        break;
    case '5':
        console.log('Mes de Mayo')
        break;
    case '6':
        console.log('Mes de Junio')
        break;
    case '7':
        console.log('Mes de Julio')
        break;
    case '8':
        console.log('Mes de Agosto')
        break;
    case '9':
        console.log('Mes de Septiembre')
        break;
    case '10':
        console.log('Mes de Octubre, Halloween')
        break;
    case '11':
        console.log('Mes de Noviembre')
        break;
    case '12':
        console.log('Mes de Diciembre, Feliz Navidad')
        break;
    default:
        console.log('Por favor solo ingrese un numero del 1 al 12')
}