import { User } from "./users/user";

export interface Advert {
    id: string;
    idUser: string;
    tipe:string;
    nameUser: User;
    title:string;
    rate: number[];
    create_At: Date;
    price: number;
    rateAvg: number;
    location: string;
}
