import { Component } from '@angular/core';

@Component({
  selector: 'app-tamplete-form',
  templateUrl: './tamplete-form.component.html',
  styleUrls: ['./tamplete-form.component.css']
})
export class TampleteFormComponent {
  persona = {
    name: '',
    age: ''
  }

  process () {
    console.log(this.persona);
  }
}
