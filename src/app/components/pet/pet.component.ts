import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/animals/animal';
import { PetsAndUsersService } from 'src/app/services/pets-and-users.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  constructor(private router: Router, private petService: PetsAndUsersService) { }

  pets: Animal[] = [];
  pet: Animal = {} as Animal

  ngOnInit(): void {
    this.petService.getPets().then((data) => {
      this.pets = data
    })
  }

  goHome() {
    this.router.navigateByUrl("/home")
  }

}
