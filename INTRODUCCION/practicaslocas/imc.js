const peso=parseFloat(prompt('Ingrese su peso en kilogramos'));
const altura=parseFloat(prompt('Ingrese su altura en metros'));
const imc=peso/(altura*altura);
const mostrar=imc.toFixed(3);

console.log(`Su IMC fue: ${mostrar}`);

if(mostrar<18.5){
    console.log('Tiene bajo peso');
}else if(mostrar>=18.5&&mostrar<=24.9){
    console.log('Tiene Peso normal');
}else if(mostrar>=25&&mostrar<=29.9){
    console.log('Tiene un Sobrepeso');
}else {
    console.log('Obesidad');
}