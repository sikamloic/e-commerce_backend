import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  SERVER_URL = environment.SERVER_URL
  constructor(
    private httpClient : HttpClient,
    private localStorage : LocalStorageService
  ) { }
  addImage(nom : string){
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/api/galerie';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': `${token}`,
        });
        const data = {nom : nom}
        return this.httpClient.post(
            API_URL,
            data,
            { headers: headers }
        );
  }

  getImage(){
    const token = this.localStorage.get('x-access-token');
        const API_URL = this.SERVER_URL + '/api/galerie';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': `${token}`,
        });
        return this.httpClient.get(API_URL, { headers: headers });
  }
  removeImage(id : string){
    const token = this.localStorage.get('x-access-token');
      const API_URL = this.SERVER_URL + '/api/galerie/' + id;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      });
      return this.httpClient.delete(API_URL, { headers: headers });
  }
}
