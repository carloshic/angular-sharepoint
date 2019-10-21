import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SPService } from './services/sp.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonaComponent } from './pages/persona/persona.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ROUTES } from './app.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ListadoComponent
  ],
  imports: [
    ROUTES,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    SPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
