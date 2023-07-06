import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GvarService } from 'src/app/services/gvar.service';
declare var $: any;
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {
  list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  islogged: any; 
  cat='myclasses';
  constructor(private _gvar: GvarService,private router: Router,private route:ActivatedRoute){}
  subm(item: any){
    this.router.navigate(['/class',item,"all"])
  }
  ngOnInit() {
    this.cat = this.route.snapshot.params['cat'];
    this.islogged=this._gvar.islogged;
  }
  goto(goal:any){
    this.cat=goal;
    this.router.navigate(['/classroom',goal]);
  }
}
