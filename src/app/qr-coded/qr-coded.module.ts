import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodedPageRoutingModule } from './qr-coded-routing.module';

import { QrCodedPage } from './qr-coded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodedPageRoutingModule
  ],
  declarations: [QrCodedPage]
})
export class QrCodedPageModule {}
