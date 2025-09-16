import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
   { path: '', component: MainComponent }, // This shows Home, Skills, Projects
   { path: 'resume', component: ResumeComponent },
   { path: 'blog', component: BlogComponent },
   { path: '**', redirectTo: '' } // All other routes go to the main page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
