const nombres=['cesar','luis','wilson','carlos','brian','daniel'];
let ingresar=prompt('ingrese su nombre');

    if (nombres.includes(ingresar.toLocaleLowerCase())){
        alert('si se encuentra en la lista');
    }else{
        alert('no se encuentra en la lista');
    }


