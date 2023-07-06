import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GvarService } from 'src/app/services/gvar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() islogged: any; 
  constructor(private _router: Router,private _gvar: GvarService) { }
  gohome(role: any){
    this._gvar.islogged = role.value
    // alert(role.value)
    this._router.navigateByUrl('/')
  }
}
