import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AdministradoraCMM';

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/login');
    this.authService.logout();
  }
}

