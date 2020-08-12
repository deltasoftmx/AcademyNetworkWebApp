import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppComponentsModule } from '../app-components/app-components.module'; //All components that are not views.

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AvailableGroupsComponent } from './available-groups/available-groups.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { UsersComponent } from './users/users.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { UserFeedComponent } from './user-feed/user-feed.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AvailableGroupsComponent,
    MyGroupsComponent,
    UsersComponent,
    FollowersComponent,
    FollowingComponent,
    UserFeedComponent,
  ],
  imports: [
    //MaterialModule,
    AppComponentsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    //MaterialModule,
    AppComponentsModule
  ]
})
export class ViewsModule { }
