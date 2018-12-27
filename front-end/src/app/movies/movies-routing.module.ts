import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFormComponent } from './movies-form/movies-form.component';

const moviesRoutes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MoviesFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
