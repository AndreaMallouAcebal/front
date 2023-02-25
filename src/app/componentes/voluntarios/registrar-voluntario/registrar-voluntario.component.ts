import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Voluntario } from 'src/app/models/voluntario/voluntario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';

@Component({
  selector: 'app-registrar-voluntario',
  templateUrl: './registrar-voluntario.component.html',
  styleUrls: ['./registrar-voluntario.component.css']
})
export class RegistrarVoluntarioComponent {
    voluntario: Voluntario =new Voluntario();
    public voluntariosForm: FormGroup;
    usuarios:Usuario[];
    usuario:Usuario;
  
    constructor(
      private router: Router,
      public fb: FormBuilder,
      public voluntariosService : VoluntariosService,
      public usuariosService : UsuariosService
      ) { }
  
    ngOnInit() {
      this.obtenerUsuarios();
      this.voluntariosForm = this.fb.group({
        diaSemana: ['', Validators.required],
        hora:['', Validators.required],
        usuario:['', Validators.required]
      });
    }
  
    guardarVoluntario(){
      this.voluntariosService.saveVoluntario(this.voluntario).subscribe(dato => {
        this.voluntariosForm.reset();
        this.toVoluntariosList();
      },
        error => { console.error(error) }
  
      );
    }
  
    setUsuarioVoluntario(){
      this.voluntario.usuario=this.usuario;
    }
    
    toVoluntariosList() {
      this.router.navigate(['/voluntarios']);
    }
  
    private obtenerUsuarios(){
      this.usuariosService.getAllUsuarios().subscribe(usuarios=>{
        this.usuarios = usuarios;
      });
    }
  

  
    onSubmit(): void {
      this.guardarVoluntario();
    }
  }
  
