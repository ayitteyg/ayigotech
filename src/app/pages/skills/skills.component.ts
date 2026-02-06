import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  projectCount: number = 0;
  loadingProjects = true;

  experienceYears: number = 0; // ✅ Add this

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    // ✅ Calculate experience dynamically
    const startYear = 2022;
    const currentYear = new Date().getFullYear();

    // +1 makes it marketing-friendly (shows 5 in 2026)
    this.experienceYears = currentYear - startYear + 1;

    // Existing code
    this.loadingProjects = true;

    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectCount = projects.length;
        this.loadingProjects = false;
      },
      error: (err) => {
        console.error('Error fetching project count:', err);
        this.loadingProjects = false;
      }
    });
  }
}

