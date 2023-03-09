import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      //boş geçiyorum ki customers, products, orders, dashboard gibi istekler gelsin
      {path: "", component: CustomersComponent}//eğer ki bu modüle customer diye bir istek gelirse CustomerComponenti angul etmeli
    ])
  ]
})
export class CustomersModule { }
