import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void{
    this.showSpinner(SpinnerType.SquareJellyBox)
  }

  @ViewChild(ProductListComponent) listComponents:ProductListComponent

  createdProduct(createdProduct: Create_Product){
    this.listComponents.getProducts();

  }

}
