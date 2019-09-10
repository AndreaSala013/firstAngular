import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-popolari-page',
  templateUrl: './popolari-page.component.html',
  styleUrls: ['./popolari-page.component.scss']
})
export class PopolariPageComponent implements OnInit {

  film$;

  constructor(private filmSrv: FilmService) { }

  ngOnInit() {
    this.getFilmPopolari();
  }

  getFilmPopolari(){
    this.film$ = this.filmSrv.getFilmPopolari()
    .pipe(tap(res=>console.log(res))).subscribe();
  }

}
