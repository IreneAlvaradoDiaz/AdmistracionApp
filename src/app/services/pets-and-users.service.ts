import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionGroup } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Animal } from '../model/animals/animal';
import { User } from '../model/users/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PetsAndUsersService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  getIUser(): Promise<User[]>{
    return new Promise(resolve => {
      let users: { [key: string]: User } = {};
      (collectionData(collectionGroup(this.firestore, `iuser`), { idField: 'userId' }) as Observable<User[]>).subscribe(data => {
        resolve(data.map(u => {return users[u.userId] = u}));
      });
    });
  }

  getPets(): Promise<Animal[]>{
    return new Promise(resolve => {
      let users: { [key: string]: User } = {};

      (collectionData(collectionGroup(this.firestore, `iuser`), { idField: 'userId' }) as Observable<User[]>).subscribe(data => {
        data.forEach(u => users[u.userId] = u);

        (collectionData(collectionGroup(this.firestore, `Pet`), { idField: 'petId' }) as Observable<Animal[]>).subscribe(data => {
          resolve(data.map(a => {
            return { idUsers: users[a.idUser], ...a }; // copiamos los campos dentro del anuncio
          }));
        });
      });
    });
  }
}
