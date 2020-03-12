import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';
import { NavController, ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/component/login/login.component';
import { UserCenterComponent } from 'src/app/component/user-center/user-center.component';
import { QrScannerComponent } from 'src/app/component/qr-scanner/qr-scanner.component';
import { GeneralListComponent } from 'src/app/component/general-list/general-list.component';
import { VersionComponent } from 'src/app/component/version/version.component';
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
      this.isLogin = false;
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
    modal.onDidDismiss().then(() => {
      this.loadUserInfo();
    });
    await modal.present();
  }
  /**
   * 加载用户信息
   */
  async loadUserInfo() {
    this.user = JSON.parse(await this.storage.get('user'));
    if (this.user) {
      this.isLogin = true;
    }
  }

  /**
   * 退出登录
   */
  reLogin() {
    this.storage.clear().then(() => {
      this.goToLoginPage();
    });
  }
  /**
   * 前往二维码扫描页面
   */
  async goToQrScanner() {
    const modal = await this.modalController.create({
      component: QrScannerComponent,
      animated: false
    });
    await modal.present();
  }
  /**
   * 前往相应的页面
   * @param 1 我的提问  2 我的文章 3 我的收藏 4 我的关注
   */
  async goToGeneralList(type: number) {
    const modal = await this.modalController.create({
      component: GeneralListComponent,
      componentProps: {
        type,
        userId: this.user.id
      }
    });

    await modal.present();
  }

  /**
   * 前往关于页面
   */
  async goToVersionPage() {
    const modal = await this.modalController.create({
      component: VersionComponent,
    });
    await modal.present();
  }
}
