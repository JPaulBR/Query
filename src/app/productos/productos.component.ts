import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductosComponent implements OnInit {

  
  listData: any;
  dataWrite:string;
  indexData:number;
  constructor(private modalService: NgbModal, private http:HttpClient) { }

  ngOnInit(): void {
    
    var url = "localhost:3000/getProductos";
    this.http.get<any>(url).subscribe(res=>{
      console.log(res);
    })
  }

  openPopup(index:number,content){
    this.modalService.open(content, { centered: true,size: 'lg'  });
    this.indexData = index;
  }

  modelChange(event){
    console.log(this.dataWrite);
    //realizar la búsqueda directo desde la base de datos
  }

}
