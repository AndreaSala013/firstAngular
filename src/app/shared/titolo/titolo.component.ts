import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {

  @Input('titolo') titolo : string;

  constructor() { }

  ngOnInit() {
  }

}
