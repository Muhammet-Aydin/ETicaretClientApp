import { Component } from '@angular/core';
import { AlertifyService, MessageOptions, MessagePosition, MessageType} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
constructor(private alertyJs:AlertifyService){}


  TriggerMessageShow()
  {
    var messageOptions=new MessageOptions;
    messageOptions.messageType=MessageType.Success;
    messageOptions.dismissOthers=false;
    messageOptions.position=MessagePosition.TopRight;
    messageOptions.dismissOthers=false;
    messageOptions.delay=8;
    this.alertyJs.message("bu bir alerttir",messageOptions);

  }

}
