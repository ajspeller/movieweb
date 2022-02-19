import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://www.omdbapi.com';
  apiKey = '22d7e0d5';

  constructor(private http: HttpClient) {}

  searchData({ title, type }): Observable<any> {
    return this.http
      .get(
        `${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`
      )
      .pipe(
        map((results) => {
          console.log('RAW: ', results);
          // eslint-disable-next-line @typescript-eslint/dot-notation
          return results['Search'];
        })
      );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}
