import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { SeacrhMComponent } from './components/seacrh-m/seacrh-m.component';
import { RegistrationAfiComponent } from './components/registration-afi/registration-afi.component';
import { RegistrationBenComponent } from './components/registration-ben/registration-ben.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { RestartPasswordComponent } from './components/restart-password/restart-password.component';
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
        path: 'registroUser', component: RegistroUsuarioComponent
      },
      {
        path: 'lisUser', component: ListUserComponent
      }, {
        path: 'listpatient', component: ListPatientsComponent
      },
      {
        path: '***', component: HomeComponent
      },
      {
        path: 'resetPwd', component: RestartPasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, RegistrationComponent];
