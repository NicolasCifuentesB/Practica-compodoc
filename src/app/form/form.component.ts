import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  open_alert:boolean = false;
  
  show_console(name:string){
    console.log(name);
    this.open_alert = true;
  }
}
