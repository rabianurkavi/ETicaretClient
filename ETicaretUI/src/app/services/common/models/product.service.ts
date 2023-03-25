import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  productCreate(product: Create_Product, successCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
      alert("başarılı")

    })

  }
}
