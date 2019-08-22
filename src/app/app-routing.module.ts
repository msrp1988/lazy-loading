import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'lazy' , loadChildren: './lazyloading/lazyloading.module#LazyloadingModule'},
  {path: 'about' , loadChildren: './about/about.module#AboutModule'},
  {path: 'service', loadChildren: './service/service.module#ServiceModule'},
  {path: 'contact', loadChildren: './contact/contact.module#ContactModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
