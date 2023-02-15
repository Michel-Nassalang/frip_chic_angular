import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Wish } from '../models/wish';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }
  urlWish = environment.apiUrl + '/wish';
  getWishAll() {
    return this.http.get<Wish[]>(this.urlWish);
  }
  getWish(id: number) {
    return this.http.get<Wish>(this.urlWish + "/" + id);
  }
  getprodByClient(clientId: string) {
    return this.http.get<Wish[]>(this.urlWish + "?clientId=" + clientId);
  }
  getclientByProd(productId: string) {
    return this.http.get<Wish[]>(this.urlWish + "?productId=" + productId);
  }
  postWish(c: Wish) {
    return this.http.post(this.urlWish, c);
  }
  deleteWish(id: number) {
    return this.http.delete(this.urlWish + "/" + id);
  }
}
