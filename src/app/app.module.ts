import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BackgroundComponent } from './background/background.component';
import { AppRoutingModule } from './app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BackgroundComponent
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
