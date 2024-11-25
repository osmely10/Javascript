const limitante=parseInt(prompt('Ingrese el número de términos de la secuencia Fibonacci que desea generar'));
let n1=0;
let n2=1;
console.log(`la se cuencia sera: ${limitante} iniciamos ${n1} y ${n2}`);
let suma=n1+n2;
console.log(n1)
console.log(n2)
    while(suma<=limitante){
        console.log(suma);
        n1=n2;
        n2=suma;
        suma=n1+n2;
    }
