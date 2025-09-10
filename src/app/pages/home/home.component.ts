import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  fullText: string = 'Building Applications to solve real-world problems';
   //typing effect
  displayedText: string = '';
  currentIndex: number = 0;
  intervalId: any;

  router = inject(Router)


    ngOnInit() {
    this.startTyping();
  }


   startTyping() {
    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText[this.currentIndex];
        this.currentIndex++;
      } else {
        clearInterval(this.intervalId); // Stop when complete
      }
    }, 150); // Speed: 150ms per letter, you can adjust this
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


downloadCV(event: Event): void {
    event.preventDefault();
    // This would point to your actual CV file
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf'; // Path to your CV file
    link.download = 'Ayittey_George_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
