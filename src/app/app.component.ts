import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold underline">Welcome to {{ title }}!</h1>
    <router-outlet />
  `
})
export class AppComponent {
  title = 'poke-binder';
}
