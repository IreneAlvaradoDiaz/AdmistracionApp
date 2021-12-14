import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animals/animal';
import { AnimalsService } from '../user/animals.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {

  animals: Animal[] = [];
  AnimalGender: string = "";

  constructor(private animalService: AnimalsService) { }

  ngOnInit(): void {
    this.animals = this.animalService.getAnimals();
  }

  Search(){
    if (this.AnimalGender == "") {
      this.animals = this.animalService.getAnimals();
    } else {
      this.animals = this.animalService.getAnimals();
      this.animals = this.animals.filter(c => c.duenio.startsWith(this.AnimalGender));
    }
  }
}
