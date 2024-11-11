function aritmetica (){
    let numeros = Math.floor(Math.random() * (1000-1+1))+1;
    
console.log(`La mitad del ${numeros} es: ${numeros/2}; El doble del ${numeros} es: ${numeros*2}; La raiz cuadrada de ${numeros} es: ${Math.sqrt(numeros)}`);
    
};

aritmetica();