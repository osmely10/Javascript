for (let i=1;i<=10;i++){
    if(i===5){
        console.log('STOP hay un numero igual a 5');
        break;
    }
    console.log(i)
}

for (let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}