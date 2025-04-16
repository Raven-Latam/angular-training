import { Routes } from '@angular/router';
import { MyFirstComponentComponent } from './myFirstComponent/myFirstComponent.component';


export const routes: Routes = [
  {
    path: "home",
    component: MyFirstComponentComponent
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];
