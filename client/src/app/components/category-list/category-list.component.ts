import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => console.error(err)
    );
  }

  deleteCategory(codigo_cat: string) {
    this.categoriesService.deleteCategory(codigo_cat).subscribe(
      res => {
        console.log(res)
        this.getCategories();
      },
      err => console.error(err)
    );
  }
}
