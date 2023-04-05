import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  productCreate(product: Create_Product, successCallBack?:() =>void,errorCallBack?: (errorMessage:string) =>void){
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

  async productRead(page : number=0, size : number = 5,successCallBack?: () =>void,errorCallBack?:(errorMessage:string)=>void):Promise<{totalCount:number;products:List_Product[]}>{//nasıl ki c# da task yazıyoruz burada da Promise yazıyoruz
    const promiseData:Promise<{totalCount:number; products:List_Product[]}> = this.httpClientService.get<{totalCount:number; products:List_Product[]}>({
      controller:"products",
      queryString: `page=${page}&size=${size}`
    }).toPromise();//promise neticesinde await ile bekleme gibi çalıştırıyoruz c#taki tasklara benziyor

    promiseData.then(d=>successCallBack())//doğruysa
    .catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.message));
    //hatalıysa

   return await promiseData;//gelen listi döndürüyoruz
  }
}
