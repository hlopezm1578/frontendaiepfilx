import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/services/file.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

const URL = environment.URL;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private userService:UserService, private fb:FormBuilder, private fileService:FileService) { }

  actorForm:FormGroup = this.fb.group({
    "name":new FormControl('',Validators.required),
    "dateOfBirth": new FormControl('',Validators.required),
    "biography": new FormControl(''),
    "image": new FormControl('',Validators.required)
  });

  imgUrl:string="";

  ngOnInit(): void {
  }

  get name(){
    return this.actorForm.get('name');
  }
  get dateOfBirth(){
    return this.actorForm.get('dateOfBirth');
  }
  get biography(){
    return this.actorForm.get('biography');
  }
  get image(){
    return this.actorForm.get('image');
  }

  submitForm(){}

  uploadFile(event:any){
    console.log(event.target.files);
    if(event.target.files.length>0){
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image',file);
      this.fileService.uploadFile(formData).subscribe((resp:any)=>{
        console.log(resp);
        this.imgUrl = `${URL}/files/tempimagen/${this.userService.userId}/${resp.file}`
      })
    }
  }

}
