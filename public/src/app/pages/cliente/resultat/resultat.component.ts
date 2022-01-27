import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetPlanningComponent } from 'src/app/shares/modals/get-planning/get-planning.component';
import { GetPrestationComponent } from 'src/app/shares/modals/get-prestation/get-prestation.component';
import { GetVilleComponent } from 'src/app/shares/modals/get-ville/get-ville.component';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {

  prestation: string =''
  ville: string =''
  items=[1,2,3,4]
  constructor(
    private modalCtrl : MatDialog
  ) { }

  openPrestation(){
    const modal = this.modalCtrl.open(GetPrestationComponent)
    modal.afterClosed().subscribe((res:any)=>{
      this.prestation = res
    })
  }

  openVille(){
    const modal = this.modalCtrl.open(GetVilleComponent)
    modal.afterClosed().subscribe((res)=>{
      this.ville = res
    })
  }

  openPlanning(){
    const modal = this.modalCtrl.open(GetPlanningComponent)
    modal.afterClosed().subscribe((res:any)=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
