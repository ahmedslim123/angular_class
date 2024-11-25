import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/appartement';


@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  residenceId!: number;
  apartments: Apartment[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la résidence via les paramètres d'URL
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));

    // Charger les appartements pour cette résidence (simulation)
    this.apartments = [
      { apartNum: 101, floorNum: 1, surface: 80, terrace: true, surfaceterrace: 10, category: 'T3', ResidenceId: this.residenceId },
      { apartNum: 102, floorNum: 1, surface: 75, terrace: false, surfaceterrace: 0, category: 'T2', ResidenceId: this.residenceId },
      { apartNum: 201, floorNum: 2, surface: 100, terrace: true, surfaceterrace: 15, category: 'T4', ResidenceId: this.residenceId },
    ];
  }
}
