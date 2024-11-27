const saludo='Hola Mundo, soy osmely'
console.log(saludo)

const edad=28
console.log(edad)

const boole=true
console.log(boole)

const prueba=5>7
console.log(prueba)

let valor;
console.log(valor)

const valor2=null
console.log(valor2)

const producto={name:'telefono',price:500,category:'tecnologia'}
console.log(producto)

const ciudades=['caracas','bogota','rio de janeiro','lima','vancover']
console.log(ciudades)

let colorFavorito='morado'
console.log(colorFavorito)
colorFavorito='negro'
console.log(colorFavorito)

let num;
const num2=null
console.log(num,num2)

//Declaramos funciones , pruebas de las variables en su ambito scope

let prueba1='muñecas'

function pruebascope(){
    let prueba2='rosa'

    console.log(prueba1)
    console.log(prueba2)
}

pruebascope();

//prueba de las reglas de los nombres de las variables

const miVariable=1
const mivariable=2
const Mivariable=3
const MIVARIABLE=4

console.log(miVariable,mivariable,Mivariable,MIVARIABLE)

//operadores

const _intento=5+6
console.log(_intento)

const _intento2=6-5
console.log(_intento2)

const _pris=30/5
console.log(_pris)

const multiplos=4*8
console.log(multiplos)

const modulo=65%10
console.log(modulo)

let suma=7
suma++
console.log(suma)

let resta=6
resta--
console.log(resta)

const texto='hola soy osmely, tengo 28 años y estoy aprendiendo el lenguaje de programacios\n javascript y me parece un lenguaje muy entendible \t soy una chica super olvidadisa trato de anotar todo, pero aun asi no me acuerdo'
console.log(texto)
