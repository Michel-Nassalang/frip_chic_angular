import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  urlCart = environment.apiUrl + '/cart';
  getcartAll() {
    return this.http.get<Cart[]>(this.urlCart);
  }
  getcart(id: number) {
    return this.http.get<Cart>(this.urlCart + "/" + id);
  }
  getCartByClient(clientId: number) {
    return this.http.get<Cart[]>(this.urlCart + "?clientId=" + clientId);
  }
  getCartByProd(productId: number) {
    return this.http.get<Cart[]>(this.urlCart + "?productId=" + productId);
  }
  postcart(c: Cart) {
    return this.http.post(this.urlCart, c);
  }
  deletecart(id: number) {
    return this.http.delete(this.urlCart + "/" + id);
  }
}
