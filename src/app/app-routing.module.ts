import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import {ProductosComponent} from './productos/productos.component';
import {VentasComponent} from './ventas/ventas.component'


const routes: Routes = [
  {path: '', component: MenuComponent },
  {path: 'productos',component:ProductosComponent},
  {path: 'ventas',component:VentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
