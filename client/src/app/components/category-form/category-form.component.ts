import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute ,Router } from '@angular/router';

import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = {
    codigo_cat: 0,
    nombre_cat: '',
    descripcion_categoria_cat: ''
  };

  edit: boolean = false;

  constructor(private categoriesService: CategoriesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.codigo_cat) {
      this.categoriesService.getCategory(params.codigo_cat)
        .subscribe(
          res => {
            console.log(res)
            this.category = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewCategory(){
    delete this.category.codigo_cat;
    this.categoriesService.saveCategory(this.category)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/categories']);
        },
        err => console.error(err)
      )
  }

  updateCategory(){
    this.categoriesService.updateCategory(this.category.codigo_cat, this.category)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/categories']);
        },
        err => console.log(err)
      )
  }

}
