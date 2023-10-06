import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css'],
})
export class PeticionesComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'profesor',
    'horaInicio',
    'horaFin',
    'fecha',
    'recurso',
  ];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataSource = new MatTableDataSource(this.displayedColumns);
    console.log(this.dataSource);
  }
}
