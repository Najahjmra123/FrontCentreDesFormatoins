import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InscroptionComponent } from './inscroption/inscroption.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CondidatesComponent } from './candidates/condidates.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { AdminComponent } from './admin/admin.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';
import { FormationsComponent } from './formations/formations.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    NotFoundComponent,
    InscroptionComponent,
    NavbarComponent,
    FooterComponent,
    CondidatesComponent,
    FormateursComponent,
    AdminComponent,
    FormationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
