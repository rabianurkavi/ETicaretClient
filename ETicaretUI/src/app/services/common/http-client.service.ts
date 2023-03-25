import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient,@Inject("baseUrl") private baseUrl:string) { }

  private url(requestParameter: Partial<RequestParameters>):string{
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.
    controller}${requestParameter.action ? `/${requestParameter.action}`: ""}` 
  }

  get<T>(requestParameter: Partial<RequestParameters>, id?:string) : Observable<T> {
    let url: string ="";
    //baseurl https://localhost:7272/api bunu getiriyor
    //fullend point kontrolü
    if(requestParameter.fullEndPoint)
       url=requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${id ? `${id}`: " "}`;
    return this.httpClient.get<T>(url, { headers:requestParameter.headers });

  }
  //body de js objesi olarak verebilmek için Partial olarak ayarlıyoruz
  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
    let url: string = "";
    if(requestParameter.fullEndPoint)
       url = requestParameter.fullEndPoint;
    else
       url = `${this.url(requestParameter)}`;
    return this.httpClient.post<T>(url, body, { headers: requestParameter.headers});
  }
  delete<T>(requestParameter: Partial<RequestParameters>, id:string):Observable<T>{
    let url: string="";
    if(requestParameter.fullEndPoint)
      url=requestParameter.fullEndPoint
    else
      url=`${this.url(requestParameter)}/${id}`;
    return this.httpClient.delete<T>(url, {headers: requestParameter.headers})
    
  }
  put<T>(requestParameter: Partial<RequestParameters>, body:Partial<T>) : Observable<T>{
    let url: string= "";
    if(requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint
    else
      url = `${this.url(requestParameter)}`; //idyi body den sağlayacağız
      
    return this.httpClient.put<T>(url, body, { headers: requestParameter.headers});
  }
 
  
}
export class RequestParameters{
  controller?: string;
  action?:string;

  headers?: HttpHeaders; //headers lazım olabilir HttpHeaders dan gelen
  baseUrl?:string//baseurl i de değiştirebilecek olabilirim
  fullEndPoint?:string //diğerleriyle ilgili bir çalışma yapmak istemiyorsa yani dış dünyada farklı servislerde göndermek isteyeceksek
}
