import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogueado:boolean=false;
  nombreUsuario:string="";
  rolUsuario:string="";

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.cargarToken();
    this.usuarioLogueado = this.userService.usuarioLogueado;
    this.nombreUsuario = this.userService.userName;
    this.rolUsuario = this.userService.userRole;
  }

  logout(){
    this.userService.logout();
    this.router.navigate(["/login"]);

  }

}
