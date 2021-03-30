import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'categories/add',
    component: CategoryFormComponent
  },
  {
    path: 'categories/edit/:codigo_cat',
    component: CategoryFormComponent
  },
  {
    path: 'brands',
    component: BrandListComponent
  },
  {
    path: 'brands/add',
    component: BrandFormComponent
  },
  {
    path: 'brands/edit/:id_mar',
    component: BrandFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
