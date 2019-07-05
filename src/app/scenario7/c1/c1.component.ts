import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/new.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  public employees = [
  
  ];
  constructor(private _newService: NewService) { }

  ngOnInit() {
  }
    sendMessage(data) {
      this._newService.message.next(data);
    }
   

}
