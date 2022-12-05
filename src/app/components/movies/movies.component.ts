import { Component } from '@angular/core';
import { Genre } from '../../../app/shared/model/Genre';
import { Movie } from '../../../app/shared/model/Movie';
import movies from '../../../app/shared/data/movies.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  genres!: any[];
  newGenres: any[]=[];
  uniqueGenres: any[]=[];
  uniqueGenresPair: Genre[]=[];
  movies: Movie[] = [];
  searchStr: any;

  key: string ='title';
  reverse:boolean = false;

  constructor(){
  }

  ngOnInit(): void {
    this.movies = movies;
    this.getMovies();
    this.loadGenres();    
  }

  getMovies() {
    console.log('Method getMovies called.');
    //this.movies = movies;
    console.log("movies -", this.movies);
  }

  loadGenres() {
    this.genres = this.movies.map(i => { return i.genre_ids});
    let newGenres;
    this.genres.forEach(element => {
      element.forEach((genre: any) => {
        this.newGenres.push(genre);
      });
      
    });
    console.log("genres - ", this.genres);
    console.log("newGenres - ", this.newGenres);
    this.uniqueGenres = this.newGenres.filter((item, index, self) => self.indexOf(item) === index);
    this.uniqueGenres.forEach((item) => {
      let genre = {
        name: item,
        checked: false
      };
      this.uniqueGenresPair.push(genre);
    });
    console.log("uniqueGenresPair ----", this.uniqueGenresPair);
  }

  filterByGenre(genre: any) {
    console.log("filter by genre called.", genre.target.value);
  }
  
  sort(key: string){
    this.key= key;
    this.reverse =!this.reverse;
  }

  setSelectedGenreList(genres:any[]){
    this.movies = movies;
    console.log("selectedGenreList -", genres);
    //const result = my_arr.flatMap(item => item.arr).filter(item => item.value === 1)
    genres.forEach((genre) => {
       this.movies.map(m => m.genre_ids.map(( obj ) => {
        if(obj.includes(genre)){
          this.movies =[];
          this.movies.push(m);
        }
    }));
  });
}
  setIndividualGenre(item:{}){
    console.log("shareIndividualGenre",item);
  }

}