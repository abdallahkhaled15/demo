import { Component, Input } from '@angular/core';
import { GvarService } from '../services/gvar.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  islogged: any; 
  constructor(private _gvar: GvarService){}
  ngOnInit() {
    this.islogged=this._gvar.islogged
  }
}