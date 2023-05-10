import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReceipeRoutingModule } from './recepie-routing.module';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepielatestComponent } from './recepielatest/recepielatest.component';
import { TrendingRecepieComponent } from './trending-recepie/trending-recepie.component';
import { ReceipeHomeComponent } from './receipe-home/receipe-home.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RecepieComponent,
    RecepielatestComponent,
    TrendingRecepieComponent,
    SidenavComponent,
    ReceipeHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReceipeRoutingModule
  ]
})
export class ReceipeModule { }
