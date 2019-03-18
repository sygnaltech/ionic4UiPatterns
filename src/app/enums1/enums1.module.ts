import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CustomPipesModule } from '../../shared/custompipesmodule';

import { IonicModule } from '@ionic/angular';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { Enums1Page } from './enums1.page';

const routes: Routes = [
  {
    path: '',
    component: Enums1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClientModule }),
    CustomPipesModule
  ],
  declarations: [
    Enums1Page,
  ],
  exports: [
  ]
})
export class Enums1PageModule {}
