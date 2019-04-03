import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Shared/Movie';
import { MOCK_MOVIES } from '../Shared/MockMovies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private movies: Movie[];
  private selectedMovie: Movie;

  @Output('movie-selected')
  public movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();


  constructor(public movieService: MovieService) { }

  ngOnInit() { this.movies = this.movieService.getMovies(); }

  public onSelect(movie: Movie) {
    this.selectedMovie = movie
    this.movieSelected.emit(movie)
  }

}
