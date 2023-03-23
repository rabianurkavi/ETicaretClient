import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService){
    super(spinner)
   }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.SquareJellyBox)
  }
  m(){
    this.alertify.message("Admin Sayfası",{
      messageType: MessageType.Success,
      delay:7,
      position:Position.TopRight
    });
  }
  d(){
    this.alertify.dismiss()
  }
  
}
