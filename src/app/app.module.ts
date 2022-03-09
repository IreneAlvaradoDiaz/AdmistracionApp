import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AdvertComponent } from './components/adverts/adverts.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RankingAdvertsComponent } from './components/ranking-adverts/ranking-adverts.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './doLogin/login/login.component';
import { RegisterComponent } from './doLogin/register/register.component';
import { UserComponent } from './components/user/user.component';
import { PetComponent } from './components/pet/pet.component';

import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { TableModule} from 'primeng/table';
import { ChartModule} from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    AppComponent,
    AdvertComponent,
    RankingAdvertsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    FormsModule,
    CardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
