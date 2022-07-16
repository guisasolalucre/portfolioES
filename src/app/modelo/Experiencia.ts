export class Experiencia {

    id?: number; 
    puesto: string;
    empresa: string;
    ubicacion: string;
    inicio: string;
    fin: string;
    descripcion: string;

    constructor(){
        this.puesto = "";
        this.empresa = "";
        this.ubicacion = "";
        this.inicio = "";
        this.fin = "";
        this.descripcion = "";
    }
}