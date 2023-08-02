import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private form_builder: FormBuilder){ }
  
  get name(){
    /* return this.form_user.get('name'); */
    return this.form_user.get('name') as FormControl;
  }

  get email(){
    /* return this.form_user.get('email'); */
    return this.form_user.get('email') as FormControl;
  }

  form_user = this.form_builder.group({
    'name' : ['',Validators.required],
    'email' : ['',[Validators.required, Validators.email]]
  });
  /* form_user = new FormGroup({
    'name' : new FormControl('',Validators.required),
    'email' : new FormControl('',[Validators.required, Validators.email])  
  }); */
  /* name = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required, Validators.email]); */
  procesar () {
    console.log(this.form_user.value);
  }
}
