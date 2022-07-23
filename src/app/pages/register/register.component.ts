import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario:Usuario = {};
  error:boolean = false;
  errorMsj: string ="";

  constructor(private fb:FormBuilder,
    private service:UserService,
    private router:Router) { }

    registerForm:FormGroup = this.fb.group({
      "name" : new FormControl(null,Validators.required),
      "email" : new FormControl(null,Validators.compose([Validators.required,Validators.email])),
      "password" : new FormControl(null,Validators.required)
    })

  ngOnInit(): void {
  }

  async submitForm(){
    console.log("Form submited");
    if(this.registerForm.valid){
      this.usuario.name = this.name?.value;
      this.usuario.email = this.email?.value;
      this.usuario.password = this.password?.value;

     const result = await this.service.create(this.usuario);
      if(result){
        this.router.navigate(["/home"]);
      }else{
          this.error = true;
          this.errorMsj = "El usuario o contraseña son invalidos"
      }
  
    }

  }

  get email(){
    return  this.registerForm.get("email");
  }

  get password(){
    return  this.registerForm.get("password");
  }

  get name(){
    return  this.registerForm.get("name");
  }

}
