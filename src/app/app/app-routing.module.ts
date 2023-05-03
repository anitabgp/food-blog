import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { BackgroundComponent } from '../background/background.component';


const routes: Routes = [
  { path: 'menu.component', component: MenuComponent },
  { path: 'background.component', component: BackgroundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
