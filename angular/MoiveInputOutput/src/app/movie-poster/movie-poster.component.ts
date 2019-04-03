import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Shared/Movie';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {

  @Input()
  private movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
