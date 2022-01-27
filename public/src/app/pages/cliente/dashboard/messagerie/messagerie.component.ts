import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieeComponent implements OnInit {

  items = [1,2,3,4]
  userFile: any;
  imagePath: any;
  imgUrl: any;
  constructor() { }

  upload(event: any) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
        var minetype = event.target.files[0].type;
        if (minetype.match(/image\/*/) == null) {
            console.log('erreur');
            return;
        }
        var reader = new FileReader();
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
            this.imgUrl = reader.result;
            // this.slides[0].img=reader.result;
        };
    }
  }

  ngOnInit(): void {
  }

}
