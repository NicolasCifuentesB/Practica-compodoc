import { Component } from '@angular/core';

import { Persona } from '../persona';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})

export class LoopsComponent {
  people:Persona[] = [
    {name:'Nicolas', age:22},
    {name:'Valeria', age:21},
    {name:'Sofi', age:22}
  ]
}
