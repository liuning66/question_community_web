import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './user-center-tab.page.html',
  styleUrls: ['./user-center-tab.page.scss'],
})
export class Tab5Page implements OnInit {
  isLogin = false; // 是否登录
  user: User = null;
  constructor(private storage: StorageService) { }

  async ngOnInit() {
    this.user = JSON.parse(await this.storage.get('user'));
    if(this.user) {
      this.isLogin = true;
    }
  }

}
