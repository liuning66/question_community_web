import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab-mine.page.html',
  styleUrls: ['./tab-mine.page.scss'],
})
export class Tab5Page implements OnInit {
  isLogin = false; // 是否登录
  user: User = null;
  constructor(private storage: StorageService, private navController: NavController) {
  }

  async ngOnInit() {

    this.user = JSON.parse(await this.storage.get('user'));
    if (this.user) {
      console.log(this.user);
      this.isLogin = true;
    }
  }


}
