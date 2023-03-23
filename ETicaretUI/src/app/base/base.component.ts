import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType)
    setTimeout(() => this.hideSpinner(spinnerNameType), 1000)
  }
  hideSpinner(spinnerNameType: SpinnerType){
    this.spinner.hide(spinnerNameType)
  }

}

export enum SpinnerType{
  BallScale= "s3",
  BallSpin="s4",
  Pacman="s6",
  SquareJellyBox="s1",
  BallNewton="s2",
  BallFussion="s5",
  LineSpinFade="s7"
}