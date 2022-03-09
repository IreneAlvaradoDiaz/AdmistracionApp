import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/users/user';
import { PetsAndUsersService } from 'src/app/services/pets-and-users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private userService: PetsAndUsersService) { }
  
  users: User[] = [];
  
  ngOnInit(): void {
    this.userService.getIUser().then((data) => {
      this.users = data
    });
  }

  goHome() {
    this.router.navigateByUrl("/home")
  }

}
