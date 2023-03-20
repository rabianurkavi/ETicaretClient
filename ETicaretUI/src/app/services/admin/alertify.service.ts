import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  //message(message : string, messageType: MessageType, position: Position, delay: number=4, dismissOthers: boolean=false)
  message(message : string, options: Partial<AlertifyOptions>){
  const msj=alertify[options.messageType](message);
   alertify.set('notifier','position', options.position);
  alertify.set('notifier','delay', options.delay);
 
  
  if(options.dismissOthers)
  msj.dismissOthers();
  }
  dismiss(){
    alertify.dismissAll()
  }

}

export class AlertifyOptions{
  messageType: MessageType =MessageType.Message;
  position:Position = Position.BottomLeft;
  delay: number = 4;
  dismissOthers: boolean =false;


}
export enum MessageType{
  Error = "error",
  Message = "message",
  Success = "success",
  Warning = "warning",
  Notify = "notify"
  
}
export enum Position{
  TopRight="top-right",
  TopCenter="top-center",
  TopLeft="top-left",
  BottomRight="bottom-right",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"
}
