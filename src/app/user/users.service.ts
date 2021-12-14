import { Injectable } from '@angular/core';
import { User } from '../model/users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User[] = [
    {
      nombre: "Emilio",
      apellidos: "Lopez",
      sexo: "hombre",
      edad: 20,
      telefono: 612379812,
      email: "emiliolopez@gmail.com",
      valoracion: 6,
      anuncios: 2
    },
    {
      "nombre": "Raul",
      "apellidos": "Clu",
      "sexo": "hombre",
      "edad": 21,
      "telefono": 612234532,
      "email": "raulclu@gmail.com",
      "valoracion": 10,
      "anuncios": 5
    },
    {
      "nombre": "Jairo",
      "apellidos": "Buendia",
      "sexo": "hombre",
      "edad": 21,
      "telefono": 612452312,
      "email": "jairobuendia@gmail.com",
      "valoracion": 8,
      "anuncios": 1
    },
    {
      "nombre": "Sara",
      "apellidos": "Alvarado",
      "sexo": "mujer",
      "edad": 31,
      "telefono": 612373245,
      "email": "saraalvarado@gmail.com",
      "valoracion": 7,
      "anuncios": 4
    },
    {
      "nombre": "Isabel",
      "apellidos": "Diaz",
      "sexo": "mujer",
      "edad": 49,
      "telefono": 613379812,
      "email": "isabeldiaz@gmail.com",
      "valoracion": 9,
      "anuncios": 9
    }
  ]
  constructor() { }

  getUser() {
    return this.user;
  }
}
