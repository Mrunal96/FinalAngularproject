import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit {

  users : any;
  status: string;
  usersToUpdate ={
    cognizantemployeeid  :  0,
    employeename         :  "",
    dukeenergylanid      :  0,
    dukeenergyemployeeid :  0,
    projectid            :  0,
    projectname          :  "",
    offshoremanagername  :  "",
    onsitemanagername    :  "",
    status               :  "",
    dateonboarded        :  new Date(),
    dateoffboarded       :  new Date(),
    phonenumber          :  0,
    onsiteoffshore       :  "",
    location             :  ""
   /* email : "",
    projectname:"",
    managername:"",
    id:0,
    location:""*/
    
  };
  
 
  
  constructor(private service : UserServiceService) {this.status=""}
  
  ngOnInit(): void {
    let response = this.service.getUsers();
  response.subscribe(data => this.users = data);
  }
  public removeUser(cognizantemployeeid : number){
    let response = this.service.removeUser(cognizantemployeeid);
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
