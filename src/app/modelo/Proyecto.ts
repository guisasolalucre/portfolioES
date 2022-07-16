export class Proyecto {
    
    id?: number;
    nombre: string;
    link: string;
    descripcion: string;
    inicio: string;
    fin: string;

    constructor(){
        this.nombre = "";
        this.link = "";
        this.descripcion = "";
        this.inicio = "";
        this.fin = "";
    }
}