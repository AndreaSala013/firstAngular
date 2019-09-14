import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() sendForm = new EventEmitter;

  form:FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      messaggio: new FormControl("", Validators.required)
    });
  }

  onSubmit(formValue){
    console.log(formValue);
    this.sendForm.emit(formValue);
  }

}
