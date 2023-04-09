import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { MessageType } from 'src/app/services/admin/alertify.service';
import { Position } from 'src/app/services/admin/alertify.service';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $:any

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, 
    private productService:ProductService, 
    private alertify:AlertifyService){
      super(spinner)
    }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate','edit', 'delete'];
  dataSource: MatTableDataSource<List_Product> = null;//verilerim daha gelmeedi ben bir istek yapacağım istekten sonra gelen verileri dataSource a vereceğim

  @ViewChild(MatPaginator) paginator:MatPaginator;

 
  async getProducts(){
    this.showSpinner(null)
      const allProducts: {totalCount:number;products:List_Product[]} = await this.productService.productRead(this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5,
        ()=>this.hideSpinner(SpinnerType.LineSpinFade),errorMessage=>
        this.alertify.message(errorMessage,{
          dismissOthers:true,
          messageType:MessageType.Error,
          position:Position.TopRight
      }))
      this.dataSource=new MatTableDataSource<List_Product>(allProducts.products);
      this.paginator.length=allProducts.totalCount;
  }
  // delete(id, event){

  //   const img: HTMLImageElement = event.srcElement;
  //   $(img.parentElement.parentElement).fadeOut(2000);
  //  }
  async pageChanged(){
    await this.getProducts()

  }

  async ngOnInit(){
   await this.getProducts()
  }
 

  
  


}
