import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  projectname : string = "";
  user : any;
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
  }
  public findUserbyProjectname(){
    let response = this.service.getUserByProjectname(this.projectname);
    response.subscribe(data => this.user = data);
  }

}
