import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { 
  EnumKeysPipe, 
  SharedModule } from '../enum-keys.pipe';

import { IonicModule } from '@ionic/angular';

import { Enums1Page } from './enums1.page';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

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
    SharedModule // EnumKeysPipe
  ],
  declarations: [
    Enums1Page,
  ],
  exports: [
//    EnumKeysPipe
  ]
})
export class Enums1PageModule {}
