import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-floating-buttons',
  standalone: false,
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.css'
})

export class FloatingButtonsComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show scroll-to-top button after scrolling down 300px
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}