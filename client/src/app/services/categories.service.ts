import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(`${this.API_URI}/categories`);
  }

  getCategory(codigo_cat: string){
    return this.http.get(`${this.API_URI}/categories/${codigo_cat}`);
  }

  deleteCategory(codigo_cat: string) {
    return this.http.delete(`${this.API_URI}/categories/${codigo_cat}`);
  }

  saveCategory(category: Category) {
    return this.http.post(`${this.API_URI}/categories`, category);
  }

  updateCategory(codigo_cat: string|number, updatedCategory: Category) {
    return this.http.put(`${this.API_URI}/categories/${codigo_cat}`, updatedCategory);
  }
}
