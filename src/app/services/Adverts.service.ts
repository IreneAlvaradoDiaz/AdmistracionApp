import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionGroup, deleteDoc, doc, query, setDoc, where, getDocs } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';
import { Animal } from '../model/animals/animal';
import { User } from '../model/users/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  constructor(private firestore: Firestore, private authService: AuthService) { }


  async addAdvert(advert: Advert) {
    const newDoc = doc(collection(this.firestore, `users/${this.authService.getCurrentUser()?.uid}/Adverts`));
    advert.id = newDoc.id;
    await setDoc(newDoc, advert);
  }

  getAdverts(): Observable<Advert[]> {
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser()?.uid}/Adverts`), { idField: 'id' }) as Observable<Advert[]>;
  }

  getAdvert(id: string): Promise<Advert | null> {
    return new Promise(resolve => {
      (collectionData(query(collectionGroup(this.firestore, `Adverts`), where('id', "==", id)), { idField: 'id' }) as Observable<Advert[]>).subscribe(data => {
        const advert = data.length ? data[0] : null;
        console.log(data, id);

        if (advert) {
          (collectionData(query(collectionGroup(this.firestore, `iuser`), where("userId", "==", advert.idUser)), { idField: 'userId' }) as Observable<User[]>).subscribe(data => {
            if (data.length) advert.nameUser = data[0];

            resolve(advert);
          });
        } else resolve(null);
      });
    });
  }

  async deleteAdvert(id: string): Promise<void> {
    return getDocs(query(collectionGroup(this.firestore, `Adverts`), where('id', "==", id))).then(result => {
      result.forEach(r => deleteDoc(r.ref));
    });
  }

  getAllAdverts(): Promise<Advert[]> {
    return new Promise(resolve => {
      let users: { [key: string]: User } = {};

      (collectionData(collectionGroup(this.firestore, `iuser`), { idField: 'userId' }) as Observable<User[]>).subscribe(data => {
        data.forEach(u => users[u.userId] = u);

        (collectionData(collectionGroup(this.firestore, `Adverts`), { idField: 'id' }) as Observable<Advert[]>).subscribe(data => {
          resolve(data.map(a => {
            return { nameUsers: users[a.idUser], ...a }; // copiamos los campos dentro del anuncio
          }));
        });
      });
    });
  }
}
