import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalerieComponent } from 'src/app/pages/coiffeuse/dashboard/galerie/galerie.component';

@Component({
  selector: 'app-delete-picture',
  templateUrl: './delete-picture.component.html',
  styleUrls: ['./delete-picture.component.scss']
})
export class DeletePictureComponent implements OnInit {

  constructor(
    private modalCtrl : MatDialogRef<DeletePictureComponent>,@Inject(MAT_DIALOG_DATA) public id: string,
  ) { }

  close(){
    this.modalCtrl.close()
  }

  ngOnInit(): void {
  }

}
