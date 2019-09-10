import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-list-item',
  templateUrl: './custom-list-item.component.html',
  styleUrls: ['./custom-list-item.component.scss']
})
export class CustomListItemComponent implements OnInit {

hover : boolean = false;

  @Input('isLastElement') isLastElement:boolean;

  statusStr : string;

  isPlayVisible: boolean = false; 
  isStopVisible : boolean = true;

  constructor() { }

  ngOnInit() {
    this.changeStatusStr();
  }

  buttonPlayClick(){
    this.isStopVisible = true;
    this.isPlayVisible = false;
    this.changeStatusStr();
  }

  buttonStopClick(){
    this.isStopVisible = false;
    this.isPlayVisible = true;
    this.changeStatusStr();
  }

  changeStatusStr(){
    if(this.isPlayVisible){
      this.statusStr = "Stopped";
    }
    else{
      this.statusStr = "Running";
    }
  }
    public stopPropagationHover(event: any): void
    {
      this.hover=false;
      event.stopPropagation();
    }

}
