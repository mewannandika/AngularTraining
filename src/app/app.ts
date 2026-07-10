import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular-deep-dive');

  data = {
    title: 'taukanda title'
  };

  OnKeyUp(newTitle:string) {
    this.data.title = newTitle;
  }
}
