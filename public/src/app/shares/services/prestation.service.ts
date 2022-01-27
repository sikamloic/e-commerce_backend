import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  SERVER_URL = environment.SERVER_URL
  constructor(
    private httpClient : HttpClient,
    private localStorage : LocalStorageService
  ) { }
  addPrestation(nom : string, prix:number){
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/api/prestation';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': `${token}`,
        });
        const data = {
          nom : nom,
          prix: prix
        }
        return this.httpClient.post(
            API_URL,
            data,
            { headers: headers }
        );
  }

  getPrestation(){
    const token = this.localStorage.get('x-access-token');
        const API_URL = this.SERVER_URL + '/api/prestation';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': `${token}`,
        });
        return this.httpClient.get(API_URL, { headers: headers });
  }
  removePrestation(id : string){
    const token = this.localStorage.get('x-access-token');
      const API_URL = this.SERVER_URL + '/api/prestation/' + id;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      });
      return this.httpClient.delete(API_URL, { headers: headers });
  }
}
