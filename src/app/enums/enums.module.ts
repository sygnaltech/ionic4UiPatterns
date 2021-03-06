import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CustomPipesModule } from '../../shared/custompipesmodule';

import { IonicModule } from '@ionic/angular';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { EnumsPage } from './enums.page';

const routes: Routes = [
  {
    path: '',
    component: EnumsPage
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
    CustomPipesModule,
  ],
  declarations: [EnumsPage]
})
export class EnumsPageModule {}
