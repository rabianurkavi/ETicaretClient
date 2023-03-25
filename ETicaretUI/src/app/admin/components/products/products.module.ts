import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatButtonModule

  ]
})
export class ProductsModule { }
