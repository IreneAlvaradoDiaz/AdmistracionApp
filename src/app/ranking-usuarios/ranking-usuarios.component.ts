import { Component, OnInit } from '@angular/core';
import { User } from '../model/users/user';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-ranking-usuarios',
  templateUrl: './ranking-usuarios.component.html',
  styleUrls: ['./ranking-usuarios.component.scss']
})
export class RankingUsuariosComponent{

  data: any;
    
  options: any;
  
  ranking = this.userService.getUser().sort((a,b) => a.valoracion > b.valoracion ? 1 : -1);
  
  constructor(private userService: UsersService) {
    this.data = {
        labels: this.ranking.map(n => n.nombre),
        datasets: [
          {
            label: 'Valoración',
            backgroundColor: '#596CD9',
            data: this.ranking.map(n => n.valoracion)
          },
        ]
      }
      
      this.options = {
          title: {
              display: true,
              text: 'My Title',
              fontSize: 16
          },
          legend: {
              position: 'bottom'
          }
      };
  }
}

