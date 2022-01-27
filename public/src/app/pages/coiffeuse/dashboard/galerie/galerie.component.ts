import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePictureComponent } from 'src/app/shares/modals/delete-picture/delete-picture.component';
import { GalerieService } from 'src/app/shares/services/galerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {

  slides: any[] = []
  pages: any[] = [{img:''}];
  userFile: any;
  imagePath: any;
  imgUrl: any;
  constructor(
    private modalCtrl : MatDialog,
    private Galerie : GalerieService
  ) {
    this.getImage()
   }

  openModal(id:string){
    const modal = this.modalCtrl.open(DeletePictureComponent, {
      data : id
    });
    modal.afterClosed().subscribe(res=>{
      console.log(res)
      this.removeImge(res)
    })
  }

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
            this.Galerie.addImage(this.imgUrl).subscribe((res: any) => {
                console.log(res);
                this.getImage();
            });
        };
    }
  }

  getImage() {
    this.Galerie.getImage().subscribe((res: any) => {
        console.log(res);
        // this.slides[0].img = res[0].nom;
        res.forEach((element:any, i:number) => {
          console.log(element);
          console.log(i)
          this.slides[i] = element
        });
    });
  }

  removeImge(id: string) {
    this.Galerie.removeImage(id).subscribe((res: any) => {
        this.getImage();
    });
}

  slideConfig = {
    "slidesToShow":4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  };


  addSlide() {
    // this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    // this.slides[].length = this.slides[].length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }


  ngOnInit(): void {
  }

}
