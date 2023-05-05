import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1>Welcome!</h1>
    <p>This Angular v14 is a companion to assist you with getting started with standalone components in Angular v14+.</p> 
  `,
  providers: [],
})
export class HomeComponent {
  constructor() {}
}
