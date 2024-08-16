import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../interfaces/iStep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  template: '<ul><li *ngFor="let step of steps">{{ step.title }} - {{ step.description }}</li></ul>'
})
export class EscenaComponent {
  @Input() steps?: iStep[];
}
