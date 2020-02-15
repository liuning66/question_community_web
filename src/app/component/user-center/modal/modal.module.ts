import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateNicknameComponent } from './update-nickname/update-nickname.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UpdateNicknameComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  bootstrap: [UpdateNicknameComponent]
})
export class ModalModule { }
