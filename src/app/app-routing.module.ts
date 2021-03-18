import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
// import {GalleryComponent} from './pages/gallery/gallery.component';
import {SchoolsComponent} from './pages/schools/schools.component';
// import {ProjectsComponent} from './pages/projects/projects.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {DonateComponent} from './pages/donate/donate.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // {
  //   path: 'gallery',
  //   component: GalleryComponent
  // },
  {
    path: 'schools',
    component: SchoolsComponent
  },
  // {
  //   path: 'projects',
  //   component: ProjectsComponent
  // },
  // {
  //   path: 'projects/:name',
  //   component: ProjectsComponent
  // },
  {
    path: 'donate',
    component: DonateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
