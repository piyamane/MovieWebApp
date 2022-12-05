import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { HeaderComponent } from './Navbar/header/header.component';
import { FooterComponent } from './Navbar/footer/footer.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NumberWithCommasPipePipe } from './pipe/number-with-commas-pipe.pipe';
import { TimePipe } from './pipe/time.pipe';
import { DatePipe } from './pipe/date.pipe';
import { MultiSelectDropdownComponent } from './shared/multi-select-dropdown/multi-select-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    HeaderComponent,
    FooterComponent,
    NumberWithCommasPipePipe,
    TimePipe,
    DatePipe,
    MultiSelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
    SidebarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SkeletonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
