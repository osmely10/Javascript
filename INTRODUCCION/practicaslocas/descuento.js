const precioproducto=parseFloat(prompt('Precio del producto'));
const descuento=parseFloat(prompt('ingrese el porcentaje'));

console.log(`Precio del producto:${precioproducto} y el descuento ${descuento}`);

function calculardescuento(precioproducto,descuento){
const calculo1=precioproducto*(descuento/100);
const calculofinal=precioproducto-calculo1;

console.log(`El precio final del producto luego de aplicar un descuento de ${descuento}% es de: ${calculofinal}$`)
}

calculardescuento(precioproducto,descuento);