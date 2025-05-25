import { Component } from '@angular/core';
import { TopnavComponent } from './layout/topnav/topnav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
