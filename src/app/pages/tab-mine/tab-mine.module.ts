import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab-mine-routing.module';

import { Tab5Page } from './tab-mine.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
