import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';
import { DetailsComponent} from '../description/details/details.component';


const routes: Routes = [ 
  {path: '', component: DescriptionComponent},
  {path: 'details', component: DetailsComponent}  
]

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [  
    DescriptionComponent,
    DetailsComponent
  ]
})
export class DescriptionModule { }
