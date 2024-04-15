import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  selectedRole:string = ""
  constructor() { }

  setSelectedRole(role: string) {
    this.selectedRole = role;
  }

  getSelectedRole() {
    return this.selectedRole;
  }

  onRoleSelect(role: string) {
    this.setSelectedRole(role);
  } 
}
