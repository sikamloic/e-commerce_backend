import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  updateRegister : FormGroup
  constructor(
    private formbuilder : FormBuilder
  ) {
    this.updateRegister = this.formbuilder.group({
      email: formbuilder.control(''),
      postal: formbuilder.control(''),
      ville: formbuilder.control(''),
      adresse: formbuilder.control(''),
      nom: formbuilder.control(''),
      prenom: formbuilder.control(''),
      biographie: formbuilder.control(''),
      tel: formbuilder.control('')
    })
  }

  ngOnInit(): void {
  }

}
