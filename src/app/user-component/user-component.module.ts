import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserComponentPageRoutingModule } from './user-component-routing.module';

import { UserComponentPage } from './user-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserComponentPageRoutingModule
  ],
  declarations: [UserComponentPage]
})
export class UserComponentPageModule {}
