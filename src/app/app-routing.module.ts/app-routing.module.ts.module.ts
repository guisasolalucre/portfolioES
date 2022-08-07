import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { PortafolioComponent } from '../componentes/portafolio/portafolio.component';

const routes: Routes = [
  {path:'portafolio', component:PortafolioComponent},
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: 'portafolio', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
