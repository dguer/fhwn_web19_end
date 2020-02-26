import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterComponent,
    ScoreboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    
    },
    {
      provide :DataService,
      useClass:DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
