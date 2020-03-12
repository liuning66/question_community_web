import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';
import { BaseuiService } from 'src/app/service/baseui.service';
import { Result } from 'src/app/model/result';
import { HTTPUrl } from 'src/app/model/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articleTitle: string;
  articleContent: string;
  userId: string;
  constructor(private modalController: ModalController,
    private http: HttpService,
    private userService: UserService,
    private baseui: BaseuiService) { }

  async ngOnInit() {
    this.userId = await this.userService.getUserId();
  }




  submit() {
    if (this.articleTitle == null || this.articleTitle.length <= 0) {
      this.baseui.showWarningToast('文章标题不能为空!');
      return;
    } else if (this.articleContent == null || this.articleContent.length <= 0) {
      this.baseui.showWarningToast('文章内容不能为空!');
      return;
    }

    const param = {
      userId: this.userId,
      title: this.articleTitle,
      content: this.articleContent
    };
    this.http.post<Result>(HTTPUrl.PUBLISH_ARTICLE, param, {
      success: (res: Result) => {
        if (res.status === 200) {
          this.baseui.showSuccessToast('发表成功!');
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
