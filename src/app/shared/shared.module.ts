import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { ThaiDatePipe } from './pipes/thai-date.pipe';
import { ParallaxDirective } from './directives/parallax.directive';



@NgModule({
  declarations: [
    NumberOnlyDirective,
    ThaiDatePipe,
    ParallaxDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
