import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  // dialogRef = dialog.open(UserProfileComponent, {
  //   height: '400px',
  //   width: '600px',
  // });
}
$(document).ready(function() {
  $("#myCarousel").swipe({
    swipe: function(event: any, direction: string, distance: any, duration: any, fingerCount: any, fingerData: any) {
      if (direction === "left") {
        $(this).carousel("next");
      } else if (direction === "right") {
        $(this).carousel("prev");
      }
    },
    allowPageScroll: "vertical"
  });
});
$(document).scroll(function() {
  $(".navbar").css("opacity",'70%' );
})
$(document).ready(()=> {
  $(".sectionn").css('display', 'none');
})