class Usuario {
    constructor(usuario,password) {
        this.usuario = usuario;
        this.password = password;
    }

    obtenerpost(){
        const post= ['post1','post2'];
        return post;
    }
}

class Moderador extends Usuario { 
    constructor (usuario, password){
        this.usuario = usuario;
        this.password = password;
    }
    
    static borrarpost(id) {
        console.log(`el usuario con el id = ${id} ha sido borrado de la base de datos`);  
    } 
}

Moderador.borrarpost(7);