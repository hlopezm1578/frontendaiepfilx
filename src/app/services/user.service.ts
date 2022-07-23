import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { userToken, Usuario } from '../interfaces/interfaces';


const url = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarioLogueado:boolean=false;
  token:any;
  userName:string="";
  userRole:string="";
  userId:string="";
  menuItems:any[] = [
    {
      url:'home',
      text:'Home',
      icon:'bi-house'
    },
  ];

  constructor(private http:HttpClient,private router:Router) { }


async create(usuario:Usuario){
  return new Promise(resolve=>{
    this.http.post<userToken>(`${url}/user`,usuario)
    .subscribe(resp=>{
      console.log(resp);
      if(resp.ok){
        this.guardarToken(resp.token);
          this.leerToken();
          resolve(true);
      }else{
        this.borraToken();
          resolve(false);
      }
    })
  })
}

 async login(usuario : Usuario){
    return new Promise(resolve=>{
      this.http.post<userToken>(`${url}/user/login`,usuario)
      .subscribe(resp=>{
        console.log(resp);
        if(resp.ok){
          this.guardarToken(resp.token);
          this.leerToken();
          this.setMenuItems();
          resolve(true);
        }else{
          this.borraToken();
          this.setMenuItems();
          resolve(false);
        }
      });
    })

  }

  guardarToken(token:string){
    localStorage.setItem("token",token);
    this.token = token;
    this.usuarioLogueado = true;
  }

  borraToken(){
    localStorage.removeItem("token");
  }

  cargarToken(){
    var tokenString = localStorage.getItem("token")?.toString();
    this.token = tokenString;
    if(this.token){
      this.usuarioLogueado=true;
      this.leerToken();
      this.setMenuItems();
    }
  }

  leerToken(){
    let jwt = this.token;
    let jwtData = jwt.split('.')[1];
    let decodeJSONJwtData = window.atob(jwtData);
    let decodeJwtData = JSON.parse(decodeJSONJwtData);
    console.log(decodeJwtData);
    this.userName = decodeJwtData.user.name;
    this.userRole =  decodeJwtData.user.role;
    this.userId = decodeJwtData.user._id;
  }

  logout(){
    this.borraToken();
    this.usuarioLogueado=false;
    this.userName="";
    this.userRole="";
    this.setMenuItems();
  }

  async validarUsuario():Promise<boolean>{
    this.cargarToken();
    if(!this.token){
      this.router.navigate(['/login']);
      return Promise.resolve(false);
    }
    else{
      return Promise.resolve(true);
    }
  }

  setMenuItems(){
    if(this.usuarioLogueado){
      this.menuItems = [];
      this.menuItems.push(
        {
          url:'home',
          text:'Home',
          icon:'bi-house'
        },
        {
          url:'about',
          text:'About',
          icon:'bi-umbrella'
        },
        {
          url:'contact',
          text:'Contact',
          icon:'bi-telephone'
        }
      );
      
      if(this.userRole=='administrador'){
        this.menuItems.push(
          {
            url:'mantpeliculas',
            text:'Mantenedor de peliculas',
            icon:'bi-film'
          }
          ,
          {
            url:'mantenedor-generos',
            text:'Mantenedor de generos',
            icon:'bi-camera-reels'
          },
          {
            url:'mantenedor-actores',
            text:'Mantenedor de Actores',
            icon:'bi-person-video2'
          },
        );
      }

    }else{
      this.menuItems = [];
      this.menuItems.push(
        {
          url:'home',
          text:'Home',
          icon:'bi-house'
        },
      )
    }
  }

 
  isAdmin(){
    return this.http.get(`${url}/user/checkadmin`);
  }

}
