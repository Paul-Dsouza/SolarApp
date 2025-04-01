import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SolarApp';
  constructor(private router: Router) {}

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/product-service';
  }
  
}
