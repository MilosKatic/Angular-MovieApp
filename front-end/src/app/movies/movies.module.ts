import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieService } from './services/movie.service';
import { GenreService } from './services/genre.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFormComponent } from './movies-form/movies-form.component';
import { PaginationComponent } from './movies-list/pagination/pagination.component';
import { SorterComponent } from './movies-list/sorter/sorter.component';
import { MovieComponent } from './movies-list/movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MoviesRoutingModule
  ],
  providers: [MovieService, GenreService],
  declarations: [MoviesListComponent, MoviesFormComponent, PaginationComponent, SorterComponent, MovieComponent]
})
export class MoviesModule { }
