import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';

@NgModule({
  declarations: [
    RedComponent,
    BlueComponent,
    GreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RedComponent
  ]
})
export class Scenario5Module { }
