import { Component ,ViewChild} from '@angular/core';

import { UserListComponent } from './user/user-list/user-list.component';
import { FilterService } from './filter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public filterService: FilterService){}
  title = 'angular-task';
  @ViewChild(UserListComponent) userListComponent!: UserListComponent;


 
}
