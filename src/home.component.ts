import { Component } from '@angular/core';
import { NewLoggerService } from './services/new-logger.service';
import { OldLoggerService } from './services/old-logger.service';

@Component({
  standalone: true,
  template: `
    <h1>Welcome!</h1>
    <p>This Angular v14 is a companion to assist you with getting started with standalone components in Angular v14+.</p> 
  `,
  providers: [
    NewLoggerService,
    { provide: OldLoggerService, useExisting: NewLoggerService },
  ],
})
export class HomeComponent {
  constructor(private oldLoggerService: OldLoggerService) {
    oldLoggerService.log('HomeComponent test');
  }
}
