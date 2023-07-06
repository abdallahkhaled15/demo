import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GvarService } from 'src/app/services/gvar.service';

@Component({
  selector: 'app-exampage',
  templateUrl: './exampage.component.html',
  styleUrls: ['./exampage.component.css']
})
export class ExampageComponent {
  id: any;
  examid: any;
  islogged: any;
  began=true;
  constructor(private _gvar: GvarService,private router: Router,private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.params['classid'];
    this.examid = this.route.snapshot.params['exid'];
    this.islogged=this._gvar.islogged;
  }
  mbegan(){
    this.began=true
  }
  goto(){
    this.router.navigate(['/congra']);
  }
}
