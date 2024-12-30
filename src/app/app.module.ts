import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TerrainsComponent } from './terrains/terrains.component';
import { AdherentsComponent } from './adherents/adherents.component';
import { LayoutComponent } from './layout/layout.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { AddAdherantComponent } from './add-adherant/add-adherant.component';
import { AuthGuard } from './Auth.guard';
import { provideHttpClient } from '@angular/common/http';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ReservationsComponent,
    TerrainsComponent,
    AdherentsComponent,
    LayoutComponent,
    AddReservationComponent,
    AddAdherantComponent,
    AddTerrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(),AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
