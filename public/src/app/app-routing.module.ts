import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/cliente/accueil/accueil.component';
import { MessagerieeComponent } from './pages/cliente/dashboard/messagerie/messagerie.component';
import { ResultatComponent } from './pages/cliente/resultat/resultat.component';
import { VoirProfilComponent } from './pages/cliente/voir-profil/voir-profil.component';
import { AcceuilComponent } from './pages/coiffeuse/acceuil/acceuil.component';
import { DeconnectionComponent } from './pages/coiffeuse/dashboard/deconnection/deconnection.component';
import { GalerieComponent } from './pages/coiffeuse/dashboard/galerie/galerie.component';
import { MessagerieComponent } from './pages/coiffeuse/dashboard/messagerie/messagerie.component';
import { PrestationComponent } from './pages/coiffeuse/dashboard/prestation/prestation.component';
import { ProfilComponent } from './pages/coiffeuse/dashboard/profil/profil.component';
import { ConnexionComponent } from './shares/components/connexion/connexion.component';
import { InscriptionComponent } from './shares/components/inscription/inscription.component';

const routes: Routes = [
  {path:'', redirectTo: 'cliente/accueil', pathMatch: 'full'},
  {path : 'cliente/accueil', component: AccueilComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'coiffeuse', redirectTo: 'coiffeuse/acceuil', pathMatch: 'full'},
  {path:'coiffeuse/acceuil', component:AcceuilComponent},
  {path: 'coiffeuse/dashboard', redirectTo: 'profil', pathMatch: 'full'},
  {path:'profil', component: ProfilComponent},
  {path: 'prestations', component: PrestationComponent},
  {path: 'galerie', component: GalerieComponent},
  {path: 'discussions', component: MessagerieComponent},
  {path: 'déconnection', component: DeconnectionComponent},
  {path: 'resultats', component: ResultatComponent},
  {path: 'details', component: VoirProfilComponent},
  {path: 'messagerie', component: MessagerieeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
