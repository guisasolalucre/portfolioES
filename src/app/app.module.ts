import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { ConstruccionComponent } from './componentes/construccion/construccion.component';


import { ModalAgregarEduComponent } from './componentes/modales/modal-agregar-edu/modal-agregar-edu.component';
import { ModalAgregarExpComponent } from './componentes/modales/modal-agregar-exp/modal-agregar-exp.component';
import { ModalAgregarHabComponent } from './componentes/modales/modal-agregar-hab/modal-agregar-hab.component';
import { ModalAgregarProyComponent } from './componentes/modales/modal-agregar-proy/modal-agregar-proy.component';
import { ModalEditarEduComponent } from './componentes/modales/modal-editar-edu/modal-editar-edu.component';
import { ModalEditarExpComponent } from './componentes/modales/modal-editar-exp/modal-editar-exp.component';
import { ModalEditarHabComponent } from './componentes/modales/modal-editar-hab/modal-editar-hab.component';
import { ModalEditarProyComponent } from './componentes/modales/modal-editar-proy/modal-editar-proy.component';
import { ModalEliminarEduComponent } from './componentes/modales/modal-eliminar-edu/modal-eliminar-edu.component';
import { ModalEliminarExpComponent } from './componentes/modales/modal-eliminar-exp/modal-eliminar-exp.component';
import { ModalEliminarHabComponent } from './componentes/modales/modal-eliminar-hab/modal-eliminar-hab.component';
import { ModalEliminarProyComponent } from './componentes/modales/modal-eliminar-proy/modal-eliminar-proy.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonaService } from './servicios/servicios-modelo/persona.service';
import { ModalEditarInfoComponent } from './componentes/modales/modal-editar-info/modal-editar-info.component';
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
    ConstruccionComponent,
    ModalAgregarEduComponent,
    ModalAgregarExpComponent,
    ModalAgregarHabComponent,
    ModalAgregarProyComponent,
    ModalEditarEduComponent,
    ModalEditarExpComponent,
    ModalEditarHabComponent,
    ModalEditarProyComponent,
    ModalEliminarEduComponent,
    ModalEliminarExpComponent,
    ModalEliminarHabComponent,
    ModalEliminarProyComponent,
    ModalEditarInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatProgressBarModule,
    NoopAnimationsModule,
  ],
  providers: [
    PersonaService,
    // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
