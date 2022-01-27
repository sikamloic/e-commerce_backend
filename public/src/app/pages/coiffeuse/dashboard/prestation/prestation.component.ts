import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPrestationComponent } from 'src/app/shares/modals/add-prestation/add-prestation.component';
import { PrestationService } from 'src/app/shares/services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {

  items : any
  constructor(
    private modalCtrl : MatDialog,
    private prestation : PrestationService
  ){
    this.getPrestation()
  }

  getPrestation(){
    this.prestation.getPrestation().subscribe((res : any) =>{
      console.log(res);
      this.items = res
    })
  }

  remove(id :string){
    this.prestation.removePrestation(id).subscribe(() =>{
      this.getPrestation()
    })
  }

  openModal(){
    const modal = this.modalCtrl.open(AddPrestationComponent)
    modal.afterClosed().subscribe(() =>{
      this.getPrestation()
    })
  }

  ngOnInit(): void {
  }

}
