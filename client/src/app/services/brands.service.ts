import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Brand } from '../models/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getBrands(){
    return this.http.get(`${this.API_URI}/brands`);
  }

  getBrand(id_mar: string){
    return this.http.get(`${this.API_URI}/brands/${id_mar}`);
  }

  deleteBrand(id_mar: string) {
    return this.http.delete(`${this.API_URI}/brands/${id_mar}`);
  }

  saveBrand(brand: Brand) {
    return this.http.post(`${this.API_URI}/brands`, brand);
  }

  updateBrand(id_mar: string|number, updatedBrand: Brand) {
    return this.http.put(`${this.API_URI}/brands/${id_mar}`, updatedBrand);
  }
}
