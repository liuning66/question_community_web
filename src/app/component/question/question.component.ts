import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { BaseuiService } from 'src/app/service/baseui.service';
import { HttpService } from 'src/app/service/http.service';
import { Result } from 'src/app/model/result';
import { HTTPUrl } from 'src/app/model/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  title = '';
  content = '';
  userId: string;
  constructor(private modalController: ModalController,
    private userService: UserService,
    private baseui: BaseuiService,
    private http: HttpService) { }

  async ngOnInit() {
    this.userId = await this.userService.getUserId();
  }

  /**
   * 提交问题
   */
  submit() {
    console.log(this.userId);
    console.log(this.title);
    console.log(this.content);
    if (this.title == null || this.title.length <= 0) {
      this.baseui.showWarningToast('问题标题不能为空!');
      return;
    } else if (this.content == null || this.content.length <= 0) {
      this.baseui.showWarningToast('问题内容不能为空!');
      return;
    }

    const param = {
      userId: this.userId,
      title: this.title,
      content: this.content
    };
    this.http.post<Result>(HTTPUrl.PUBLISH_QUESTION, param, {
      success: (res: Result) => {
        if (res.status === 200) {
          this.baseui.showSuccessToast('提问成功!');
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
  dismiss() {
    this.modalController.dismiss();
  }
}
