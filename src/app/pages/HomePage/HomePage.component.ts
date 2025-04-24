import { Component } from '@angular/core';
import { MyFirstComponentComponent } from "../../components/myFirstComponent/myFirstComponent.component";

@Component({
  selector: 'app-home-page',
  imports: [MyFirstComponentComponent],
  templateUrl: './HomePage.component.html',
})
export class HomePageComponent { }
