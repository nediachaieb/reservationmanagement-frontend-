import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.component.html',
  styleUrl: './add-terrain.component.css'
})
export class AddTerrainComponent {

  newTerrain: any= { nom: '', surface: '' };
  terrains: any[] = [];
   constructor(private gest:GestionService ,private act:ActivatedRoute ,private route:Router) {}

   addTerrain(): void {
      this.gest.addTerrain(this.newTerrain).subscribe(

        {
          "next" : data=>{ this.route.navigateByUrl("/terrains")},
          "error" : err => {},
          "complete":()=>{}
        }
      )
    }
}
