import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private clientService: ClientService){}
  private token!: string;
  private client!: Client;
  login(pseudo: string, password: string) {
    this.clientService.getClientByPseudoAndMdp(pseudo, password).subscribe(
      (data: Client)=> this.client = data
    );
    this.token = "Token:" + this.client?.id;
  }

  getToken(): string {
    return this.token;
  }
  getClient(): Client {
    return this.client;
  }
}
