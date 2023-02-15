import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  urlCtgr = environment.apiUrl + '/categories';
  getcategories(){
    return this.http.get<Category[]>(this.urlCtgr);
  }
  getCtgr(id: number){
    return this.http.get<Category>(this.urlCtgr + "/" + id);
  }
  postcategory(c:Category){
    return this.http.post(this.urlCtgr, c);
  }
  deleteCtgr(id:number){
    return this.http.delete(this.urlCtgr+"/"+id);
  }
}
