import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  result: Observable<any>;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.result = this.movieService.getDetails(id).pipe(
      map((r) => {
        console.log(r);
        return r;
      })
    );
  }

  openWebsite() {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    window.open(this.result['Website'], '_blank');
  }
}
