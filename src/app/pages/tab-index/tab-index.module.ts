import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab-index.page';
import { QuestionComponent } from 'src/app/component/question/question.component';
import { QuestionModule } from 'src/app/component/question/question.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    QuestionModule,
  ],
  declarations: [Tab1Page],
  entryComponents: [QuestionComponent]
})
export class Tab1PageModule { }
