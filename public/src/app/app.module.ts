import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shares/components/header/header.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { InscriptionComponent } from './shares/components/inscription/inscription.component';
import { ConnexionComponent } from './shares/components/connexion/connexion.component';
import { MaterialModule } from './shares/modules/materials/materials.module';
import { AccueilComponent } from './pages/cliente/accueil/accueil.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AcceuilComponent } from './pages/coiffeuse/acceuil/acceuil.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalerieComponent } from './pages/coiffeuse/dashboard/galerie/galerie.component';
import { PrestationComponent } from './pages/coiffeuse/dashboard/prestation/prestation.component';
import { ProfilComponent } from './pages/coiffeuse/dashboard/profil/profil.component';
import { MessagerieComponent } from './pages/coiffeuse/dashboard/messagerie/messagerie.component';
import { DashboardCoiffeuseComponent } from './shares/components/dashboard-coiffeuse/dashboard-coiffeuse.component';
import { DashboardClienteComponent } from './shares/components/dashboard-cliente/dashboard-cliente.component';
import { DeletePictureComponent } from './shares/modals/delete-picture/delete-picture.component';
import { DeconnectionComponent } from './pages/coiffeuse/dashboard/deconnection/deconnection.component';
import { GetPrestationComponent } from './shares/modals/get-prestation/get-prestation.component';
import { AddPrestationComponent } from './shares/modals/add-prestation/add-prestation.component';
import { GetVilleComponent } from './shares/modals/get-ville/get-ville.component';
import { GetPlanningComponent } from './shares/modals/get-planning/get-planning.component';
import { CalendarComponent } from './shares/components/calendar/calendar.component';
import { ResultatComponent } from './pages/cliente/resultat/resultat.component';
import { VoirProfilComponent } from './pages/cliente/voir-profil/voir-profil.component';
import { MessagerieeComponent } from './pages/cliente/dashboard/messagerie/messagerie.component';
import { ParametresComponent } from './pages/cliente/dashboard/parametres/parametres.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilComponent,
    AcceuilComponent,
    GalerieComponent,
    PrestationComponent,
    ProfilComponent,
    MessagerieComponent,
    DashboardCoiffeuseComponent,
    DashboardClienteComponent,
    DeletePictureComponent,
    DeconnectionComponent,
    GetPrestationComponent,
    AddPrestationComponent,
    GetVilleComponent,
    GetPlanningComponent,
    CalendarComponent,
    ResultatComponent,
    VoirProfilComponent,
    MessagerieeComponent,
    ParametresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
