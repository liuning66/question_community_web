import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from '../register/register.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule,
    RegisterModule
  ]
})
export class LoginModule { }
