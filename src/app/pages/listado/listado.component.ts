import { Component, OnInit } from '@angular/core';
import { SPService } from '../../services/sp.service';
import { IPersona } from '../../interfaces/persona.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  list: IPersona[] = [];

  persona = {};
  constructor(
    private sp: SPService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sp.consultarPersonas().subscribe((list) => {
      this.list = list;
    });
  }

  // test() {
  //   this.sp.addList('Lista de Prueba Dev').then(result => {
  //     console.log("Lista creada");
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

    // test() {
    // this.sp.removeList('PERSONASTEST').then(result => {
    //   console.log("Lista Borrada");
    // }).catch(err => {
    //   console.log(err);
    // })
  // }

  nuevo() {
    this.router.navigate(['persona', 'nuevo']);
  }

  click(persona) {
    this.persona = persona;
  }

  eliminar(id: number) {
    this.sp.eliminarPersona(id).subscribe((result) => {
      const index = this.list.findIndex( x => x.Id === id);

      if ( index ) {
        this.list.splice(index, 1);
      }

      alert('Persona Eliminada');
  });
  }

  editar(id: number) {
    this.router.navigate(['/persona', id]);
  }

}
