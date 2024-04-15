import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"user",component:UserComponent},
  {path:"admin",component:AdminComponent},
  {path:"addcategory",component:AddCategoryComponent},
  {path:"allcategories",component:AllCategoryComponent},
  {path:"updatecategory/:CategoryId",component:UpdateCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
