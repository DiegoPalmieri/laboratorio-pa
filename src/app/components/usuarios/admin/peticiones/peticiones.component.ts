import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css'],
})
export class PeticionesComponent {
  dataSource!: MatTableDataSource<any>;

  displayedColumns = [
    {
      profesor: 'Andres Carmona',
      horaInicio: '3:13 p.m',
      horaFin: '5:30 pm',
      fecha: '6/10/2023',
      recurso: 'VIDEO BIN',
      acciones: ''
    },
  ];
}
