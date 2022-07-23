import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : any[] = [
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
      url:'contact',
      text:'Contact',
      icon:'bi-telephone'
    }
  ];

  constructor(public userService:UserService) { }

  ngOnInit(): void {
   
  }

}
