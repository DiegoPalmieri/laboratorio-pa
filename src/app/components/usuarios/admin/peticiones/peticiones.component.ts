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
    'acciones'
  ];

  tablaInfo: any []=[

    {
      profesor: 'HORACIO HERNANDEZ',
      horaInicio: '8:27 a.m.',
      horaFin: '10:00 p.m.',
      fecha: '9/10/2023',
      recurso: 'VIDEO BIN'

    },

    {
      profesor: 'MARIA DE LA CRUZ',
      horaInicio: '8:27 a.m.',
      horaFin: '10:00 p.m.',
      fecha: '9/10/2023',
      recurso: 'VIDEO BIN'

    },

    {
      profesor: 'DIEGO PALMIERI',
      horaInicio: '8:45 a.m.',
      horaFin: '10:12 p.m.',
      fecha: '9/10/2023',
      recurso: 'LAPTOP'

    },

    {
      profesor: 'HORACIO HERNANDEZ',
      horaInicio: '8:43 a.m.',
      horaFin: '10:34 p.m.',
      fecha: '9/10/2023',
      recurso: 'VGA'

    },
    {
      profesor: 'ANDRES ESCOBAR',
      horaInicio: '8:54 a.m.',
      horaFin: '10:34 p.m.',
      fecha: '9/10/2023',
      recurso: 'HDMI',

    }

  ]

  ngOnInit(): void {
    this.getData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getData() {
    this.dataSource = new MatTableDataSource(this.tablaInfo);
    console.table(this.tablaInfo);
  }
}
