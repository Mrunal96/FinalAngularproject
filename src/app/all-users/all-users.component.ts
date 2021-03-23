import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit {

  users : any;
  usersToUpdate ={
    email : "",
    projectname:"",
    managername:"",
    id:0,
    location:""
  };
  
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    let response = this.service.getUsers();
  response.subscribe(data => this.users = data);
  }
  public removeUser(projectname : string){
    let response = this.service.removeUser(projectname);
    response.subscribe(data => this.users = data);
  }
  edit(user : any){
    this.usersToUpdate = user;
  }
  updateUser(){
    this.service.doRegistration(this.usersToUpdate).subscribe((data)=>console.log(data));
    //let response =  this.service.doRegistration(this.usersToUpdate);
    //response.subscribe(data => {
     // this.users = data;
   // });
  }
}
