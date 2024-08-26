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

  currentStep: number = 0;

  setCurrentStep(index: number) {
    this.currentStep = index;
  }
  toNextCard() {
    if (this.currentStep < (this.steps?.length ?? 0)- 1) {
      setTimeout(() => {
        this.currentStep++;
      },1000)
    }
  }

  toPrevCard() {
    if (this.currentStep > 0) {
      setTimeout(() => {
        this.currentStep--;
      },1000)
    }
  }
  animateElementRight() {
    const element = document.querySelectorAll('.card')[this.currentStep]; 
    element?.classList.add('animateRight');
    setTimeout(() => {
      element?.classList.remove('animateRight');
    },2000)
  }

  animateElementLeft() {
    const element = document.querySelectorAll('.card')[this.currentStep]; 
    element?.classList.add('animateLeft');
    setTimeout(() => {
      element?.classList.remove('animateLeft');
    },2000)
  }
 }


