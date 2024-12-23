import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationSidebarComponent } from './features/navigation-sidebar/navigation-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primeTimeApplication';
}
