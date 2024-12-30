import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  response: any = { 'token': "" }

  constructor(private gest: GestionService, private route: Router) { }


  connex(request: any) {
    this.gest.connexion(request).subscribe({


      next: data => {
        console.log(data.body)
        let body: any = data.body;
        this.response.token = body.token;
        localStorage.setItem("token", body.token)
        this.gest.saveToken(this.response.token);
        this.route.navigateByUrl("/reservations");
      }
    })

  }
}
