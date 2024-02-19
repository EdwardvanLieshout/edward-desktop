import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartbarComponent } from '@project/startbar';

@Component({
  selector: 'project-main-container',
  standalone: true,
  imports: [CommonModule, StartbarComponent],
  templateUrl: './main-container.component.html',
})
export class MainContainerComponent {}
