import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingRecepieComponent } from './trending-recepie/trending-recepie.component';
import { RecepielatestComponent } from './recepielatest/recepielatest.component';
import { ReceipeHomeComponent } from './receipe-home/receipe-home.component';
import { RecepieComponent } from './recepie/recepie.component';

const routes: Routes = [
  {
    path: '', component: ReceipeHomeComponent,
    children: [
      {
        path: '', // child route path
        component: RecepieComponent, // child route component that the router renders
      },
      {
        path: 'trending', // child route path
        component: TrendingRecepieComponent, // child route component that the router renders
      },
      {
        path: 'latest',
        component: RecepielatestComponent, // another child route component that the router renders
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipeRoutingModule { }
