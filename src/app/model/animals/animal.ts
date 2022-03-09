export interface Animal {
    petId:string;
    idUser:string;
    nombre:string;
    photo:string;
    tipo:string;
    raza:string;
    fechaNacimiento:string;
    sexo:string;
    enfermedad:boolean;
    vacunas:boolean;
    chip:boolean;
    descripcion:string;
    cuidados:string;
    edit?:boolean;
}
