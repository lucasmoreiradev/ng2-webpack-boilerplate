import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App :D</h1>
  <h2>{{ user.name }} details!</h2>
  <p>{{ user.description }}</p>
  <div>
    <label>Name</label>
    <input [(ngModel)]="user.name" placeholder="name">
  </div>
  `
})
export class AppComponent {
  user = {
    name: 'Lucas Moreira',
    age: '22',
    description: 'I love codez'
  }
}

