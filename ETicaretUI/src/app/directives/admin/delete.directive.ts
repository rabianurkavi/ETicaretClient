import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    //directive i çağırdığım html nesnesi
    private element:ElementRef,
    //bu nesneye müdahale edebilmem için 
    private _renderer:Renderer2,
    //delete işlemi yaparken http olarak istek göndermem gerekecek
    private httpClientService: HttpClientService) {
      const img =_renderer.createElement("img");
      img.setAttiribute("src","")

     }

}
