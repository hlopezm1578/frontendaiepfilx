import { Component, OnInit } from '@angular/core';
import { Movie, Pelicula } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieList:Pelicula[]=[];
  textSearch:string ="";
  loading:boolean=false;

  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    // this.service.getDataMovies()
    // .subscribe(resp=>{
    //   console.log(resp.Search)
    //   this.movieList = resp.Search;
    // })

    this.service.getDataPeliculas()
    .subscribe(resp=>{
      console.log(resp);
      if(resp.ok){
        this.movieList = resp.peliculas;
      }
    })
  };

  onClickSearch(){
    // this.loading=true;
    // this.movieList=[];
    // console.log("Click en buscar:"+this.textSearch);
    // setTimeout(() => {
    //   this.service.searchDataMovie(this.textSearch)
    //   .subscribe(resp=>{
    //     this.loading=false;
    //     console.log(resp.Search);
    //     if(resp.Search){
    //       this.movieList=resp.Search;
    //     }else{
    //       this.movieList=[];
    //     }
    //   })
    // }, 3000);

  }

}
