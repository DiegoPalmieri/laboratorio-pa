import { FormGroup,  FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroForm: FormGroup;

  constructor(){

    this.registroForm = new FormGroup({

      username: new FormControl('', Validators.required)



    })

  }

}
