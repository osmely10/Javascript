function cumpleaños(a){
    let cumple=new Date(a);
    let hoy= new Date();
    
    let diasrestantes= Math.floor((cumple.getTime()-hoy.getTime())/(1000 * 60 * 60 * 24));
    console.log(`Tu cumpleaños es el ${cumple} y faltan ${diasrestantes}`);
}

cumpleaños('31 Dec 2024');