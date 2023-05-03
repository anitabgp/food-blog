import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BackgroundComponent } from './background/background.component';
import { FoodComponent } from './food/food.component';
import { RecepieComponent } from './recepie/recepie.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RecepielatestComponent } from './recepielatest/recepielatest.component';
import { TrendingRecepieComponent } from './trending-recepie/trending-recepie.component';
import { FooterimgComponent } from './footerimg/footerimg.component';
import { DocumentComponent } from './document/document.component';



const routes: Routes = [
  { path: 'menu.component', component: MenuComponent },
  { path: 'background.component', component: BackgroundComponent},
  { path: 'Food.component', component: FoodComponent },
  { path: 'recepie.component', component: RecepieComponent },
  { path: 'Subscribe.component', component: SubscribeComponent },
  { path: 'Recepielatest.component', component: RecepielatestComponent },
  { path: 'trendingrecepie.component', component: TrendingRecepieComponent },
  { path: 'footerimg.component', component: FooterimgComponent },
  { path: 'document.component', component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
