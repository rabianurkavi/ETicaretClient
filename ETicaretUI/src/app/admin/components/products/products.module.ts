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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';





@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductListComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule,
    MatPaginatorModule

  ]
})
export class ProductsModule { }
