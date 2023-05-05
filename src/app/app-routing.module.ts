import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BackgroundComponent } from './background/background.component';
import { FoodComponent } from './food/food.component';
import { RecepieComponent } from './receipe/recepie/recepie.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RecepielatestComponent } from './receipe/recepielatest/recepielatest.component';
import { TrendingRecepieComponent } from './receipe/trending-recepie/trending-recepie.component';
import { FooterimgComponent } from './footerimg/footerimg.component';
import { DocumentComponent } from './document/document.component';
import { AboutComponent } from './about/about.component';
import { AdsComponent } from './ads/ads.component';


const routes: Routes = [
  { path: 'background.component', component: BackgroundComponent},
  { path: 'Food.component', component: FoodComponent },
  { path: 'recepie.component', component: RecepieComponent },
  { path: 'Subscribe.component', component: SubscribeComponent },
  { path: 'Recepielatest.component', component: RecepielatestComponent },
  { path: 'trendingrecepie.component', component: TrendingRecepieComponent },
  { path: 'footerimg.component', component: FooterimgComponent },
  { path: 'document.component', component: DocumentComponent },
  { path: 'about.component', component: AboutComponent },
  { path: 'ads.component', component: AdsComponent },
  {
    path: 'recepie', loadChildren: () => import('./receipe/recepie.module').then(m => m.ReceipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
