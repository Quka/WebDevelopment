import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Shared/Movie';

@Component({
  selector: 'app-movie-plot',
  templateUrl: './movie-plot.component.html',
  styleUrls: ['./movie-plot.component.css']
})
export class MoviePlotComponent implements OnInit {

  @Input()
  private movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
