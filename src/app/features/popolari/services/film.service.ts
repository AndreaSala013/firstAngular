import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilmPopolari(){
    let params = new HttpParams()
    .set('api_key', '4671085ab7cb1b2010b2c817136a5c79')
    .set('language','it');

    let url = 'https://api.themoviedb.org/3/movie/popular';

    return this.http.get(url, {params});
  }
}
