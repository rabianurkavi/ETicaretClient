import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersModule,
    ProductsModule,
    OrdersModule,
    DashboardModule

  ]
})
export class ComponentsModule { }
