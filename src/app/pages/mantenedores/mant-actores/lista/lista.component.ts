import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  searchText:string="";
  sortIcon:string="";
  actores:any[]=[];
  pages:any[]=[];
  page:number=1;

  constructor() { }

  ngOnInit(): void {
  }

  searchActor(){

  }

  clearSearch(){

  }

  toogleSort(){

  }
  eliminarActor(actor:any){

  }

  clickBack(){

  }

  clickPage(page:number){

  }

  clickNext(){
    
  }

}
