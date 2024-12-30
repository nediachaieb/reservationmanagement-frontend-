import { Component } from '@angular/core';
import { AdherentsComponent } from '../adherents/adherents.component';
import { TerrainsComponent } from '../terrains/terrains.component';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent {
  newReservation: any = {
    date_res:'',
    heure_debut: 0,
    heure_fin: 0,
    user: {} as AdherentsComponent,
    ter: {} as TerrainsComponent,
  };
  adherants: any = [];
  terrains: any = [];

  constructor(private gest:GestionService ,private act:ActivatedRoute ,private route:Router) {
    this.getAllAdh();
    this.getAllTer();
  }

  getAllAdh(): void {
    this.gest.getAllAdherants().subscribe((data) => {
      this.adherants = data;
    });
  }

  getAllTer(): void {
    this.gest.getAllTerrains().subscribe((data) => {
      this.terrains = data;
    });
  }

  addReservation(): void {
    this.gest.addReservation(this.newReservation).subscribe(

      {
        "next" : data=>{ this.route.navigateByUrl("/reservations")},
        "error" : err => {},
        "complete":()=>{}
      }
    )

  }

}
