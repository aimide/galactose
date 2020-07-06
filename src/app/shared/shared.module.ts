import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { ThaiDatePipe } from './pipes/thai-date.pipe';



@NgModule({
  declarations: [
    NumberOnlyDirective,
    ThaiDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
