import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  current_com:string;
  constructor() { }
  @Output() chnageEvent=new EventEmitter<string>();
  ngOnInit() {
    this.current_com="pencil"
  }
  
  changeCom($com){
    this.current_com=$com;
    this.chnageEvent.emit($com);
  }
}
