import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-prestation',
  templateUrl: './get-prestation.component.html',
  styleUrls: ['./get-prestation.component.scss']
})
export class GetPrestationComponent implements OnInit {

  value : string = ''
  subMenu : any[] = []
  items = [
    {
      nom: 'vanilles (twists)', 
      check: false,
      sub:[
        {nom: 'vanilles (twists) effet mi-longue', check: false},
        {nom: 'vanilles (twists) effet longue', check: false},
      ]
    },
    {
      nom: 'pose lace wig', 
      check: false,
      sub:[
        {nom: 'nattes', check: false},
      ]
    },
  ]
  constructor(
    private modalCtrl : MatDialogRef<GetPrestationComponent>, @Inject(MAT_DIALOG_DATA) public id: string,
  ) { }

  showSubMenu(item:any){
    item.check = !item.check
    if(item.check == true){
      this.subMenu = item.sub
    }
  }

  getValue(item:any){
    item.check = !item.check
    if(item.check == true){
      return this.value = item.nom
    }
  }

  close(){
    this.modalCtrl.close()
  }

  ngOnInit(): void {
  }

}
