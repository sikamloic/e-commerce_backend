import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shares/services/local-storage.service';

@Component({
  selector: 'app-deconnection',
  templateUrl: './deconnection.component.html',
  styleUrls: ['./deconnection.component.scss']
})
export class DeconnectionComponent implements OnInit {

  constructor(
    private localStorage: LocalStorageService,
    private route: Router
  ) { }

  deconnect(){
    this.localStorage.remove("x-access-token");
    this.route.navigate(['/connexion'])
  }

  ngOnInit(): void {
  }

}
