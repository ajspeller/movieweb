import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchType } from 'src/app/models/searchType.enum';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private movieSearch: MovieService) {}

  ngOnInit() {}

  searchChanged() {
    this.results = this.movieSearch.searchData({
      title: this.searchTerm,
      type: this.type,
    });
  }
}
