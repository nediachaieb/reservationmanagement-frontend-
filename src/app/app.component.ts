import { Component } from '@angular/core';
import { GestionService } from './gestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reservationManagement';
  username: string = '';

  constructor(private gestionService: GestionService) {}

  ngOnInit() {
    this.username = this.gestionService.getUsername();
  }
}
