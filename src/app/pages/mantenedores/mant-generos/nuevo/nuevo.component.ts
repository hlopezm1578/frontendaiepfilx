import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genero } from 'src/app/interfaces/interfaces';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:GenerosService, private router:Router) { }

  nuevoGenero:Genero = {}

  generoForm : FormGroup = this.fb.group({
    "name" : new FormControl('',Validators.required)
  });


  ngOnInit(): void {
  }

  submitForm(){
    if(this.generoForm.valid){
      this.nuevoGenero.name = this.name?.value;
      this.service.guardarGenero(this.nuevoGenero).subscribe((resp:any)=>{
         if(resp.ok){
            this.router.navigate(['/mantenedor-generos']);
         }
      })
    }
  }

 get name(){
    return this.generoForm.get('name');
  }

  

}
