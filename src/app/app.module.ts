import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { AnimalesComponent } from './animales/animales.component';
import { RankingUsuariosComponent } from './ranking-usuarios/ranking-usuarios.component';
import { RankingAnimalesComponent } from './ranking-animales/ranking-animales.component';

import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AnimalesComponent,
    RankingUsuariosComponent,
    RankingAnimalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
