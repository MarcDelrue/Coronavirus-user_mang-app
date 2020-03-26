import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodedPage } from './qr-coded.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodedPageRoutingModule {}
