import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingRecepieComponent } from './trending-recepie/trending-recepie.component';
import { RecepielatestComponent } from './recepielatest/recepielatest.component';
import { ReceipeHomeComponent } from './receipe-home/receipe-home.component';

const routes: Routes = [
  { path: '', component: ReceipeHomeComponent },
  { path: 'trending', component: TrendingRecepieComponent },
  { path: 'latest', component: RecepielatestComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipeRoutingModule { }
