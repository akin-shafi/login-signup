import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionPageRoutingModule } from './transaction-routing.module';

import { TransactionPage } from './transaction.page';
import { ComponentsModule } from './../../components/components.module';
import { ShipmentModalComponent } from './../shipment-modal/shipment-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TransactionPage, ShipmentModalComponent],
  entryComponents: [ShipmentModalComponent]
})
export class TransactionPageModule {}
