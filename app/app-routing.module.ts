import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './component/news/news.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ClassroomComponent } from './component/classroom/classroom.component';
import { TheclassComponent } from './component/theclass/theclass.component';
import { ExampageComponent } from './component/exampage/exampage.component';
import { CongraComponent } from './semi/congra/congra.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'news',component:NewsComponent},
  {path:'login',component:LoginComponent},
  {path:'classroom',component:ClassroomComponent},
  {path:'classroom/:cat',component:ClassroomComponent},
  {path:'congra',component:CongraComponent},
  {path:'class/:classid/:cat',component:TheclassComponent},
  {path:'virtualexam/:classid/:exid',component:ExampageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'**',redirectTo:'/notfound',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
