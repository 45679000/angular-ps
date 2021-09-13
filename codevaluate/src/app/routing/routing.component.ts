import { Component, OnInit } from '@angular/core';
import { AppDataService } from "../app-data.service";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  cow= "";
  constructor(private ngombe: AppDataService) { 
    let cowZ = this.ngombe.getData()
    this.cow = cowZ.cowName;
  }
  callNgombe(){
    let cattle = this.ngombe.getData()
    // console.log(this.ngombe.getData().cowThief);
    // iteration of objects in typescript
    console.log(this.ngombe.getData());
    for (const [k, v] of Object.entries(cattle)) {
      let info = '';
      // let info = [v];
      info += v;
      console.log(info);      
      }
  }
  ngOnInit(): void {
  }

}
