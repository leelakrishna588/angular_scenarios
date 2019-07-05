import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { NewService } from '../new.service';


@NgModule({
  declarations: [ 
    P1Component,
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    P1Component
  ],
  providers:[
    NewService
  ]
})
export class Scenario7Module { }
