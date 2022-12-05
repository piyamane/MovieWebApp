import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesComponent } from './components/movies/movies.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path:'movies',
    component: MoviesComponent
  },
  {
    path:'movieDetail',
    component: MoviesDetailsComponent,
    data: { }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
