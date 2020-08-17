import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetEstimatePage } from './get-estimate.page';

const routes: Routes = [
  {
    path: '',
    component: GetEstimatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetEstimatePageRoutingModule {}
