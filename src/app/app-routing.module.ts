import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarActividadComponent } from './componentes/actividades/editar-actividad/editar-actividad.component';
import { ListarActividadesComponent } from './componentes/actividades/listar-actividades/listar-actividades.component';
import { RegistrarActividadComponent } from './componentes/actividades/registrar-actividad/registrar-actividad.component';
import { DetallesAnimalComponent } from './componentes/animales/detalles-animal/detalles-animal.component';
import { EditarAnimalComponent } from './componentes/animales/editar-animal/editar-animal.component';
import { ListarAnimalesComponent } from './componentes/animales/listar-animales/listar-animales.component';
import { RegistrarAnimalComponent } from './componentes/animales/registrar-animal/registrar-animal.component';
import { LoginComponent } from './componentes/auth/login.component';
import { RegisterComponent } from './componentes/auth/register.component';
import { EditarCitaComponent } from './componentes/citas/editar-cita/editar-cita.component';
import { ListarCitasComponent } from './componentes/citas/listar-citas/listar-citas.component';
import { RegistrarCitaComponent } from './componentes/citas/registrar-cita/registrar-cita.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarPatrocinadorComponent } from './componentes/patrocinadores/editar-patrocinador/editar-patrocinador.component';
import { ListarPatrocinadoresComponent } from './componentes/patrocinadores/listar-patrocinadores/listar-patrocinadores.component';
import { RegistrarPatrocinadorComponent } from './componentes/patrocinadores/registrar-patrocinador/registrar-patrocinador.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EditarRolComponent } from './componentes/roles/editar-rol/editar-rol.component';
import { ListarRolesComponent } from './componentes/roles/listar-roles/listar-roles.component';
import { RegistrarRolComponent } from './componentes/roles/registrar-rol/registrar-rol.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar-usuarios/listar-usuarios.component';
import { RegistrarUsuarioComponent } from './componentes/usuarios/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'welcome', component: InicioSesionComponent
  },
  {
    path: '', redirectTo:'inicio', pathMatch:'full'
  },
  {
    path: 'animales', component: ListarAnimalesComponent
  },
  {
    path: 'registrar-animal', component: RegistrarAnimalComponent
  },
  {
    path: 'animales/:id', component: EditarAnimalComponent
  },
  {
    path: 'detalles-animal/:id', component: DetallesAnimalComponent
  },
  {
    path: 'citas', component: ListarCitasComponent
  },
  {
    path: 'registrar-cita', component: RegistrarCitaComponent
  },
  {
    path: 'citas/:id', component: EditarCitaComponent
  },
  {
    path: 'usuarios', component: ListarUsuariosComponent
  },
  {
    path: 'registrar-usuario', component: RegistrarUsuarioComponent
  },
  {
    path: 'usuarios/:id', component: EditarUsuarioComponent
  },
  {
    path: 'roles', component: ListarRolesComponent
  },
  {
    path: 'registrar-rol', component: RegistrarRolComponent
  },
  {
    path: 'roles/:id', component: EditarRolComponent
  },
  {
    path: 'patrocinadores', component: ListarPatrocinadoresComponent
  },
  {
    path: 'registrar-patrocinador', component: RegistrarPatrocinadorComponent
  },
  {
    path: 'patrocinadores/:id', component: EditarPatrocinadorComponent
  },
  {
    path: 'actividades', component: ListarActividadesComponent
  },
  {
    path: 'registrar-actividad', component: RegistrarActividadComponent
  },
  {
    path: 'actividades/:id', component: EditarActividadComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'inicio-sesion', component: InicioSesionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
