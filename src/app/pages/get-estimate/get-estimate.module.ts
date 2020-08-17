import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetEstimatePageRoutingModule } from './get-estimate-routing.module';

import { GetEstimatePage } from './get-estimate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetEstimatePageRoutingModule
  ],
  declarations: [GetEstimatePage]
})
export class GetEstimatePageModule {}
