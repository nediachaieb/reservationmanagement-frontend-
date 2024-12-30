import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-adherant',
  templateUrl: './add-adherant.component.html',
  styleUrl: './add-adherant.component.css'
})
export class AddAdherantComponent {
  newAdherant = { nom: '', email: '' };
  adherants: any[] = [];

  constructor(private apiService: GestionService ,private act:ActivatedRoute ,private route:Router) {}

  addAdherant(): void {
    this.apiService.addAdherant(this.newAdherant).subscribe(

      {
        "next" : data=>{ this.route.navigateByUrl("/adherants")},
        "error" : err => {},
        "complete":()=>{}
      }
    )
  }


}
