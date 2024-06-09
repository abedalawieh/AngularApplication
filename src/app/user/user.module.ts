import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {MatCardModule} from '@angular/material/card'
import { FlexModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatInputModule
  ]
})
export class UserModule { }
