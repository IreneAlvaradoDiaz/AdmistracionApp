import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { RankingAnimalesComponent } from './ranking-animales/ranking-animales.component';
import { RankingUsuariosComponent } from './ranking-usuarios/ranking-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'rankingUsuarios', component: RankingUsuariosComponent},
  {path: 'animales', component: AnimalesComponent},
  {path: 'rankingAnimales', component: RankingAnimalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
