import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' },
  { path: 'enums', loadChildren: './enums/enums.module#EnumsPageModule' },
  { path: 'validate', loadChildren: './validate/validate.module#ValidatePageModule' },
  { path: 'markdown', loadChildren: './markdown/markdown.module#MarkdownPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
