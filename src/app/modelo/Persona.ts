export class Persona {

    id?: number; 
    nombre: string;
    apellido: string;
    acercade:string;
    ocupacion: string;
    ubicacion: string;
    fotoPerfil: string;
    fotoPortada: string;
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    usuario: string;
    password: string;
    
    constructor(){
        this.nombre = "";
        this.apellido = "";
        this.acercade = "";
        this.ocupacion = "";
        this.ubicacion = "";
        this.fotoPerfil = "";
        this.fotoPortada = "";
        this.github = "";
        this.linkedin = "";
        this.whatsapp = "";
        this.email = "";
        this.usuario = "";
        this.password = "";
    }
    
}