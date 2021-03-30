import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoryFormComponent,
    CategoryListComponent,
    BrandFormComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CategoriesService,
    BrandsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
