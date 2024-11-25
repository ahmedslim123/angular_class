import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';


@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  isUpdateMode = false; // Pour différencier ajout et mise à jour
  residence: Residence = {
    id: 0,
    name: '',
    address: '',
    image: '',
    status: '',
    liked: false,
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const residenceId = this.route.snapshot.paramMap.get('id');

    if (residenceId) {
      this.isUpdateMode = true;
      // Simuler la récupération des données de la résidence à mettre à jour
      const allResidences: Residence[] = [
        { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible", liked: false },
        { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible", liked: false },
        { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu", liked: false },
        { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction", liked: false }
      ];

      this.residence = allResidences.find(res => res.id === Number(residenceId))!;
    }
  }

  saveResidence(): void {
    if (this.isUpdateMode) {
      // Logique pour mettre à jour la résidence
      console.log('Residence mise à jour :', this.residence);
    } else {
      // Logique pour ajouter une nouvelle résidence
      console.log('Nouvelle résidence ajoutée :', this.residence);
    }

    this.router.navigate(['/residences']);
  }
}
