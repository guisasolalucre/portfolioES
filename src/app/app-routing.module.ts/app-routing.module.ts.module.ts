import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { PortafolioComponent } from '../componentes/portafolio/portafolio.component';
import { Pagina404Component } from '../componentes/pagina404/pagina404.component';
import { CargaFotosComponent } from '../componentes/carga-fotos/carga-fotos.component';
import { EditarPerfilComponent } from '../componentes/editar-perfil/editar-perfil.component';
//import { GuardGuard } from '../servicios/guard.guard';

const routes: Routes = [
  {path:'portafolio', component:PortafolioComponent, /*canActivate:[GuardGuard]*/},
  {path:'login', component:LoginComponent},
  {path:'cargar-fotos', component:CargaFotosComponent},
  {path:'editar-info', component:EditarPerfilComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: Pagina404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
