import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from '../../model/advert';
import { AdvertsService } from '../../services/Adverts.service';

@Component({
  selector: 'app-ranking-adverts',
  templateUrl: './ranking-adverts.component.html',
  styleUrls: ['./ranking-adverts.component.scss']
})
export class RankingAdvertsComponent implements OnInit{

  data: any;
  options: any;
  ranking: any;
  adverts: Advert[] = [];

  ngOnInit() {
    
  }
  constructor(private AdvertsService: AdvertsService, private router: Router) {
    this.ranking = this.AdvertsService.getAllAdverts().then((dato) => {
      console.log(dato);
      this.adverts = dato;
    
    this.data = {
        labels: dato.map(t => t.title),
        datasets: [
          {
            label: 'Valoración',
            indexAxis: 'y',
            backgroundColor: '#596CD9',
            data: dato.map(n => n.rateAvg)
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
    });
    
  }
  
  goHome(){
    this.router.navigateByUrl("/home")
  }
}

