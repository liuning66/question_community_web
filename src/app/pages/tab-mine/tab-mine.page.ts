import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';
import { NavController, ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/component/login/login.component';
import { UserCenterComponent } from 'src/app/component/user-center/user-center.component';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab-mine.page.html',
  styleUrls: ['./tab-mine.page.scss'],
})
export class Tab5Page implements OnInit {
  isLogin = false; // 是否登录
  user: User = null;
  constructor(private storage: StorageService, private navController: NavController, private modalController: ModalController) {
  }

  ngOnInit() {
    this.loadUserInfo();
  }

  /**
   * 采用 modal 弹框的形式 解决 登录过程中因为异步导致的不同步问题
   */
  async goToLoginPage() {
    const modal = await this.modalController.create({
      component: LoginComponent
    });
    modal.onDidDismiss().then(() => {
      this.loadUserInfo();
    });
    await modal.present();
  }
  /**
   *  跳转到 个人中心
   */
  async goToUserCenter() {
    const modal = await this.modalController.create({
      component: UserCenterComponent
    });
    modal.onDidDismiss().then(()=>{
      this.loadUserInfo();
    })
    await modal.present();
  }
  /**
   * 加载用户信息
   */
  async loadUserInfo() {
    this.user = JSON.parse(await this.storage.get('user'));
    if (this.user) {
      console.log(this.user);
      this.isLogin = true;
    }
  }
  
}
