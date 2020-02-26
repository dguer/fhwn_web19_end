import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './register/register.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'scoreboard',
    component: ScoreboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: LoginPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
