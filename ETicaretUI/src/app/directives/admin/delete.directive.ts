import { Directive, ElementRef, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $:any
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
    private productService: ProductService,
    private spinner:NgxSpinnerService) {
      const img = _renderer.createElement('img');
    img.setAttribute('src', '../../../../../assets/cross2.png');
    img.setAttribute('style', 'cursor: pointer;');
    img.width = 40;
    img.height = 40;
    _renderer.appendChild(element.nativeElement, img);
  }
   
  @Input() id:string;
  @Output() updateAuto:EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onclick(){
    this.spinner.show(SpinnerType.Pacman)
    const td: HTMLTableCellElement= this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement).fadeOut(2000, () =>{
      this.updateAuto.emit();
    });
  }

}
