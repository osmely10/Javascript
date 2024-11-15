function eliminar (){
    const numeros=[2,3,4,4,5,6,7,8,34,67,8,3];
    const nuevonumeros=numeros.filter((numero,index)=>{
        return numeros.indexOf(numero)===index;
    });

    console.log(nuevonumeros);
    
};

eliminar();