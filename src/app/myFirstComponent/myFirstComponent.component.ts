import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  imports: [],
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
