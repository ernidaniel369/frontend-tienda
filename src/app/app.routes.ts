import {RouterModule, Routes} from'@angular/router';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import {PagoComponent} from './pago/pago.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'pago', component: PagoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);