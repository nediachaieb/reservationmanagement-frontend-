import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './Auth.guard';
import { AdherentsComponent } from './adherents/adherents.component';
import { TerrainsComponent } from './terrains/terrains.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { AddAdherantComponent } from './add-adherant/add-adherant.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';

const routes: Routes = [




  {
    path:"connexion", component:ConnexionComponent
  },
  {
    path:"", component:LayoutComponent,
    canActivate:[AuthGuard],

    children :
     [
      {path:"adherants",component:AdherentsComponent},
      {path:"terrains",component:TerrainsComponent},
      {path:"reservations",component:ReservationsComponent},
      {path:"AddReservation",component:AddReservationComponent},
      {path:"AddAdherant",component:AddAdherantComponent},
      {path:"AddTerrain",component:AddTerrainComponent},
      {path:"", redirectTo:"/reservations" ,pathMatch:"full"}

    ]


  },
  { path:"", redirectTo:"/connexion" , pathMatch:"full"}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
