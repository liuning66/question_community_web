import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5Page } from './tab-mine.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  },
  {
    path: 'user-center',
    loadChildren: () => import('../../component/user-center/user-center.module').then(m => m.UserCenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule { }
