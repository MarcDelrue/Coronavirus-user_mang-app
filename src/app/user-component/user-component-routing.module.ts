import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponentPage } from './user-component.page';

const routes: Routes = [
  {
    path: '',
    component: UserComponentPage
  },
  {
    path: ':id',
    component: UserComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserComponentPageRoutingModule {}
