import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HTTPUrl } from 'src/app/model/http';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';
import { LoginResult } from 'src/app/model/login_result';
import { User } from 'src/app/model/user';
import { BaseuiService } from 'src/app/service/baseui.service';

@Component({
  selector: 'app-update-nickname',
  templateUrl: './update-nickname.component.html',
  styleUrls: ['./update-nickname.component.scss'],
})
export class UpdateNicknameComponent implements OnInit {
  @Input("id") id: string; 
  @Input("nickname") nickname: string;
  submit = false;
  constructor(private http: HttpService, private storage: StorageService, private baseui: BaseuiService,
    private modalController: ModalController) { }


  ngOnInit() {
    console.log(this.nickname);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  update() {
    this.http.post<LoginResult<User>>(HTTPUrl.UPDATE_NICKNAME, {
      id: this.id,
      nickname: this.nickname
    }, {
      success: (res: LoginResult<User>) => {
        console.log(res);
        if (res.code === 200) {
          this.storage.remove('user').then(() => {
            this.storage.set('user', JSON.stringify(res.record));
          });
          this.baseui.showSuccessToast('修改成功！');
          this.modalController.dismiss();
        } else {
          this.baseui.showErrorToast(res.msg);
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => { }
    });
  }

}
