import { Component,HostListener, OnInit  } from '@angular/core';
import { ApiService, Project } from '../../services/api.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})


export class ProjectsComponent {
  isModalOpen = false;
  currentSlides = 0;
  selectedProject: any = null;
  projects: Project[] = [];
  currentSlide: number = 0;  // carousel control
  mobileProjects: any[] = [];
  webProjects: any[] = [];
  loadingProjects = true;
  constructor(private apiService: ApiService) {}

  
  ngOnInit(): void {
  this.loadingProjects = true
  this.apiService.getProjects().subscribe({
    next: (data) => {
      this.projects = data;

      // separate lists
      this.mobileProjects = this.projects.filter(p => p.is_mobile_app);
      this.webProjects = this.projects.filter(p => !p.is_mobile_app);

      this.loadingProjects = false

      console.log("All Projects:", this.projects);
      console.log("Mobile Projects:", this.mobileProjects);
      console.log("Web Projects:", this.webProjects);
    },
    error: (err) => {
      console.log(err, 'could not fetch data');
        this.loadingProjects = false
    }
  });
}


  
  // projectss = [
  //   {
  //     title: 'Ionic Mobile Application',
  //     tech: ['Ionic', 'Capacitor', 'Angular', 'Firebase'],
  //     description: 'A cross-platform mobile app with seamless user experience and offline capabilities.',
  //     image: 'https://via.placeholder.com/500x300',
  //     problem: 'the problem',
  //     solution: 'the tech solution you provided ',
  //     outcome: 'Increased team productivity by 40% and reduced task completion time by streamlining collaboration processes',
  //     screens: 4
  //   },
  //   {
  //     title: 'E-commerce Backend',
  //     tech: ['Django', 'DRF', 'PostgreSQL'],
  //     description: 'A robust e-commerce backend with payment integration and inventory management.',
  //     image: 'https://via.placeholder.com/500x300',
  //     problem: 'the problem',
  //     solution: 'the tech solution you provided ',
  //     outcome: 'Increased team productivity by 40% and reduced task completion time by streamlining collaboration processes',
      
  //   },
  //   {
  //     title: 'Admin Dashboard',
  //     tech: ['Angular', 'TypeScript', 'Chart.js'],
  //     description: 'A responsive admin dashboard with data visualization and user management.',
  //     image: 'https://via.placeholder.com/500x300',
  //     featured: false
  //   },
  //   {
  //     title: 'Task Management App',
  //     tech: ['Django', 'Angular', 'PostgreSQL'],
  //     description: 'A full-stack task management application with real-time updates and team collaboration.',
  //     image: 'https://via.placeholder.com/500x300',
  //     featured: false
  //   }
  // ];

  

  openModal(index: number, event: Event): void {
    event.preventDefault();
    this.selectedProject = this.projects[index];
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.currentSlide = 0;
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }


  // carousel controls
  nextSlide(project: Project) {
    if (project.screenshots.length > 0) {
      this.currentSlide = (this.currentSlide + 1) % project.screenshots.length;
    }
  }

  prevSlide(project: Project) {
    if (project.screenshots.length > 0) {
      this.currentSlide = (this.currentSlide - 1 + project.screenshots.length) % project.screenshots.length;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }



  // nextSlide2(): void {
  //   if (this.selectedProject.featured) {
  //     this.currentSlide = (this.currentSlide + 1) % this.selectedProject.screens;
  //   }
  // }

  // prevSlide2(): void {
  //   if (this.selectedProject.featured) {
  //     this.currentSlide = (this.currentSlide - 1 + this.selectedProject.screens) % this.selectedProject.screens;
  //   }
  // }

  // goToSlide2(index: number): void {
  //   this.currentSlide = index;
  // }

  // Close modal when clicking outside content
  @HostListener('click', ['$event'])
  onModalClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closeModal();
    }
  }

  // Close modal with Escape key
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeModal();
    }
  }
}