import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sp, Web, ListAddResult, ItemAddResult, ItemUpdateResult } from '@pnp/sp';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { from } from 'rxjs';
import { IPersona } from '../interfaces/persona.interface';
import { map, catchError } from 'rxjs/operators';
const web = new Web(environment.web);

const listName = 'Lista de Prueba Dev';

@Injectable()
export class SPService {

  public cargando = false;

  constructor(private http: HttpClient) {
  }

  getWebTitle(): Observable<any> {
    return from(web.get());
  }
  getWebLists(): Observable<any> {
    return from(web.get());
  }
  getWebListByTitle(title: string) {
    return from(web.lists.getByTitle(title).get());
  }

  getWebListItemsByTitle(title: string) {
    return from(web.lists.getByTitle(title).items.get());
  }

  addList(nombre: string): Promise<ListAddResult> {
      return web.lists.add(nombre, nombre.toLowerCase());
  }

  removeList(nombre: string): Promise<any> {
    return web.lists.getByTitle(nombre).delete();
  }

  consultarPersonas() {
    this.cargando = true;
    return from(web.lists.getByTitle(listName).items.get()).pipe(map(result => {
      this.cargando = false;
      return result;
    }), catchError(this.manejardorError));
  }

  agregarPersona(persona: IPersona) {
    this.cargando = true;
    return from(web.lists.getByTitle(listName)
    .items
    .add(persona))
    .pipe(map(result => {
      this.cargando = false;
      return result;
    }), catchError(this.manejardorError));
  }
  eliminarPersona(id) {
    return from(
      web
      .lists
      .getByTitle(listName)
      .items
      .getById(id)
      .delete()).pipe(map(result => {
        this.cargando = false;
        return result;
      }), catchError(this.manejardorError));
  }

  consultarPersonaPorId(id) {
    this.cargando = true;
    return from(web
      .lists
      .getByTitle(listName)
      .items
      .getById(id)
      .get())
      .pipe(map(result => {
        this.cargando = false;
        return result;
      }), catchError(this.manejardorError));
  }

  actualizarPersona(id: number, persona: IPersona) {
    return from(web
      .lists
      .getByTitle(listName)
      .items
      .getById(id)
      .update(persona)).pipe(map((result: ItemUpdateResult) => {
        this.cargando = false;
        return result;
      }), catchError(this.manejardorError));
  }

  manejardorError(err) {
    this.cargando = false;
    alert(err.message);
    return throwError(err);
  }
}
