import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowsListComponent } from './cows-list/cows-list.component';



@NgModule({
  declarations: [
    CowsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CowsListComponent
  ]
})
export class CowsModule { }
