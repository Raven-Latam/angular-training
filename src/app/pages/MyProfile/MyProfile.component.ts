import { Component } from '@angular/core';
import { ProgressBarDeterminateComponent } from "../../components/ProgressBarDeterminate/ProgressBarDeterminate.component";

@Component({
  selector: 'app-my-profile',
  imports: [ProgressBarDeterminateComponent],
  templateUrl: './MyProfile.component.html',
  styleUrl: './MyProfile.component.css',
})
export class MyProfileComponent { }
