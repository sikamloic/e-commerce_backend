import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PrestationService } from '../../services/prestation.service';
import { GetPrestationComponent } from '../get-prestation/get-prestation.component';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  registerForm : FormGroup
  value : string = ''
  constructor(
    private modalCtrl : MatDialog,
    private prestation : PrestationService,
    private formbuilder : FormBuilder
  ){
    this.registerForm = this.formbuilder.group({
      prestation: formbuilder.control('', [Validators.required]),
      tarif: formbuilder.control('', [Validators.required])
    })
  }

  register(){
    this.prestation.addPrestation(this.registerForm.value.prestation, this.registerForm.value.tarif)
    .subscribe((res : any) =>{
      console.log(res)
      this.modalCtrl.closeAll()
    })
  }

  openModal(){
    const modal = this.modalCtrl.open(GetPrestationComponent)
    modal.afterClosed().subscribe((res:any) =>{
      console.log(res)
      this.value = res
    })
  }

  close(){
    this.modalCtrl.closeAll()
  }

  ngOnInit(): void {
  }

}
