import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand';
import { ActivatedRoute ,Router } from '@angular/router';

import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {

  brand: Brand = {
    id_mar: 0,
    nombre_mar: ''
  };

  edit: boolean = false;

  constructor(private brandsService: BrandsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id_mar) {
      this.brandsService.getBrand(params.id_mar)
        .subscribe(
          res => {
            console.log(res)
            this.brand = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewBrand(){
    delete this.brand.id_mar;
    this.brandsService.saveBrand(this.brand)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/brands']);
        },
        err => console.error(err)
      )
  }

  updateBrand(){
    this.brandsService.updateBrand(this.brand.id_mar, this.brand)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/brands']);
        },
        err => console.log(err)
      )
  }

}
