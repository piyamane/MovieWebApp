import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/model/Movie';
import movies from '../../../app/shared/data/movies.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  responsiveOptions;
  loader = true;

  nowPlaying: Movie[] = movies; 

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.nowPlaying = movies;
  }
}
