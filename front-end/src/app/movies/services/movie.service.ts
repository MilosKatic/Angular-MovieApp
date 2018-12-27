import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { MovieList } from '../model/movie-list';
import { Movie } from '../model/movie';

const baseUrl = "http://localhost:3000/api/movies";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(params?: any) {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
          .set("sort", params.sort && params.sort.toString() || '')
          .set("sortDirection", params.sortDirection && params.sortDirection.toString() || '')
          .set("page", params.page && params.page.toString() || '1')
          .set("pageSize", params.pageSize && params.pageSize.toString() || '5')
      }
    }

    return this.http.get<MovieList>(baseUrl, queryParams).map(res => {
      return new MovieList(res);
    });
  }

  getMovie(id: number) {
    return this.http.get<Movie>(baseUrl + "/" + id).map(res => {
      return new Movie(res);
    }); 
  }

  saveOrUpdate(movie: Movie) {
    if(movie._id) {
      return this.http.put<Movie>(baseUrl + "/" + movie._id, movie).map(res => {
        return new Movie(res);
      });
    } else {
      return this.http.post<Movie>(baseUrl, movie).map(res => {
        return new Movie(res);
      });
    }
  }
}
