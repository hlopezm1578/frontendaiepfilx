import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/services/generos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  generos:any[]=[];
  pages:any[]=[];
  page:number = 1;
  totalPages:number=1;
  sortIcon:string='bi-sort-up';
  sort:string='asc';
  searchText:string="";

  constructor(private generoService:GenerosService) { }

  ngOnInit(): void {
   this.loadGeneros();
  }

  clickPage(page:number){
    this.page = page;
    //console.log(page);
    this.loadGeneros();

  }

  clickBack(){
    if(this.page>1){
      this.page = this.page-1;
      this.loadGeneros();
    }
  }

  clickNext(){
    if(this.page<this.totalPages){
      this.page = this.page+1;
      this.loadGeneros();
    }
  }

  loadGeneros(){
    this.generoService.getGeneros(this.page,this.sort).subscribe((resp:any)=>{
      //console.log(resp);
      this.generos = resp.generos;
      this.pages = Array.from(Array(resp.totalPages).keys());
      this.totalPages = resp.totalPages;
    })
  }

  toogleSort(){
    if(this.sort=='asc'){
      this.sort='desc';
      this.sortIcon='bi-sort-down';
      this.loadGeneros();
    }else{
      this.sort='asc'
      this.sortIcon='bi-sort-up';
      this.loadGeneros();
    }
  }

  searchGenero(){
    if(this.searchText.length>2){
      //console.log(this.searchText);
      this.generoService.searchGenero(this.searchText).subscribe((resp:any)=>{
        //console.log(resp);
        this.generos = resp.generos
      })
    }else{
      this.loadGeneros();
    }

  }

  clearSearch(){
    this.loadGeneros();
  }

  eliminarGenero(genero:any){
    Swal.fire({
      title: '¿Esta seguro de eliminar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor:'#c40e0e',
      cancelButtonText:'Cancelar'
    }).then((result=>{
      if (result.isConfirmed) {
        console.log(genero._id)
        this.generoService.deleteGenero(genero._id).subscribe((resp:any)=>{
          if(resp.ok){
            this.loadGeneros();
          }
        })
      }
    }))
  }

}
