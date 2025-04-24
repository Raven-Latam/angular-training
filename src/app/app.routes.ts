import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { MyProfileComponent } from './pages/MyProfile/MyProfile.component';


export const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "progress-bar",
    component: MyProfileComponent
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];
