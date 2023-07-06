import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  defaultValue='';
  sendmes(calue: any){
    this.defaultValue ='';
  }
}
$(document).ready(function(){
  $('#action_menu_btn').click(function(){
    $('.action_menu').toggle();
  });
    });
