import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceipeRoutingModule } from './recepie-routing.module';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepielatestComponent } from './recepielatest/recepielatest.component';
import { TrendingRecepieComponent } from './trending-recepie/trending-recepie.component';

@NgModule({
  declarations: [
    RecepieComponent,
    RecepielatestComponent,
    TrendingRecepieComponent
  ],
  imports: [
    CommonModule,
    ReceipeRoutingModule
  ]
})
export class ReceipeModule { }
