import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  productCreate(product: Create_Product, successCallBack?:any,errorCallBack?: any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
    },(errorResponse:HttpErrorResponse)=>{
      const _error:Array<{key:string, value:Array<string>}>=errorResponse.error;//bu property bana ilgili hataları getirir
      let message ="";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message+= `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });

  }
}
