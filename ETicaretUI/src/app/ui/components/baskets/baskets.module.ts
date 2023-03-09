import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    BasketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: DashboardComponent}
    ])
  ]
})
export class BasketsModule { }
