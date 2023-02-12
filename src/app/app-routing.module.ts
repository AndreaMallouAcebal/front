import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAnimalComponent } from './componentes/animales/editar-animal/editar-animal.component';
import { ListarAnimalesComponent } from './componentes/animales/listar-animales/listar-animales.component';
import { RegistrarAnimalComponent } from './componentes/animales/registrar-animal/registrar-animal.component';


const routes: Routes = [
  {
    path: 'animales', component: ListarAnimalesComponent
  },
{
    path: '', redirectTo:'animales', pathMatch:'full'
  },
  {
    path: 'registrar-animal', component: RegistrarAnimalComponent
  },
  {
    path: 'animales/:id', component: EditarAnimalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
