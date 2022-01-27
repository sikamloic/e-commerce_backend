import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shares/services/local-storage.service';
import { UserService } from 'src/app/shares/services/user.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  registerForm : FormGroup;
  message : string | undefined;
  constructor(
    private formBuilder : FormBuilder,
    private localStorage : LocalStorageService,
    private userService : UserService,
    private route : Router
  ) {
    this.registerForm = this.formBuilder.group({
      nom : formBuilder.control('', [Validators.required]),
      prenom : formBuilder.control('', [Validators.required]),
      tel : formBuilder.control('', [Validators.required]),
      email : formBuilder.control('', [Validators.required, Validators.email]),
      ville : formBuilder.control('' , [Validators.required]),
      pwd : formBuilder.control('', [Validators.required, Validators.minLength(6)])
    })
  }

  signIn(){
    this.userService.userLogin(
      this.registerForm.value.email,
      this.registerForm.value.pwd,
    ).subscribe((res : any)=>{
      console.log(res)
      this.localStorage.set("x-access-token", res.accessToken);
      this.localStorage.set("prenom", res.prenom)
      this.route.navigate(['/coiffeuse/dashboard'])
    })
  }

  signUp(){
    this.userService.userRegister(
      'coiffeuse',
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.tel,
      this.registerForm.value.ville,
      this.registerForm.value.email,
      this.registerForm.value.pwd,
    ).subscribe((res:any) =>{
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
