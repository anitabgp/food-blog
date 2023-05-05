import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepieComponent } from './recepie/recepie.component';
import { TrendingRecepieComponent } from './trending-recepie/trending-recepie.component';
import { RecepielatestComponent } from './recepielatest/recepielatest.component';

const routes: Routes = [
  { path: '', component: RecepieComponent },
  { path: 'trending', component: TrendingRecepieComponent },
  { path: 'latest', component: RecepielatestComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipeRoutingModule { }
