import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private localStorage : LocalStorageService,
    private httpClient : HttpClient
  ) { }

  userRegister(
      role: string, 
      nom: string, 
      prenom: string, 
      numero: number, 
      ville: string, 
      email: string, 
      pwd: string
  )
  {
    const API_URL = this.SERVER_URL + '/api/signUp';
    return this.httpClient.post(
      API_URL,
      {
        role: role,
        nom: nom,
        prenom: prenom,
        numero: numero,
        ville: ville,
        email: email,
        pwd: pwd,
      }
    )
  }

  userLogin(email: string, pwd: string) {
    const API_URL = this.SERVER_URL + '/api/signIn';
    return this.httpClient.post(API_URL, {
        email: email,
        pwd: pwd,
    });
}
}
