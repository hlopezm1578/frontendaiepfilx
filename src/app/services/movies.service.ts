import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult, Pelicula, PeliculasResponse } from '../interfaces/interfaces';

const url = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getDataMovies(){
    return this.http.get<ApiResult>('https://www.omdbapi.com/?s=star&apikey=ee6588a8');
  }

  searchDataMovie(text:string){
    return this.http.get<ApiResult>(`https://www.omdbapi.com/?s=${text}&apikey=ee6588a8`);
  }

  getDataMoviesLocal()
  {
    return this.http.get("https://localhost:7061/movies")
  }

  getDataPeliculas(){
    return this.http.get<PeliculasResponse>(`${url}/peliculas`);
  }

  postPelicula(pelicula:Pelicula){
    return this.http.post(`${url}/peliculas`,pelicula);
  }


}
