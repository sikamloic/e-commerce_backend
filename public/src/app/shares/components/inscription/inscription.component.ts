import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  message : string | undefined
  data : any;
  registerForm : FormGroup
  showPassword : boolean = false;
  constructor(
    private formbuilder : FormBuilder,
    private userService : UserService,
    private localStorage : LocalStorageService,
    private route : Router
  ) { 
    this.registerForm = this.formbuilder.group({
      nom: formbuilder.control('', [Validators.required]),
      prenom: formbuilder.control('', [Validators.required]),
      ville: formbuilder.control('', [Validators.required]),
      tel: formbuilder.control('', [Validators.required]),
      email: formbuilder.control('', [Validators.email, Validators.required]),
      pwd: formbuilder.control('', [Validators.required, Validators.minLength(6)])
    })
  }

  signIn(){
    this.userService.userLogin(this.registerForm.value.email, this.registerForm.value.pwd)
    .subscribe((res:any)=>{
      this.localStorage.set("x-access-token", res.accessToken);
      this.localStorage.set("prenom", res.prenom);
      this.route.navigate(['/'])
    })
  }

  signUp(){
    this.userService.userRegister(
      'cliente',
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.tel,
      this.registerForm.value.ville,
      this.registerForm.value.email,
      this.registerForm.value.pwd,
    ).subscribe((res:any)=>{
      console.log(res);
      this.signIn()
    },
    (err: any) => {
      console.log(err);
      this.message = err.error.message;
    }
    )
  }

  ngOnInit(): void {
  }

}
