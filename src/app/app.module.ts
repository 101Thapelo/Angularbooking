import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:SignInComponent},
      {path:'sign',component:SignInComponent},
      {path:'home',component:HomeComponent},
  ])],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
