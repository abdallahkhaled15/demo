import { Component } from '@angular/core';
import { GvarService } from 'src/app/services/gvar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  islogged: any; 
  constructor(private _gvar: GvarService){}
  ngOnInit() {
    this.islogged=this._gvar.islogged
  }
}
