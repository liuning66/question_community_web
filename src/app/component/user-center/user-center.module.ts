import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterRoutingModule } from './user-center-routing.module';
import { UserCenterComponent } from './user-center.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserCenterComponent],
  imports: [
    CommonModule,
    UserCenterRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class UserCenterModule { }
