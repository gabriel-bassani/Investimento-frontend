import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, MatButtonModule, CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images = [
    '/assets/c1.png',
    '/assets/c2.png',
    '/assets/c3.png',
    '/assets/c4.png',
  ]
}
