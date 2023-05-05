import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { FoodComponent } from './food/food.component';
import { RecepieComponent } from './receipe/recepie/recepie.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { DocumentComponent } from './document/document.component';
import { AboutComponent } from './about/about.component';
import { AdsComponent } from './ads/ads.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BackgroundComponent },
  { path: 'food', component: FoodComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'pages', component: DocumentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ads', component: AdsComponent },
  {
    path: 'recepie', loadChildren: () => import('./receipe/recepie.module').then(m => m.ReceipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
