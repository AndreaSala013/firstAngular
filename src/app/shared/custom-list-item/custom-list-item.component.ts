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

  isBoltVisible:boolean = true;
  isPlayVisible: boolean = false; 
  isStopVisible : boolean = false;

  constructor() { }

  ngOnInit() {
    this.changeStatusStr();
  }

  buttonPlayClick(){
    this.isStopVisible = true;
    this.isBoltVisible = false;
    this.isPlayVisible = false;
    this.changeStatusStr();
  }

  buttonStopClick(){
    this.isStopVisible = false;
    this.isBoltVisible = false;
    this.isPlayVisible = true;
    this.changeStatusStr();
  }

  buttonBoltClick(){
    this.isStopVisible = true;
    this.isBoltVisible = false;
    this.isPlayVisible = false;
    this.changeStatusStr();
  }

  changeStatusStr(){
    if(this.isPlayVisible){
      this.statusStr = "Stopped";
    }
    else if(this.isStopVisible){
      this.statusStr = "Running";
    }else if(this.isBoltVisible){
      this.statusStr = "Not present";
    }
  }
    public stopPropagationHover(event: any): void
    {
      this.hover=false;
      event.stopPropagation();
    }

}
