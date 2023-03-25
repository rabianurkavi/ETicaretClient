import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private httpClientService:HttpClientService) {
    super(spinner);
  }
  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallNewton);

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data=>console.log(data))

    // this.httpClientService.post({
    //   controller: "products"
    // },{
    //   name:"Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();
    this.httpClientService.put({
      controller:"products",
    },{
      id:"b71ab193-3323-47d6-2c46-08db2cc6e156",
      name:"Taşınabilir Ekran",
      stock: 20,
      price:3600
    }).subscribe()

    this.httpClientService.delete({
      controller:"products",
    },"59b9768a-84fe-496c-0a42-08db2cc8b858"
    ).subscribe();

  }
}
