import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.registroForm = formBuilder.group({
      username: new FormControl('', Validators.required),
      identificacion: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required),
    });
  }

  botonRegistro() {
    if (this.registroForm.valid) {
      Swal.fire('Registro Exitoso', '', 'success');
    }

    console.log(this.registroForm.value);
  }
}
