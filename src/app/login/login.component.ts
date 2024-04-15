import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apiResponse : any = {}
  myform:FormGroup  

  constructor(private router:Router,private httpclient: HttpClient,private roleService : RoleService){
    this.myform = new FormGroup({

    
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)])

    })
    
  }

  login(){

    const data = this.myform.value
    console.log(data);
    

      this.httpclient.post("http://localhost:9999/login",data).subscribe(resp=>{

      this.apiResponse = resp
    
      if(this.apiResponse.data.role == 'Student')
      this.router.navigateByUrl('/user')
      else if (this.apiResponse.data.role == 'Admin')
      this.router.navigateByUrl('/admin')
      

    },err=>{
      console.log(err);
      
    })


  }

  
}
