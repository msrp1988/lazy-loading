import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homechaild3Component } from './homechaild3.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: Homechaild3Component}
  
]


@NgModule({
  declarations: [Homechaild3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Homechaild3Module { }
