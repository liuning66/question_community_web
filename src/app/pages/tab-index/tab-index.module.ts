import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab-index.page';
import { QuestionModule } from 'src/app/component/question/question.module';
import { QuestionDetailModule } from 'src/app/component/question-detail/question-detail.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    QuestionModule,
    QuestionDetailModule
  ],
  declarations: [Tab1Page],

})
export class Tab1PageModule { }
