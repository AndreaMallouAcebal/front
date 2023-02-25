import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol/rol';
import { Usuario } from 'src/app/models/usuario/usuario';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
usuario:Usuario=new Usuario();
public usuariosForm: FormGroup;
rol: Rol;
roles: Rol[];

constructor(
  private router: Router,
  public fb: FormBuilder,
  public usuariosService : UsuariosService,
  public rolesService : RolesService
) { }

ngOnInit() {

  this.obtenerRoles();

  this.usuariosForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', Validators.required],
    dni: ['', Validators.required],
    contrasenia: ['', Validators.required],
    rol_id:['', Validators.required]
  });
}

private obtenerRoles(){
  this.rolesService.getAllRoles().subscribe(dato=>{
    this.roles = dato
  });
}

guardarUsuario(usuario : Usuario){
  this.usuariosService.saveUsuario(usuario).subscribe(dato => {
    this.usuariosForm.reset();
    this.irALaListaDeUsuarios();
  },
    error => { console.error(error) }

  );
}

setRolUsuario() {
  this.usuario.rol = this.rol;
}

irALaListaDeUsuarios() {
  this.router.navigate(['/usuarios']);
}

onSubmit(): void {
  this.guardarUsuario(this.usuario);
}
}
