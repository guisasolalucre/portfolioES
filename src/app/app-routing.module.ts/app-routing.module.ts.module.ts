import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { PortafolioComponent } from '../componentes/portafolio/portafolio.component';
import { ConstruccionComponent } from '../componentes/construccion/construccion.component';
//import { GuardGuard } from '../servicios/guard.guard';

const routes: Routes = [
  {path:'portafolio', component:PortafolioComponent, /*canActivate:[GuardGuard]*/},
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: 'portafolio', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
