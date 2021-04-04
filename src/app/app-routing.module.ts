import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { SeacrhMComponent } from './components/seacrh-m/seacrh-m.component';
import { RegistrationAfiComponent } from './components/registration-afi/registration-afi.component';
import { RegistrationBenComponent } from './components/registration-ben/registration-ben.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'prefix'
      },
      {
        path: 'registration', component: RegistrationComponent
      },
      {
        path: 'search', component: SeacrhMComponent
      },
      {
        path: 'registrationAfi', component: RegistrationAfiComponent
      },
      {
        path: 'registrationben', component: RegistrationBenComponent
      },
      {
        path: '***', component: HomeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, RegistrationComponent];
