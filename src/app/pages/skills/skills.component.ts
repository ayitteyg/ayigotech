import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  projectCount: number = 0;
  loadingProjects = true

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
     this.loadingProjects = true
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projectCount = projects.length;
        this.loadingProjects = false
      },
      error: (err) => {
        console.error('Error fetching project count:', err);
        this.loadingProjects = false
      }
    });
  }


}
