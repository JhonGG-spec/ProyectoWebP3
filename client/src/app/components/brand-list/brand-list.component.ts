import { Component, OnInit } from '@angular/core';

import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: any = [];

  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getBrands().subscribe(
      res => {
        this.brands = res;
      },
      err => console.error(err)
    );
  }

  deleteBrand(id_mar: string) {
    this.brandsService.deleteBrand(id_mar).subscribe(
      res => {
        console.log(res)
        this.getBrands();
      },
      err => console.error(err)
    );
  }
}
