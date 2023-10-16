import { Component, OnInit } from '@angular/core';
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
export class ProfesorComponent implements OnInit {
  profesorForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.profesorForm = formBuilder.group({});
  }

  ngOnInit(): void {}
}
