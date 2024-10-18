const obtenerPostDeUsuario = (usuario, callback)=>{
    console.log(`Obteniendo lo post de ${usuario}...`);

    setTimeout(()=>{
        let post = ['post1', 'post2','post3'];
        callback(post);        
    },2000)

    
}



obtenerPostDeUsuario ('osmely', (post)=>{
    console.log(post);

});