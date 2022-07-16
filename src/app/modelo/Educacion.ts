export class Educacion {

    id?: number;
    carrera: string;
    institucion: string;
    ubicacion: string;
    inicio: string;
    fin?: string;

    constructor(){
        this.carrera = "";
        this.institucion = "";
        this.ubicacion = "";
        this.inicio = "";
        this.fin = "";
    }


}