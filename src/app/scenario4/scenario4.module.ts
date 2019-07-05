import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperComponent } from './super/super.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [
    SuperComponent,
    SubComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SuperComponent
  ]
})
export class Scenario4Module { }
