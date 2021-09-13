import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todayDate(){
    return new Date().getFullYear();
  }
  public isRed = "true";
  public isBlue = "true";
  public isGreen = "true";
  public upCase = "true";
  element = {
    "red" : this.isRed,
    "green": !this.isGreen,
    "blue": !this.isBlue,
    "upCase": this.upCase
  }
  spanStyles = {
    fontSize: '3rem',
    fontWeight: '600',
    textStyle: 'italic',
    letterSpacing: '4px'
  }
  karibuMessage= 'Welcome afande';
  isDisplay= 'none';
  karibu(){
    this.isDisplay = 'block';
    alert(this.karibuMessage);
  }
  essage(event:any){
    this.karibuMessage = event.type;
    console.log(event);
  }
  logInput(value:any){
    console.log(value);
  }
  name ='';
  pstyle = {
    padding : "1rem 0.5rem",
    backgroundColor : 'red',
    color : 'white',
    width : '50%',
    margin : 'auto'
  }
}
