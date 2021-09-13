import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  // initialise data could be array, object or a variable
  cow={
    cowName: "Gelegele",
    cowCalves: "2",
    cowThief: "true",
    cowSickly: "false"
  };
  getData(){
    return this.cow;
  }
  constructor() { }
}
