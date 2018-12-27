import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../model/movie';

@Component({
  selector: 'mm-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie

  constructor() { }

  ngOnInit() {}
}
