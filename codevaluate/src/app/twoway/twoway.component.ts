import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = '';
  isTrue = false;
  color = 'indigo';
  rangis = ['Neon','Grey','Green','Baige','Cream','Orange'];
  cars = ['bmw','toyota']
  transformer = 'uppercase';
  @Input () parentData:any ;
  @Output () childEvent= new EventEmitter();
  fireEvent(){
    this.childEvent.emit(this.name);
  }
}
