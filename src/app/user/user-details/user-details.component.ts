import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class 
UserDetailsComponent implements OnInit{
  user:User={
    id:0,
    email:"",
    first_name:"",
    last_name:"",
    avatar:""
  }
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
 async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
   await this.userService.getUser(Number(id)).subscribe(data => {
      this.user = data.data;

    }); 
 }

}
