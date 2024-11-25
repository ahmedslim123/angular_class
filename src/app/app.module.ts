import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { AddAppartementComponent } from './appartements/add-appartement/add-appartement.component';
import { AppartementComponent } from './appartements/appartement/appartement.component';
import { AppartementDetailsComponent } from './appartements/appartement-details/appartement-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsByResidenceComponent } from './appartements/apartments-by-residence/apartments-by-residence.component'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AddAppartementComponent,
    AppartementComponent,
    AppartementDetailsComponent,
    NotFoundComponent,
    ApartmentsByResidenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add it to the imports array
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
