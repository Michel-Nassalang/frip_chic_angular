import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  urlProd = environment.apiUrl + '/products';
  private cartService: CartService;
  getproduct() {
    return this.http.get<Product[]>(this.urlProd);
  }
  getprod(id: number) {
    return this.http.get<Product>(this.urlProd + "/" + id);
  }

  getprodByName(name: string) {
    return this.http.get<Product[]>(this.urlProd + "?name=" + name);
  }

  getprodByCategory(category: number) {
    return this.http.get<Product[]>(this.urlProd + "?category=" + category);
  }

  getprodBycategoryAndName(name: string, category: string) {
    return this.http.get<Product[]>(this.urlProd + "?name=" + name + "&?category=" + category);
  }

  postproduct(p: Product) {
    return this.http.post(this.urlProd, p);
  }

  deleteprod(id: number) {
    return this.http.delete(this.urlProd + "/" + id);
  }

  updateprod(prod: Product, type: string, val: number) {
    if (type == 'quantity') {
      return this.http.put(this.urlProd + "/" + prod.id, { "id": prod.id, "title": prod.title, "quantity": val, "notation": prod.notation, "price": prod.price });
    } else if (type == 'notation') {
      return this.http.put(this.urlProd + "/" + prod.id, { "id": prod.id, "title": prod.title, "quantity": prod.quantity, "notation": val, "price": prod.price });
    } else {
      return
    }
  }
}
