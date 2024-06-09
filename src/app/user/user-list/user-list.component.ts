import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user';
import { FilterService } from 'src/app/filter.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]=[];
  filteredUsers:User[]=[];

  constructor(private userService:UserService, public filterService: FilterService){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.filterService.users = data.data;
      this.filterService.filteredUsers = data.data;
      
    });
  }


 
}
