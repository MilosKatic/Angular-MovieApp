import { Component, OnInit } from '@angular/core';

import { MovieService } from "../services/movie.service";
import { MovieList } from "../model/movie-list";

@Component({
  selector: 'mm-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  params = {
    "sort": "rating",
    "sortDirection": "desc",
    "page": 1,
    "pageSize": 6
  };
  movies: MovieList;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies(this.params).subscribe(res => this.movies = res);
  }

  updateParams(params?: any) {
    if(params) {
      this.params.pageSize = params.pageSize || this.params.pageSize;
      this.params.page = params.page || this.params.page;
      this.params.sort = params.sort || this.params.sort;
      this.params.sortDirection = params.sortDirection || this.params.sortDirection;
    }
    this.movieService.getMovies(this.params).subscribe(res => this.movies = res);
  }

}
