import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-coiffeuse',
  templateUrl: './dashboard-coiffeuse.component.html',
  styleUrls: ['./dashboard-coiffeuse.component.scss']
})
export class DashboardCoiffeuseComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
