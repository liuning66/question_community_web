import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribeDetailRoutingModule } from './tribe-detail-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TribeDetailComponent } from './tribe-detail.component';
import { QuestionCommentModule } from '../question-comment/question-comment.module';


@NgModule({
  declarations: [TribeDetailComponent],
  imports: [
    CommonModule,
    TribeDetailRoutingModule,
    FormsModule,
    IonicModule,
    QuestionCommentModule
  ],
  bootstrap: [TribeDetailComponent]
})
export class TribeDetailModule { }
