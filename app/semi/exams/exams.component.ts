import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {
  id=[1,2,3,4,5,6,7,8,9];
  classid:any;
  constructor(private router: Router,private route: ActivatedRoute){}

  ngOnInit() {
    this.classid = this.route.snapshot.params['classid'];
  }
  gotoexam(itemid: any){
    this.router.navigate(['/virtualexam',this.classid,itemid]);
  }
  goto(goal:any){
  }
}
