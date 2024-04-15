import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  myform:FormGroup  

  constructor(private router:Router,private httpclient: HttpClient,private roleService : RoleService){
    this.myform = new FormGroup({

      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
      contactNum:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      state:new FormControl("",Validators.required),
      city:new FormControl("",Validators.required),
      pincode:new FormControl("",Validators.required),
      role:new FormControl("",Validators.required),


    })
  }

  Signup()
  {
    
    console.log("in the signup");
    
    console.log(this.myform.valid);
    console.log(this.myform.errors);
    console.log(this.myform.value);
     
    if(this.myform.valid){
      //console.log("hiii");
      
    const data = this.myform.value
    console.log(data);
    

    this.httpclient.post("http://localhost:9999/signup",data).subscribe(resp=>{
      console.log(resp);

     
      
    },err=>{
      console.log(err);
      
    })

  
    this.router.navigateByUrl('/login')
  }
  else
  {
    this.myform.markAllAsTouched();
  }

  }

}
