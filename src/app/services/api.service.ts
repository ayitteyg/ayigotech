import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface ProjectScreenshot {
  id: number;
  image: string;
  order: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  github_link: string;
  demo_link?: string;
  image: string;
  is_mobile_app: boolean;
  created_at: string;
  problem: string;
  solution: string;
  outcome: string;
  screenshots: ProjectScreenshot[];
}


export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private baseUrl = environment.apiUrl;  // 

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/api/projects/`);
  }


  sendContactMessage(data: ContactMessage): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/contact/`, data);
  }


}
