import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab-mine-routing.module';

import { Tab5Page } from './tab-mine.page';
import { IonicStorageModule } from '@ionic/storage';
import { LoginComponent } from 'src/app/component/login/login.component';
import { LoginModule } from 'src/app/component/login/login.module';
import { UserCenterComponent } from 'src/app/component/user-center/user-center.component';
import { UserCenterModule } from 'src/app/component/user-center/user-center.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    IonicStorageModule.forRoot(),
    LoginModule,
    UserCenterModule
  ],
  declarations: [Tab5Page],
  entryComponents: [LoginComponent, UserCenterComponent]
})
export class Tab5PageModule { }
