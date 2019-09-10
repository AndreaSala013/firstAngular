import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  sub : Subscription;

  constructor() { }

  ngOnInit() {
    this.sub = this.createObservable().subscribe(
      value=>console.log(value),
      error=>console.log(error),
      ()=>console.log('fine ascolto')
      );
  }

  createObservable(){
    return new Observable(observer=>{
      setTimeout(() => {
        observer.next(1)
      }, 1000);
      setTimeout(() => {
        observer.next(2)
      }, 2000);
      setTimeout(() => {
        observer.next(3)
      }, 3000);
      setTimeout(() => {
        observer.error('dddiiiiiiooooo')
      }, 4000);
      //questo non viene eseguito perchè messo dopo l'error
      setTimeout(() => {
        observer.complete()
      }, 5000);
    });
  }

  ngOnDestroy(){
    console.log('destroy');
    //IMPORTANTISSIMO: anche se l'observable si complete,
    //se non fai l'unsubscribe la memoria non viene liberata
    this.sub.unsubscribe();
  }

}
