import { Component } from '@angular/core';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  // Sample list of apartments
  apartments = [
    { apartNum: 101, floorNum: 1, surface: 80, terrace: true, surfaceterrace: 10, category: 'T3' },
    { apartNum: 102, floorNum: 1, surface: 75, terrace: false, surfaceterrace: 0, category: 'T2' },
    { apartNum: 201, floorNum: 2, surface: 100, terrace: true, surfaceterrace: 15, category: 'T4' },
    { apartNum: 202, floorNum: 2, surface: 90, terrace: false, surfaceterrace: 0, category: 'T3' }
  ];
}
