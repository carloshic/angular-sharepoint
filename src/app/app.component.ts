import { Component } from '@angular/core';
import { SPService } from './services/sp.service';
import { environment } from '../environments/environment';
import { IPersona } from './interfaces/persona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteUrl = environment.web;
  title = 'angular-sharepoint';

  lists: any[] = [];

  list: any = {};

  listItems = [];

  constructor(
    public spService: SPService
    ) {
    this.spService.getWebTitle().subscribe(web => {
      this.title = web.Title;
    });


    // this.spService.addList('PersonasTest').then((result) => {
    //   console.log(result);
    // }).catch((err) => {
    //   console.log(err);
    // });
    // this.spService.removeList('Ragasa dev').then((result) => {
    //   console.log(result);
    // }).catch((err) => {
    //   console.log(err);
    // });
    // this.spService.getWebListItemsByTitle('Ragasa dev').subscribe((list) => {
    //   console.log(list);
    //   this.list = list;
    // });

  }

  // guardarPersona() {
  //   const persona: IPersona = {
  //     // nombre: 'Juan',
  //     edad: '25',
  //     telefono: 8138583828,
  //     email: 'pedro@123.com'
  //   };

  //   this.spService.agregarPersona(persona).then((data) => {
  //     console.log(data);
  //   });
  // }
  // actualizarPersona() {
  //   const persona: IPersona = {
  //     // nombre: 'Juan',
  //     edad: '25',
  //     telefono: 8138583828,
  //     email: 'pedro@123.com'
  //   };

  //   this.spService.actualizarPersona(1 , persona).then((data) => {
  //     console.log(data);
  //   });
  // }
}
