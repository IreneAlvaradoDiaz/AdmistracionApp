import { Component, OnInit } from '@angular/core';
import { User } from '../model/users/user';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{  

  user: User[] = [];
  userGender: string = "";

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  Search(){
    if (this.userGender == "") {
      this.user = this.userService.getUser();
    } else {
      this.user = this.userService.getUser();
      this.user = this.user.filter(c => c.apellidos.startsWith(this.userGender));
    }
  }

}
