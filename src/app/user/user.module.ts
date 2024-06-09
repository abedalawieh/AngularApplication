import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {MatCardModule} from '@angular/material/card'
import { FlexModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,RouterModule
  ]
})
export class UserModule { }
