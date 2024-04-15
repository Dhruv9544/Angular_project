import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  CategoryId=""
  data:any = {}
  myform:FormGroup
  constructor(private categoryservice:CategoryService,private ar:ActivatedRoute,private httpclient:HttpClient,private router:Router,private toaster :ToastrService){

    this.myform = new FormGroup({

        CategoryName: new FormControl("",Validators.required)

    })
  }

  updateCategory(){

    this.CategoryId = this.ar.snapshot.params["CategoryId"]

    let json = {"CategoryName":this.myform.value.CategoryName}

    this.categoryservice.updateCategory(this.CategoryId,json).subscribe((resp)=>{
        console.log(resp);
        this.data = resp

        if(this.data.rcode == 200)
        {
          this.toaster.success('','Category Added',{timeOut:3000})
          this.router.navigateByUrl('/allcategories')
        }
       
        
      })
    }

  }


