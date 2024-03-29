import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required),
    });
  }

  botonLogin() {
    if (this.formulario.invalid) {
      Swal.fire('Usuario Incorrecto', '', 'error');
    } else if (this.formulario.valid) {
      Swal.fire('Correcto', '', 'success');
    }

    console.log(this.formulario.value);
  }
}
