import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { BaseuiService } from 'src/app/service/baseui.service';
import { HTTPUrl } from 'src/app/model/http';
import { Result } from 'src/app/model/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  nickname = '';
  username = '';
  password = '';
  confirmPassword = '';
  telephone = '';
  email = '';
  submit  = true; // 防止用户多次点击注册按钮
  nicknameExists = false; // 昵称是否存在
  usernameExists = false; // 用户名是否存在
  constructor(private http: HttpService, private baseui: BaseuiService, private router: Router) { }

  ngOnInit() { }

  validate(type: number) {  // 1 代表昵称 2 代表用户名
    const validateStr = type === 1 ? this.nickname : this.username;
    if (type === 2) {
      if (validateStr.length >= 0 && validateStr.length < 5) {
        return;
      }
    } else {
      this.http.post<boolean>(HTTPUrl.VALIDATE_USERNAME, {
        validate: type === 1 ? this.nickname : this.username,
        type
      }, {
        success: (res: boolean) => {
          if (!res) {
            if (type === 1) {
              this.nicknameExists = true;
            } else {
              this.usernameExists = true;
            }
          } else {
            if (type === 1) {
              this.nicknameExists = false;
            } else {
              this.usernameExists = false;
            }
          }
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
        }
      });
    }
  }
  async register() {
    if (this.baseui.isNullString(this.nickname)) {
      await this.baseui.showWarningToast('昵称不能为空!');
      return;
    } else if (this.baseui.isNullString(this.username)) {
      await this.baseui.showWarningToast('用户名不能为空!');
      return;
    } else if (this.username.length > 0 && this.username.length < 5) {
      await this.baseui.showWarningToast('用户名的长度必须在 5 ~ 16 位之间!');
      return;
    } else if (this.baseui.isNullString(this.password)) {
      await this.baseui.showWarningToast('密码不能为空');
      return;
    } else if (this.baseui.isNullString(this.confirmPassword) ||
      (!this.baseui.isNullString(this.confirmPassword) && this.password !== this.confirmPassword)) {
      await this.baseui.showWarningToast('两次输入的密码不一致!');
      return;
    }
    if (this.nicknameExists) {
      await this.baseui.showWarningToast('昵称已存在!');
      return;
    }
    if (this.usernameExists) {
      await this.baseui.showWarningToast('用户名已存在!');
      return;
    }
    const param = {
      username: this.username,
      password: this.password,
      nickname: this.nickname,
      telephone: this.telephone,
      email: this.email
    };
    this.submit = false;
    const loading = await this.baseui.showLoading('注册中,请稍后...');
    this.http.post<Result>(HTTPUrl.REGISTER, param, {
      success: (res: Result) => {
        console.log(res);
        loading.dismiss();
        if (res.status === 200) {
          this.baseui.showSuccessToast('注册成功');
          this.router.navigate(['/login']);
        } else {
          this.baseui.showErrorToast(`注册失败,${res.msg}`);
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.submit = true;
      }
    });
  }
}
