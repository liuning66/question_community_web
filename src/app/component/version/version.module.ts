import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionRoutingModule } from './version-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VersionComponent } from './version.component';


@NgModule({
  declarations: [VersionComponent],
  imports: [
    CommonModule,
    VersionRoutingModule,
    FormsModule,
    IonicModule
  ],
  bootstrap: [VersionComponent]
})
export class VersionModule { }
