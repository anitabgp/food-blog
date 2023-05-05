import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BackgroundComponent } from './background/background.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { AdsComponent } from './ads/ads.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FoodComponent } from './food/food.component';
import { FooterimgComponent } from './footerimg/footerimg.component';
import { DocumentComponent } from './document/document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BackgroundComponent,
    AboutComponent,
    AdsComponent,
    SubscribeComponent,
    FoodComponent,
    FooterimgComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
