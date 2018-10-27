import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  color:string="#000";
  size:string="2";
  @Output() chnageColor=new EventEmitter<string>();
  @Output() chnageSize=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
   
  }
  changeColor(){
    this.chnageColor.emit(this.color);
  }
  changeSize(){
    this.chnageSize.emit(this.size);
  }
}
