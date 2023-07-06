import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeadervComponent } from './headtail/headerv/headerv.component';
import { HeadstComponent } from './headtail/headst/headst.component';
import { NewsComponent } from './component/news/news.component';
import { MatDialogModule} from '@angular/material/dialog'; 
import { MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ClassroomComponent } from './component/classroom/classroom.component';
import { TheclassComponent } from './component/theclass/theclass.component';
import { PostsComponent } from './semi/posts/posts.component';
import { ChatComponent } from './semi/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ExamsComponent } from './semi/exams/exams.component';
import { NotsignedComponent } from './semi/notsigned/notsigned.component';
import { ExampageComponent } from './component/exampage/exampage.component';
import { QWComponent } from './semi/qw/qw.component';
import { CongraComponent } from './semi/congra/congra.component';
import { RowcontmemkpostComponent } from './semi/rowcontmemkpost/rowcontmemkpost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { HeadadmComponent } from './headtail/headadm/headadm.component';
import { AddpostComponent } from './semi/addpost/addpost.component';
import { AddexamComponent } from './semi/addexam/addexam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeadervComponent,
    HeadstComponent,
    NewsComponent,
    LoginComponent,
    NotfoundComponent,
    ProfileComponent,
    ClassroomComponent,
    TheclassComponent,
    PostsComponent,
    ChatComponent,
    ExamsComponent,
    NotsignedComponent,
    ExampageComponent,
    QWComponent,
    CongraComponent,
    RowcontmemkpostComponent,
    HeadadmComponent,
    AddpostComponent,
    AddexamComponent,
  ],
  imports: [
    MatDialogModule, 
    MatButtonModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
