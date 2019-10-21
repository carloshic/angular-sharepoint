import { Route, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonaComponent } from './pages/persona/persona.component';


const routes: Route[] = [
{
    path: '', pathMatch: 'full', redirectTo: 'list'
},
{
    path: 'persona/:id', component: PersonaComponent
},
{
    path: 'list', component: ListadoComponent
}];

export const ROUTES = RouterModule.forRoot(routes, { useHash: true });
