import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.component.html',
  styleUrl: './terrains.component.css'
})
export class TerrainsComponent {

  terrains: any[] = [];
  ter: any=[] ;
  newTerrain: any= { nom: '', surface: '' };

  constructor(private gest: GestionService) {
    this.getAllTerrains();
  }

  getAllTerrains(): void {
    this.gest.getAllTerrains().subscribe({
      "next" : data=>{ this.ter=data},
      "error" : err => {},
      "complete":()=>{}
    });
  }



  deleteTerrain(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce terrain ?')) {
    this.gest.deleteTerrain(id).subscribe({
      next: () => {
        this.getAllTerrains();
      },
      error: (err) => {
        alert('Erreur lors de la suppression du terrain.');
        console.error('Erreur :', err);
      }
    });
  }
}
}

