import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input('sendMessage') public message;

  constructor() { }

  ngOnInit() {
  }

}
