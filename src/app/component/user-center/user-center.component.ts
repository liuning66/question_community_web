import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';
import { ModalController } from '@ionic/angular';
import { UpdateNicknameComponent } from './modal/update-nickname/update-nickname.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
})
export class UserCenterComponent implements OnInit {
  user: User = new User();
  constructor(private storage: StorageService, private modalController: ModalController) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async loadUserInfo() {
    this.user = JSON.parse(await this.storage.get('user'));
  }

  async updateNickName() {
    const modal = await this.modalController.create({
      component: UpdateNicknameComponent,
      componentProps: {
        id: this.user.id,
        nickname: this.user.nickname
      }
    });
    modal.onDidDismiss().then(() => {
      this.loadUserInfo();
    });
    await modal.present();
  }

 
}
