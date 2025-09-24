import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

   isMenuOpen = false;


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


  
  scrollToSection(section: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

}
