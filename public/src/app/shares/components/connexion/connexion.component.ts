import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  message : string | undefined
  showPassword : boolean = false;
  loginGroup : FormGroup
  constructor
    (
      private userService : UserService,
      private localStorage : LocalStorageService,
      private formBuilder : FormBuilder,
      private route : Router
    )
  {
    this.loginGroup = this.formBuilder.group({
      email : formBuilder.control('', [Validators.required, Validators.email]),
      pwd : formBuilder.control('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  signIn(){
    this.userService.userLogin(this.loginGroup.value.email, this.loginGroup.value.pwd).subscribe((res:any)=>{
      console.log(res)
      this.localStorage.set('x-access-token', res.accessToken);
      if(res.role == "coiffeuse"){
        this.route.navigate(["/coiffeuse/dashboard"])
        this.localStorage.set('prenom', res.prenom)
        this.localStorage.set("role", res.role)
      }
      if(res.role == "cliente"){
        this.route.navigate(["/"])
        this.localStorage.set('prenom', res.prenom)
        this.localStorage.set("role", res.role)
      }
    },
    (err: any) => {
      console.log(err);
      this.message = err.error.message;
    }
    )
  }

}
