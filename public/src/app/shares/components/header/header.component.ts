import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role: string |undefined| null
  prenom : string | undefined | null
  verifyToken = false;
  menu = false;
  items = [
    {title: 'Mon profil', img:'assets/profil.svg', to:'/profil'},
    {title: 'Mon guide coiffeuse', img:'assets/guide_coiffeuse.svg', to:''},
    {title: 'Mes prestations', img:'assets/prestations.svg', to:'/prestations'},
    {title: 'Ma galerie', img:'assets/galerie.svg', to:'/galerie'},
    {title: 'Mon porte monnaie', img:'assets/porte_monnaie.svg', to:''},
    {title: 'Mon historique', img:'assets/historique.svg', to:''},
    {title: 'Mes discussions', img:'assets/discussions.svg', to:'/discussions'},
    {title: 'Mon planning', img:'assets/planning.svg', to:''},
    {title: 'Mes rendez-vous', img:'assets/rendez-vous.svg', to:''},
  ]
  items2 = [
    {title: 'Mon historique', img:'assets/historique.svg', to:'/profil'},
    {title: 'Mes messages', img:'assets/messages.svg', to:''},
    {title: 'Inviter des amis', img:'assets/inviter-amis.svg', to:'/prestations'},
    {title: 'Questions fréquentes', img:'assets/questions.svg', to:'/galerie'},
    {title: 'Nous contacter', img:'assets/nous-contacter.svg', to:''},
    {title: 'Paramètres', img:'assets/parametres.svg', to:''},
  ]
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    if(this.localStorage.get("x-access-token")==null){
      this.verifyToken = false
    }
    else{
      this.verifyToken = true
      this.prenom = this.localStorage.get("prenom")
      this.role = this.localStorage.get('role')
    };
  }

}
