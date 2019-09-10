import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Star } from 'src/app/model';



@Component({
  selector: 'app-raitings',
  templateUrl: './raitings.component.html',
  styleUrls: ['./raitings.component.scss']
})
export class RaitingsComponent implements  OnInit {
  @Output() raiting = new EventEmitter<number>();
  @Input('numberOfStars') numberOfStars : number;
  arrayOfStars:Star[] = Array(this.numberOfStars);
  clickedStars:number = 0;

  constructor() { }

  ngOnInit(){ 
    this.createStars();
  }

  clickStar(clickedStar:Star){
    this.colorStars(clickedStar.index);
    this.clickedStars = clickedStar.index;
    this.emitRating(clickedStar.index+1);
  }

  mouseEnter(focusStar:Star){
    this.colorStars(focusStar.index);
  }

  mouseLeave(){
    if(this.clickedStars == 0){
      this.createStars();
    }
    else{
      this.colorStars(this.clickedStars);
    }
  }

  createStars(){
    for(let i = 0; i<this.numberOfStars;i++){
      this.arrayOfStars[i]= {index:i,isClicked:false};
    }
  }

  colorStars(indexOfStar:number){
    for(let i=0;i<this.numberOfStars;i++){
      if(i<=indexOfStar){
        this.arrayOfStars[i].isClicked = true;
      }
      else{
        this.arrayOfStars[i].isClicked = false;
      }
    }
  }

  emitRating(number:number){
    this.raiting.emit(number);
  }

}
