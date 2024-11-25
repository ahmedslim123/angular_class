import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/core/models/appartement';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent {
  apartment: Apartment = {
    apartNum: 0,
    floorNum: 0,
    surface: 0,
    terrace: false,
    surfaceterrace: 0,
    category: '',
    ResidenceId: 0
  };

  constructor(private router: Router) {}

  saveApartment(): void {
    // Simuler l'enregistrement de l'appartement
    console.log('Nouvel appartement ajouté :', this.apartment);
    // Retourner à la liste des appartements après l'ajout
    this.router.navigate(['/apartments']);
  }
}
