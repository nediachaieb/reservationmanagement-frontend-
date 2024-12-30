import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adherents',
  templateUrl: './adherents.component.html',
  styleUrl: './adherents.component.css'
})
export class AdherentsComponent {
  adherants: any[] = [];
  adherant: any=[] ;
  newAdherant: any = { nom: '', email: '' };

  constructor(private gest: GestionService ,private act:ActivatedRoute ,private route:Router ) {
    this.getAllAdherants(); // Appel direct lors de la création
  }

  getAllAdherants(): void {
    this.gest.getAllAdherants().subscribe({
      "next" : data=>{ this.adherant=data},
      "error" : err => {},
      "complete":()=>{}
    });
  }


  deleteAdherant(id: number): void {
    this.gest.deleteAdherant(id).subscribe(
      {
        "next":  data =>{ this.route.navigateByUrl('/adherants')},
        "error" : err=>{},
        "complete" : ()=>{}


      });
  }


}

