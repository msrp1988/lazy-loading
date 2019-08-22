import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homechaild2Component } from './homechaild2.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: Homechaild2Component},  
]

@NgModule({
  declarations: [Homechaild2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Homechaild2Module { }
