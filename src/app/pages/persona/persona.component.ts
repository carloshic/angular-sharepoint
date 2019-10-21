import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPersona } from '../../interfaces/persona.interface';
import { SPService } from '../../services/sp.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: IPersona;
  esNuevo = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sp: SPService,
    private router: Router
  ) {
    this.persona = {
      nombrecompleto: '',
      edad: null,
      telefono: null,
      email: ''
    };
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if ( !id || (id && id === 'nuevo') ) {
        this.esNuevo = true;
      } else {
        this.esNuevo = false;
        this.sp.consultarPersonaPorId(id).subscribe(persona => {
          this.persona = persona;
        });
      }
    });
  }

  guardar() {
    if ( this.esNuevo ) {
      this.sp.agregarPersona(this.persona).subscribe(() => {
        this.router.navigate(['list']);
      });
    } else {
      this.sp.actualizarPersona(this.persona.Id, this.persona).subscribe(() => {
        this.router.navigate(['list']);
      });
    }
  }

}
