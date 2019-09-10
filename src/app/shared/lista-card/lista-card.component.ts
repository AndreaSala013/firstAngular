import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.scss']
})
export class ListaCardComponent implements OnInit {


  listObj : Card[] = [
    {id:1,titolo:"Ttolo1",body:"body1",footer:"footer1"},
    {id:2,titolo:"Ttolo2",body:"body2",footer:"footer2"},
    {id:3,titolo:"Ttolo3",body:"body3",footer:"footer3"},
    {id:4,titolo:"Ttolo4",body:"body4",footer:"footer4"},
    {id:5,titolo:"Ttolo5",body:"body5",footer:"footer5"},
    {id:6,titolo:"Ttolo6",body:"body6",footer:"footer6"},
    {id:7,titolo:"Ttolo7",body:"body7",footer:"footer7"},
    {id:8,titolo:"Ttolo8",body:"body8",footer:"footer8"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
