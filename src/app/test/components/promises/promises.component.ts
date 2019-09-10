import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  stringaAsincrona: string;

  constructor() { }

  async ngOnInit() {
    try {
      let x =  await this.asyncTask();
    console.log(x); // questo sarà stampato dopo
    } catch (error) {
      console.error("errore : ", error);
    }
  }

  asyncTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          console.log('sono asincrono');
          this.stringaAsincrona = "sono asincrono";
          //resolve('ciao');
          reject('diiiioooo...');
        }, 3000);
    });
  }

}
