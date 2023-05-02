import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BackgroundComponent } from './background/background.component';
import { AppRoutingModule } from './app-routing.module';
import { RecepieComponent } from './recepie/recepie.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BackgroundComponent,
    RecepieComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
