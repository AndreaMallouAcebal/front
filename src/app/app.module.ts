import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarAnimalesComponent } from './componentes/animales/listar-animales/listar-animales.component';
import { RegistrarAnimalComponent } from './componentes/animales/registrar-animal/registrar-animal.component';
import { EditarAnimalComponent } from './componentes/animales/editar-animal/editar-animal.component';
import { ListarCitasComponent } from './componentes/citas/listar-citas/listar-citas.component';
import { EditarCitaComponent } from './componentes/citas/editar-cita/editar-cita.component';
import { RegistrarCitaComponent } from './componentes/citas/registrar-cita/registrar-cita.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';
import { RegistrarUsuarioComponent } from './componentes/usuarios/registrar-usuario/registrar-usuario.component';
import { ListarRolesComponent } from './componentes/roles/listar-roles/listar-roles.component';
import { EditarRolComponent } from './componentes/roles/editar-rol/editar-rol.component';
import { RegistrarRolComponent } from './componentes/roles/registrar-rol/registrar-rol.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarPatrocinadorComponent } from './componentes/patrocinadores/editar-patrocinador/editar-patrocinador.component';
import { ListarPatrocinadoresComponent } from './componentes/patrocinadores/listar-patrocinadores/listar-patrocinadores.component';
import { RegistrarPatrocinadorComponent } from './componentes/patrocinadores/registrar-patrocinador/registrar-patrocinador.component';
import { ListarActividadesComponent } from './componentes/actividades/listar-actividades/listar-actividades.component';
import { EditarActividadComponent } from './componentes/actividades/editar-actividad/editar-actividad.component';
import { RegistrarActividadComponent } from './componentes/actividades/registrar-actividad/registrar-actividad.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PieComponent } from './componentes/pie/pie.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContactoComponent } from './componentes/contacto/contacto.component';
//import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './componentes/auth/login.component';
import { interceptorProvider } from './services/interceptors/prod-interceptor.service';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DetallesAnimalComponent } from './componentes/animales/detalles-animal/detalles-animal.component';
import { RegisterComponent } from './componentes/auth/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAnimalesComponent,
    RegistrarAnimalComponent,
    EditarAnimalComponent,
    ListarCitasComponent,
    EditarCitaComponent,
    RegistrarCitaComponent,
    ListarUsuariosComponent,
    EditarUsuarioComponent,
    RegistrarUsuarioComponent,
    ListarRolesComponent,
    EditarRolComponent,
    RegistrarRolComponent,
    InicioComponent,
    EditarPatrocinadorComponent,
    ListarPatrocinadoresComponent,
    RegistrarPatrocinadorComponent,
    ListarActividadesComponent,
    EditarActividadComponent,
    RegistrarActividadComponent,
    CarruselComponent,
    PieComponent,
    BarraNavegacionComponent,
    RegistroComponent,
    InicioSesionComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    DetallesAnimalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgImageSliderModule,
    MatSlideToggleModule,
    TableModule,
    ButtonModule
   // GoogleMapsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
