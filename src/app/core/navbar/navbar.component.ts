import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput = new FormControl();

  constructor() { }

  ngOnInit() {

    this.searchInput = new FormControl();  
    this.searchInput.setValidators([
      Validators.minLength(6)
    ]);

    this.searchInput.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(value=>console.log(value));
  }

}
