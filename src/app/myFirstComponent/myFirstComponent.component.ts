import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-my-first-component',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './myFirstComponent.component.html',
  styleUrl: './myFirstComponent.component.css',
})
export class MyFirstComponentComponent {
  isShow = signal<boolean>(false);

  showMessage() {
    this.isShow.set(true);
  }

  closeMessage() {
    this.isShow.set(false);
  }
}

// import { Component } from '@angular/core';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// @Component ({
//   selector: 'app-my-first-component',
//   templateUrl: './myFirstComponent.component.html',
//   imports: [
//     MatSlideToggleModule,
//   ]
// })
// class MyFirstComponentComponent {

// }
