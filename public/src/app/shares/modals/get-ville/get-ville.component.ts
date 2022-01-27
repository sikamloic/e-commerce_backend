import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-ville',
  templateUrl: './get-ville.component.html',
  styleUrls: ['./get-ville.component.scss']
})
export class GetVilleComponent implements OnInit {

  value : string = ''
  subMenu : any[] = []
  items = [
    {
      nom: 'Paris', 
      check: false,
      sub:[
        {nom: 'Seine-et-Marne (77)', check: false},
        {nom: 'Yvelines (78)', check: false},
        {nom: 'Essonne (91)', check: false},
        {nom: 'Hauts-de-Seine (92)', check: false},
        {nom: 'Seine-Saint-Denis (93)', check: false},
      ]
    },
    {
      nom: 'Lille', 
      check: false,
    },
    {
      nom: 'Nantes', 
      check: false,
    },
    {
      nom: 'Bordeaux', 
      check: false,
    },
    {
      nom: 'Rennes', 
      check: false,
    },
  ]
  constructor(
    private modalCtrl : MatDialogRef<GetVilleComponent>, @Inject(MAT_DIALOG_DATA) public id: string,
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

