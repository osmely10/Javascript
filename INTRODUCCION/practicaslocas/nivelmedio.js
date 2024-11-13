function filtrar (){
    const datos=[{nombre:'ambar',edad:19},{nombre:'luis',edad:16},{nombre:'carlos',edad:15},{nombre:'sammy',edad:16},{nombre:'luis',edad:33}];
    console.log('todos los usuarios que se llaman luis')
    datos.map((usuario)=>{
    if(usuario.nombre=='luis'){
        console.log(usuario.nombre)
    }});

    console.log('mayores de edad');
    datos.forEach((usuario)=>{
        if(usuario.edad>17){
        console.log(`Usuario: ${usuario.nombre} y la edad ${usuario.edad}`)
        }
    })
}

filtrar();