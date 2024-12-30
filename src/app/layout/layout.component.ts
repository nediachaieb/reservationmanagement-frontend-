import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  username: string = ''; // Propriété pour stocker le nom d'utilisateur

  constructor(private gestionService: GestionService) {}

  ngOnInit(): void {
    this.username = this.gestionService.getUsername(); // Récupère le nom d'utilisateur depuis le service
  }
}
