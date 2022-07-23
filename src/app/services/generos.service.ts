import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Genero, GeneroReponse } from '../interfaces/interfaces';
import { UserService } from './user.service';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http:HttpClient,private userService:UserService) { }

  getGeneros(page:number,sort:string){

    return this.http.get<GeneroReponse>(`${URL}/generos?page=${page}&sort=${sort}`);
  }

  guardarGenero(genero:Genero){
    return this.http.post(`${URL}/generos`,genero);
  }
  getGeneroById(id:string){
    return this.http.get(`${URL}/generos/byid/${id}`)
  }

  updateGenero(id:string,genero:Genero){
    return this.http.put(`${URL}/generos/${id}`, genero);
  }

  deleteGenero(id:string){
    return this.http.delete(`${URL}/generos?id=${id}`);
  }

  searchGenero(searchtext:string){
    return this.http.get(`${URL}/generos/search?searchtext=${searchtext}`);
  }
}
