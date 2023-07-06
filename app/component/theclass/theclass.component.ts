import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GvarService } from 'src/app/services/gvar.service';


@Component({
  selector: 'app-theclass',
  templateUrl: './theclass.component.html',
  styleUrls: ['./theclass.component.css']
})
export class TheclassComponent {
  @ViewChild('pdfCanvas', { static: false }) pdfCanvas: ElementRef<HTMLCanvasElement> | undefined;

  islogged: any; 
  id: any; 
  cat='all'; 
  // isall: any; 
  // isadmin: any; 
  list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  constructor(private _gvar: GvarService,private router: Router,private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.params['classid'];
    this.cat = this.route.snapshot.params['cat'];
    this.islogged=this._gvar.islogged;
  }
  goto(goal:any){
    this.cat=goal;
    this.router.navigate(['/class',this.id,goal]);
  }
}
