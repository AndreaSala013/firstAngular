import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti-page',
  templateUrl: './contatti-page.component.html',
  styleUrls: ['./contatti-page.component.scss']
})
export class ContattiPageComponent implements OnInit {

  //loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    /*this.loginForm = new FormGroup({
      usernameInput: new FormControl("",Validators.required),
      passwordInput:new FormControl("",Validators.required)
    });*/
  }

  getForm(formValue){
    console.log("Padre");
    console.log(formValue);
  }

}
