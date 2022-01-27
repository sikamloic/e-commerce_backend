import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voir-profil',
  templateUrl: './voir-profil.component.html',
  styleUrls: ['./voir-profil.component.scss']
})
export class VoirProfilComponent implements OnInit {

  star = [1,2,3,4,5]
  slides = [1,2,3,4,5,6,7]
  constructor() { }

  slideConfig = {
    "slidesToShow":5,
    "slidesToScroll": 5,
    "dots": true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  ngOnInit(): void {
  }

}
