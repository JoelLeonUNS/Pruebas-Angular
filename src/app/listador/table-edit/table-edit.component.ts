import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CreatorRowsService } from 'src/app/services/creacion-listas/servicios/creator-rows.service';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})

export class TableEditComponent implements OnInit {
  i = 0;
  editId: string | null = null;

  constructor(private nzMessageService: NzMessageService, public crs:CreatorRowsService) {}

  addRow(): void {
    this.crs.listOfData = [...this.crs.listOfData];
    this.i++;
  }

  ngOnInit(): void {
    this.addRow();
  }
  
  cancel(): void {
    this.nzMessageService.info('Cancelado');
  }

  confirm(id:String): void {
    this.crs.deleteDataRow(id);
    this.crs.actualizarIndice();
    this.nzMessageService.info('Eliminado');
  }
}
