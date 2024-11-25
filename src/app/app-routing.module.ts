import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { AppartementComponent } from './appartements/appartement/appartement.component';
import { ApartmentsByResidenceComponent } from './appartements/apartments-by-residence/apartments-by-residence.component';
import { AddAppartementComponent } from './appartements/add-appartement/add-appartement.component';

const routes: Routes = [
  {path: 'residences', component:ResidencesComponent},
  { path: 'home', component: HomeComponent },
  { path: 'residence-details/:id', component: ResidenceDetailsComponent },
  { path: 'update-residence/:id', component: AddResidenceComponent }, 
  { path: 'apartments', component: AppartementComponent }, 
  { path: 'apartments-by-residence/:id', component: ApartmentsByResidenceComponent },
  { path: 'add-apartment', component: AddAppartementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
