import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
// import { ShipmentModalComponent } from './../shipment-modal/shipment-modal.component';

import { EstimateModalComponent } from './../estimate-modal/estimate-modal.component';
import { AgmCoreModule } from '@agm/core';
// import { AppComponent } from './../../app.component';

@NgModule({
  imports: [
    // BrowserModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCokSl0rUpbldTsD-sfTJmHW5y6EqwO8r4'
    })
  ],
  declarations: [DashboardPage, EstimateModalComponent],
  entryComponents: [EstimateModalComponent]
})
export class DashboardPageModule {}
