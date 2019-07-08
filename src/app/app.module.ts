import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service'
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes=[
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutus' ,component: AboutUsComponent},
  {path:'contactus' ,component: ContactUsComponent},
  {path:'home/:name', component:HomeComponent},
  {path:'aboutus/:name' ,component: AboutUsComponent},
  {path:'contactus/:name' ,component: ContactUsComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
