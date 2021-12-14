import { Component } from '@angular/core';
import { Animal } from '../model/animals/animal';
import { AnimalsService } from '../user/animals.service';

@Component({
  selector: 'app-ranking-animales',
  templateUrl: './ranking-animales.component.html',
  styleUrls: ['./ranking-animales.component.scss']
})
export class RankingAnimalesComponent {

  data: any;

  options: any;

  ranking = this.animalService.getAnimals().sort((a,b) => a.valoracion > b.valoracion ? 1 : -1);

  constructor(private animalService: AnimalsService) {
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

  RankingAnimals() {

  }
}

