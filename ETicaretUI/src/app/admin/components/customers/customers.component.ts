import { SplitInterpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent extends BaseComponent {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void{
    this.showSpinner(SpinnerType.SquareJellyBox)
  }
}
