import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homechaild1Component } from './homechaild1.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: Homechaild1Component},  
]

@NgModule({
  declarations: [Homechaild1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Homechaild1Module { }
