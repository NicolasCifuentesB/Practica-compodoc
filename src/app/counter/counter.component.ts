import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  text:String = "TypeScript";
  persona:Persona = {
    name : "Nicolas",
    age : 22
  }

  num:number = 1;

  decrease() {
    this.num--;
  }

  increase() {
    this.num++;
  }

}
