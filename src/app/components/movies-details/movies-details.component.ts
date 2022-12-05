import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {
  movie: any;
  // baseUrl = 'https://www.youtube.com/embed/';
  // autoplay = '?rel=0;&autoplay=1&mute=0';
  title!: string;
  release_date: any;
  vote_average: any;
  vote_count: any;
  runtime: any;
  backdrop_path: any;


  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.queryParams.subscribe((params: Params) => {
      this.title = params['title'];
      this.release_date = params['release_date'];
      this.vote_average = params['vote_average'];
      this.vote_count = params['vote_count'];
      this.runtime = params['runtime'];
      this.backdrop_path = params['backdrop_path'];
    });
  }
}
