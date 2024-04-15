import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient :HttpClient){ }


  addCategory(body:any):Observable<any>{


    return this.httpclient.post('http://localhost:9999/addcategory',body);
  }
  
  getAllCategory():Observable<any>{

    return this.httpclient.get('http://localhost:9999/allcategory')
  
  }
  
  deleteCategory(CategoryId:string):Observable<any>{
  
    return this.httpclient.delete('http://localhost:9999/deletecategory/'+CategoryId)

  }
  updateCategory(CategoryId:string,json:any):Observable<any>{
  
    return this.httpclient.put('http://localhost:9999/updatecategory/'+CategoryId,json)
  }
}

