import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { Menu } from './menu.module/menu.module.component';
import { BackendComponent } from './backend/backend.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    ReservationComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    Menu.ModuleComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
