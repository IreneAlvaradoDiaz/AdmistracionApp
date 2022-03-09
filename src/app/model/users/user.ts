export interface User {
    userId:string;
    photo?:string;
    nombre:string;
    apellidos:string;
    sexo:string;
    email:string;
    fechaNacimiento:string;
    pass?:string;
    telefono:number;
    type: string;
    edit?:boolean;
}
