export class Torre {
    //? No es obligatorio
    idTorre ?: number;
    nombreTorre: string;
    cantidadAptos: number;

    constructor(nombreTorre: string, cantidadAptos: number){
        this.nombreTorre = nombreTorre;
        this.cantidadAptos = cantidadAptos;
    }

}
