import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProjectsComponent } from './Component/projects/projects.component';
import { AboutComponent } from './Component/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component:HomeComponent },
  { path: 'Projects', component:ProjectsComponent },
  { path: 'About', component:AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
