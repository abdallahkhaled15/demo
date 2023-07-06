import { Component } from '@angular/core';
import { GvarService } from 'src/app/services/gvar.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  islogged: any; 
  constructor(private _gvar: GvarService){}
  ngOnInit() {
    this.islogged=this._gvar.islogged
  }
}
