import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from "../escena/escena.component";
import { StepsService } from '../services/steps.service';
import { iStep} from '../interfaces/iStep.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StepsService],
  template: `
    <div *ngFor="let step of steps">
      <h3>{{ step.title }}</h3>
      <p>{{ step.description }}</p>
    </div>
  `
})
export class HomeComponent {

  steps!: iStep[];

  constructor(private stepsService: StepsService) {
    this.steps = this.stepsService.getSteps();
  }

}
