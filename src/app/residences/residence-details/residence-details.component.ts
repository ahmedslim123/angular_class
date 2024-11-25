import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';


@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residences: Residence[] = [];
  residence!: Residence;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer les données transmises via le routeur
    this.residences = history.state.residences || [];
    const residenceId = Number(this.route.snapshot.paramMap.get('id'));

    // Trouver la résidence actuelle
    this.residence = this.residences.find(res => res.id === residenceId)!;

    if (!this.residence) {
      this.router.navigate(['/residences']); // Rediriger si l'ID est invalide
    }
  }

  goToNextResidence(): void {
    if (this.residences.length > 0) {
      // Trouver l'index de la résidence actuelle
      const currentIndex = this.residences.findIndex(res => res.id === this.residence.id);
      const nextIndex = (currentIndex + 1) % this.residences.length; // Circulaire
      const nextResidence = this.residences[nextIndex];

      // Naviguer vers la résidence suivante
      this.router.navigate(['/residence-details', nextResidence.id], {
        state: { residences: this.residences }
      });
    }
  }
}
