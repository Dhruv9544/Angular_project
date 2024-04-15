import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  myform:FormGroup
  data:any = {}
  constructor(private categoryservice:CategoryService,private httpclient:HttpClient,private router : Router,private toaster :ToastrService){

    this.myform = new FormGroup({

        CategoryName: new FormControl("",Validators.required)

    })
  }


  addCategory(){

    console.log(this.myform.value.CategoryName);
    
    let body = {
      CategoryName : this.myform.value.CategoryName
    }



    this.categoryservice.addCategory(body).subscribe((resp)=>{

      this.data = resp

      if(this.data.rcode == 200)
      {
        this.toaster.success('','Category Added',{timeOut:3000})
        this.router.navigateByUrl('/allcategories')
      }
     
        
    })
  }

  


}
