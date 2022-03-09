import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Advert } from '../../model/advert';
import { AdvertsService } from '../../services/Adverts.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AdvertComponent implements OnInit {

  adverts: Advert[] = [];

  constructor(public AdvertsService: AdvertsService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.AdvertsService.getAllAdverts().then((data) => {
      this.adverts = data;
    })
  }

  goHome() {
    this.router.navigateByUrl("/home")
  }

  confirm(advert: Advert) {
    this.confirmationService.confirm({
      message: `¿Seguro que quieres eliminar la publicación <strong>${advert.title}</strong> ?`,
      accept: () => {
          //Actual logic to perform a confirmation
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
          this.AdvertsService.deleteAdvert(advert.id);
      },  
      reject: () => {
        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
      }
  });
  }
}
