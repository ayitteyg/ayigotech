import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})


export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  siteName: string = 'ayigotech'; // Replace with your name

  smoothScroll(target: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}