import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { CustomPipesModule } from '../../shared/custompipesmodule';

import { IonicModule } from '@ionic/angular';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { ValidatePage } from './validate.page';

const routes: Routes = [
  {
    path: '',
    component: ValidatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClientModule }),
    CustomPipesModule,
  ],
  declarations: [ValidatePage]
})
export class ValidatePageModule {}
