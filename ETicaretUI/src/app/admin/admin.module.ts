import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { ProductsModule } from './components/products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    ProductsModule
  ],
  exports:[
    LayoutModule
  ]
})
export class AdminModule { }
