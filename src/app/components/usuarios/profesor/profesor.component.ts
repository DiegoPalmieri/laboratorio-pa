import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
})
export class ProfesorComponent {
  profesorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profesorForm = formBuilder.group({
      videoBin: new FormControl(' ', Validators.required),
      vga: new FormControl(' ', Validators.required),
      laptop: new FormControl(' ', Validators.required),
      cargador: new FormControl(' ', Validators.required),



    });
  }
}
