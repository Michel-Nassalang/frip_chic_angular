import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient){}

  urlClient = environment.apiUrl + '/clients';
  getAllClient() {
    return this.http.get<Client[]>(this.urlClient);
  }
  getClient(id: number) {
    return this.http.get<Client>(this.urlClient + "/" + id);
  }
  getClientByPseudo(pseudo: string) {
    return this.http.get<Client[]>(this.urlClient + "?pseudo=" + pseudo);
  }
  getClientByEmail(email: string) {
    return this.http.get<Client>(this.urlClient + "?email=" + email);
  }
  getClientByPseudoAndMdp(pseudo: string, mdp: string) {
    return this.http.get<Client>(this.urlClient + "?pseudo=" + pseudo + "&?mdp=" + mdp);
  }
  postClient(c: Client) {
    return this.http.post(this.urlClient, c);
  }
  deleteClient(c: Client) {
    return this.http.delete(this.urlClient + "/" + c.id);
  }
  updateClient(c: Client) {
      return this.http.put(this.urlClient + "/" + c.id, {  });
  }

}
