import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';

import { PortafolioService } from './servicios/portafolio.service';
import { CargaFotosComponent } from './componentes/carga-fotos/carga-fotos.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { ConstruccionComponent } from './componentes/construccion/construccion.component';
//import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PortafolioComponent,
    SeccionesComponent,
    CargaFotosComponent,
    EditarPerfilComponent,
    ConstruccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    PortafolioService,
    // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
