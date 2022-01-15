import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [{path:"home",component:HomeComponent},
{path:"contact",component:ContactComponent},
{path:"menu",component:MenuComponent},
{path:"reservation",component:ReservationComponent},
{path:"restaurant",component:RestaurantComponent},
{path:"plat",component:PlatComponent},

{path:"plat", loadChildren: () => import('./plat/plat.module').then(m => m.PlatModule)},
{ path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
//{ //path: 'plats', loadChildren: () => import('./plats/plats.module').then(m => m.PlatsModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
