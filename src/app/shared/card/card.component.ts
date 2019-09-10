import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input('card') card:Card;

  constructor() { }

  onVoted(number: number) {
    //alert(number);
  }

}
