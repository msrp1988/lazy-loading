import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingComponent } from './lazyloading.component'
import { Homechaild1Component } from './homechaild1/homechaild1.component';
import { Homechaild2Component } from './homechaild2/homechaild2.component';
import { Homechaild3Component } from './homechaild3/homechaild3.component';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path: '', component: LazyloadingComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'homechaild2', component: Homechaild2Component},
  {path: 'homechaild3', component: Homechaild3Component},  
]

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyloadingComponent,
    Homechaild1Component,
    Homechaild2Component,
    Homechaild3Component, 
    DescriptionComponent
  ]
})
export class LazyloadingModule { }
