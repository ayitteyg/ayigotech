import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})


export class ResumeComponent{

  

  downloadCV(): void {
    // This would typically point to your actual CV file
    // For demonstration, we'll use a placeholder
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf'; // Path to your CV file
    link.download = 'Ayittey_George_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback in case the file doesn't exist
    alert('CV download functionality would be implemented here. For now, this is a placeholder.');
  }
}
