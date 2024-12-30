import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {
  reservations: any=[];

  constructor(private gest: GestionService ,private act:ActivatedRoute ,private route:Router) {
    this.getAllReservations();
  }

  getAllReservations(): void {
    this.gest.getAllReservations().subscribe({
      "next" : data=>{ this.reservations = data},
      "error" : err => {},
      "complete":()=>{}

    });
  }

  deleteReservation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette reservation ?')) {
    this.gest.deleteReservation(id).subscribe(
      {
        next: () => {
          this.getAllReservations();
        },
        error: (err) => {
          alert('Erreur lors de la suppression du reservation.');
          console.error('Erreur :', err);
        }


      }
    )
  }
  }
}
