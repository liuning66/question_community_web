import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-index',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-index/tab-index.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab-okami-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-okami-list/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab-notice',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-notice/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab-tribe',
        children: [
          {
            path: '',
            loadChildren:() => import('../tab-tribe/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'tab-mine',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-mine/tab-mine.module').then(m => m.Tab5PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-index',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
