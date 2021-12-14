import { Injectable } from '@angular/core';
import { Animal } from '../model/animals/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  animals: Animal[] = [
    {
      nombre: "Nala",
      tipo: "Perro",
      raza: "Mixta",
      sexo: "Hembra",
      edad: 9,
      duenio: "Isabel Diaz",
      valoracion: 9
    },
    {
      nombre: "Blacky",
      tipo: "Perro",
      raza: "Yorsay",
      sexo: "Macho",
      edad: 9,
      duenio: "Raul Clu",
      valoracion: 10
    },
    {
      nombre: "Salem",
      tipo: "Gato",
      raza: "Persa",
      sexo: "Macho",
      edad: 16,
      duenio: "Sara Alvarado",
      valoracion: 10
    },
    {
      nombre: "Piolin",
      tipo: "Pajaro",
      raza: "Canario",
      sexo: "Hembra",
      edad: 9,
      duenio: "Emilio Lopez",
      valoracion: 6
    },
    {
      nombre: "Brioso",
      tipo: "Caballo",
      raza: "Española",
      sexo: "Macho",
      edad: 5,
      duenio: "Jairo Buendia",
      valoracion: 7
    },
  ]
  constructor() { }

  getAnimals(){
    return this.animals;
  }
}
