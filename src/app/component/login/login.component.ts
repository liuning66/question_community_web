import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';
import { BaseuiService } from 'src/app/service/baseui.service';
import { HttpService } from 'src/app/service/http.service';
import { User } from 'src/app/model/user';
import { HTTPUrl } from 'src/app/model/http';
import { LoginResult } from 'src/app/model/login_result';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  showPwd = false;
  submit = false; // 防止用户多次点击登录
  constructor(private storage: StorageService,
    private router: Router,
    private baseui: BaseuiService,
    private http: HttpService,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  isShowPwd() {
    this.showPwd = !this.showPwd;
  }

  async login() {
    if (this.username.length === 0 || this.username == null) {
      this.baseui.showWarningToast('用户名不能为空！');
      return;
    } else if (this.username.length > 0 && this.username.length < 5) {
      this.baseui.showWarningToast('用户名不能少于5位！');
      return;
    }
    if (this.password.length === 0 || this.password == null) {
      this.baseui.showWarningToast('密码不能为空！');
      return;
    }
    this.submit = true;
    const param = {
      username: this.username,
      password: this.password
    };

    const loading = await this.baseui.showLoading('正在登录中...');
    this.http.post<LoginResult<User>>(HTTPUrl.LOGIN, param, {
      success: (res: LoginResult<User>) => {
        loading.dismiss();
        if (res.code === 200) {
          this.storage.set('token', res.record.token);
          this.storage.set('user', JSON.stringify(res.record));
          this.modalController.dismiss();
        } else {
          this.baseui.showErrorToast(res.msg);
        }
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
      complete: () => {
        this.submit = false;
      }
    });
  }

  /**
   * 跳转到注册界面
  */
  async goToRegisterPage() {
    const modal = await this.modalController.create({
      component: RegisterComponent,
    });

    await modal.present();

  }
}

