import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertComponent } from './components/adverts/adverts.component';
import { PetComponent } from './components/pet/pet.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './doLogin/login/login.component';
import { RegisterComponent } from './doLogin/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { RankingAdvertsComponent } from './components/ranking-adverts/ranking-adverts.component';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']); //esto lo que hace es que cuando alguien no esta logeado e intenta ir a otro lado que no es el login lo mande ahí directamente
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'adverts', 
    component: AdvertComponent,
    canActivate: [AuthGuard],
    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'rankingAdverts', 
    component: RankingAdvertsComponent,
    canActivate: [AuthGuard],
    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'users', 
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'pet', 
    component: PetComponent,
    canActivate: [AuthGuard],
    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    component: LoginComponent, 
    data: { AuthGuardPipe: redirectLoggedInToHome }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [],
    data: { AuthGuardPipe: redirectLoggedInToHome }
  },
  {
    path: 'home',
    component: HomeComponent,canActivate: [AuthGuard],
    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**', //si meten otra direccion de las que hemos creado le lleva directamente a la pagina principal y este a su vez si no esta logeado al login
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
