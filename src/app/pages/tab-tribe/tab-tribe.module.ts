import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Tab4Page } from './tab-tribe.page';
import { RouterModule } from '@angular/router';
import { TribeDetailModule } from 'src/app/component/tribe-detail/tribe-detail.module';
import { ArticleModule } from 'src/app/component/article/article.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    TribeDetailModule,
    ArticleModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
