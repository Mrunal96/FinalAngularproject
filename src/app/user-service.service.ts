import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }
  public doRegistration(user : User){
    return this.http.post("http://localhost:8080/save-user",user, {responseType : "text" as "json"});
  }
  public getUsers(){
    return this.http.get("http://localhost:8080/all-users");
  }
  public getUserByProjectname(cognizantemployeeid : any){
    return this.http.get("http://localhost:8080/find-users/"+cognizantemployeeid);
  }
  
  public removeUser(cognizantemployeeid : number){
    return this.http.get("http://localhost:8080/delete-user/"+cognizantemployeeid);
  }
  public updateUser(user : User){
    return this.http.put("http://localhost:8080/update",user);
  }
}
