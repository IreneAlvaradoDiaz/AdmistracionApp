import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(private authService: AuthService, private router: Router){ }

  ngOnInit(): void {
  }


  email: string = '';
  pass: string = "";

  async login(){
    const current = await this.authService.login(this.email, this.pass);
    if (current) {
      this.router.navigateByUrl('/home');
    } else{
      console.error("error")
    }
  }

}
