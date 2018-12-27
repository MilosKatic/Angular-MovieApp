import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { MovieService } from '../services/movie.service';
import { GenreService } from '../services/genre.service';
import { Movie } from '../model/movie';
import { Genre } from '../model/genre';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent implements OnInit {
  genres: Genre[];
  genreMenu: boolean = false;
  newGenre: Genre;
  form: FormGroup;
  id: number;

  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
    ) {
    this.form = fb.group({
      "name": ["", Validators.required],
      "description":["", [Validators.required, Validators.minLength(30), Validators.maxLength(250)]],
      "year": ["", [Validators.required, Validators.min(1800), Validators.max(2017)]],
      "rating": "",
      "duration": "",
      "director": "",
      "genre": ""
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      let id = params['id'];
      if(id == 'add') {
        this.form.reset();
        this.id = null;
      } else {
        this.movieService.getMovie(parseInt(id)).subscribe(res => {
          this.form.patchValue(res);
          this.id = res._id;
        });
      }
      this.genreService.getGenres().subscribe(res => this.genres = res);
    });
  }

  saveMovie() {
    let movie = new Movie(this.form.value);
    movie._id = this.id;
    this.movieService.saveOrUpdate(movie).subscribe(res => this.router.navigate(['movies']));
  }

  toggleGenreMenu() {  
    this.genreMenu = !this.genreMenu;
    if(this.genreMenu) {
      this.newGenre = new Genre();
    }
  }

  saveGenre() {
    this.genreService.saveGenre(this.newGenre).subscribe(res => {
      this.genres.push(res);
      this.form.patchValue({"genre": res.name});
      this.genreMenu = false;
    });
  }
}