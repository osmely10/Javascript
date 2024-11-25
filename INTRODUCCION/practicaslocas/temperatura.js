function celsiusfarenheit(temperatura){
    const conversion=(temperatura*(9/5)) + 32;
    console.log(`${temperatura} grados Celsius equivalen a ${conversion} grados Fahrenheit.`);
}

function farenheitcelsius(temperatura){
    const conversion=(temperatura-32) * 9/5;
    console.log(`${temperatura} grados Fahrenheit equivalen a ${conversion} grados Celsius`);
}

let opcion=prompt('¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius)');
    opcion=parseInt(opcion);

let temperatura=parseInt(prompt('Inserte la temperatura a convertir'));

if(opcion===1){
    celsiusfarenheit(temperatura);
}else{
    farenheitcelsius(temperatura);
}
