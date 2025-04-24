import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar-determinate',
  imports: [MatProgressBarModule, MatButtonModule, UpperCasePipe],
  templateUrl: './ProgressBarDeterminate.component.html',
  styleUrl: './ProgressBarDeterminate.component.css',
})
export class ProgressBarDeterminateComponent {
  name = signal<string>('Javiera López');
  score = signal<number>(500);
  level = signal<string>('Elite');
  nextLevel = signal<string>('Premier');

  valueProgressBar = computed(() => {
    return (100 * this.score())/1000
  });

  puntosFaltantes = computed(() => {
    return 1000 - this.score();
  })

  getRandomeValue() {
    // Este es para hacer el score randome
    // this.score.set(Math.floor(Math.random() * 1000) + 1);

    // Este es para aumentar el score de 100 en 100
    this.score.update(current => current+100)
  }
}
