import { Component, OnInit, Input } from '@angular/core';
import { Star } from 'src/app/model';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  colored :string ="fas amber-text";
  notColored :string ="far"; 

  @Input('isColored') isColored : boolean;

  constructor() { }

  ngOnInit() {
  }

}
