import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegistrationComponent } from './components/registration/registration.component';
// import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeacrhMComponent } from './components/seacrh-m/seacrh-m.component';
import { RegistrationAfiComponent } from './components/registration-afi/registration-afi.component';
import { RegistrationBenComponent } from './components/registration-ben/registration-ben.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SeacrhMComponent,
    RegistrationAfiComponent,
    RegistrationBenComponent
    // LoginComponent,
    // RegistrationComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
