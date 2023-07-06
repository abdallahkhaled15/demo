import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-congra',
  templateUrl: './congra.component.html',
  styleUrls: ['./congra.component.css']
})
export class CongraComponent {

}

$(window).on("load",function(){
	
	setTimeout(function(){$('.done').addClass("drawn");},500)
	
});
