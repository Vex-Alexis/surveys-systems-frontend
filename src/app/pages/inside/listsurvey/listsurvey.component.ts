import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-listsurvey',
  templateUrl: './listsurvey.component.html',
  styleUrls: ['./listsurvey.component.css']
})
export class ListsurveyComponent {
  displayedColumns: string[] = ['id', 'cedula', 'correo', 'comentario', 'marcaPC', 'fecha', 'eliminar'];
  dataSource = new MatTableDataSource<ListSurveys>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteSurvey(id: number) {
    console.log(`Eliminar encuesta con ID ${id}`);
}
}

export interface ListSurveys {
  id: number;
  cedula: string;
  correo: string;
  comentario: string;
  marcaPC: string;
  fecha: string;
}

const ELEMENT_DATA: ListSurveys[] = [
  { id: 1, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 2, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 3, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 4, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 5, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 6, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 7, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 8, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 9, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 10, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 11, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 12, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 13, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 14, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
  { id: 15, cedula: '123456789', correo: 'ejemplo@mail.com', comentario: 'Comentario 1', marcaPC: 'Marca 1', fecha: '2023-01-01' },
];