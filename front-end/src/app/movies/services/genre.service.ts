import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Genre } from '../model/genre';

const baseUrl = "http://localhost:3000/api/genres";

@Injectable()
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get<Genre[]>(baseUrl).map(res => {
      let retVal = new Array<Genre>();
      res.forEach(genre => retVal.push(new Genre(genre)));
      return retVal;
    });
  }

  saveGenre(newGenre: Genre) {
    return this.http.post<Genre>(baseUrl, newGenre).map(res => {
      return new Genre(res);
    });
  }
}
