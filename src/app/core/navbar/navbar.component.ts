import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  siteName = 'ayigotech.com'; // Replace with your name

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  smoothScroll(target: string, event: Event): void {
    event.preventDefault();
    this.isMenuOpen = false;
    
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
