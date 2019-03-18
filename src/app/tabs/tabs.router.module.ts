import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'start',
        children: [
          {
            path: '',
            loadChildren: '../start/start.module#StartPageModule'
          }
        ]
      },
      {
        path: 'markdown',
        children: [
          {
            path: '',
            loadChildren: '../markdown/markdown.module#MarkdownPageModule'
          }
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            loadChildren: '../create/create.module#CreatePageModule'
          }
        ]
      },
      {
        path: 'update',
        children: [
          {
            path: '',
            loadChildren: '../update/update.module#UpdatePageModule'
          }
        ]
      },
      {
        path: 'enums',
        children: [
          {
            path: '',
            loadChildren: '../enums/enums.module#EnumsPageModule'
          }
        ]
      },
      {
        path: 'validate',
        children: [
          {
            path: '',
            loadChildren: '../validate/validate.module#ValidatePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/start',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
