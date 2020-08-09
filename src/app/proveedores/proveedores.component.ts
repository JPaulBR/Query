import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProveedoresComponent implements OnInit {

  listData = [
    {dato0:"dato0",dato1:"dato1",dato2:"dato2"},
    {dato0:"dato3",dato1:"dato4",dato2:"dato5"},
    {dato0:"dato6",dato1:"dato7",dato2:"dato8"}
  ];
  dataWrite:string;
  indexData:number;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openPopup(index:number,content){
    this.modalService.open(content, { centered: true });
    this.indexData = index;
  }

  modelChange(event){
    console.log(this.dataWrite);
    //realizar la búsqueda directo desde la base de datos
  }

}
