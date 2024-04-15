import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { CategoryService } from '../category.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent {


  apiResponse:any = {}
  Categories:Array<any> = []

  constructor(private httpclient:HttpClient,private categoryservice:CategoryService,private router:Router,private toaster :ToastrService){
    this.getAllCategory()
  }

  getAllCategory(){

    this.categoryservice.getAllCategory().subscribe((resp)=>{

        this.apiResponse = resp
        //console.log(this.apiResponse.data);
        this.Categories=this.apiResponse.data
        

    },err=>{
      console.log(err);
      
    })
  }

  updateCategory(CategoryId:string){


    this.router.navigateByUrl('/updatecategory/'+CategoryId)

  }

  deleteCategory(CategoryId:string){
    
    this.categoryservice.deleteCategory(CategoryId).subscribe((resp)=>{
      console.log(resp);
      this.apiResponse = resp;
      if(this.apiResponse.rcode == 200)
      {
        this.toaster.warning('','Category Deleted',{timeOut:3000})
        this.getAllCategory();
      }
      
    },(err)=>{
      console.log(err);
      
    })

  }
}
