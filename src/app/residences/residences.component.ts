import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible", liked: false },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible", liked: false },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu", liked: false },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction", liked: false }
  ];

  searchTerm: string = '';

  showLocation(residence: Residence): void {
    if (residence.address.toLowerCase() === 'inconnu') {
      alert(`L'adresse de la résidence "${residence.name}" est "inconnu".`);
    } else {
      alert(`L'adresse de la résidence "${residence.name}" est : ${residence.address}.`);
    }
  }

  toggleLike(residence: Residence): void {
    residence.liked = !residence.liked;
  }
  

  filteredResidences(): Residence[] {
    return this.listResidences.filter(residence => 
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}