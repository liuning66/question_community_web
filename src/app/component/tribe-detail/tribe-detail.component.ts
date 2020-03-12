import { Component, OnInit, Input } from '@angular/core';
import { ArticleInfo } from 'src/app/model/article-info';
import { HttpService } from 'src/app/service/http.service';
import { ModalController } from '@ionic/angular';
import { BaseuiService } from 'src/app/service/baseui.service';
import { ArticleDetail } from 'src/app/model/article-detail';
import { HTTPUrl } from 'src/app/model/http';
import { QuestionComment } from 'src/app/model/question-comment';
import { QuestionCommentComponent } from '../question-comment/question-comment.component';
import { Result } from 'src/app/model/result';

@Component({
  selector: 'app-tribe-detail',
  templateUrl: './tribe-detail.component.html',
  styleUrls: ['./tribe-detail.component.scss'],
})
export class TribeDetailComponent implements OnInit {
  @Input() userId: string;
  @Input() articleId: string;
  articleInfo: ArticleInfo = new ArticleInfo();
  comments: Array<QuestionComment> = [];
  approvalBtn = false;
  disapprovalBtn = false;
  disabledArr: Array<string> = [];
  constructor(private http: HttpService, private modalController: ModalController, private baseui: BaseuiService) { }

  ngOnInit() {
    this.requestArticleInfo();
  }
  ionViewWillEnter() {
    this.requestArticleInfo();
  }
  requestArticleInfo() {
    const param = {
      articleId: this.articleId,
      userId: this.userId
    };
    this.http.post<ArticleDetail>(HTTPUrl.GET_ARTICLE_DETAIL, param, {
      success: (res: ArticleDetail) => {
        console.log(res);
        this.articleInfo = res.articleInfo;
        this.comments = res.comments;
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

  /**
   * 前往评论页面
   */
  async goToCommentPage() {
    const modal = await this.modalController.create({
      component: QuestionCommentComponent,
      componentProps: {
        questionId: this.articleId,
        userId: this.userId,
        type: 1
      }
    });
    modal.onDidDismiss().then(() => {
      this.requestArticleInfo();
    });
    await modal.present();
  }

  /**
   * 时间格式转换
   */
  dateParse(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString().replace(/\//g, '-');
  }

  approval(commentId: string) {
    const param = {
      userId: this.userId,
      commentId,
      type: 1
    };
    this.http.post<Result>(HTTPUrl.OPERATE_COMMENT, param, {
      success: (res: Result) => {
        if (res.status === 200) {
          this.requestArticleInfo();
          this.disabledArr = [...this.disabledArr, commentId];
          console.log(this.disabledArr);
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => { }
    });
  }

  disApproval(commentId: string) {
    const param = {
      userId: this.userId,
      commentId,
      type: 2
    };
    this.http.post<Result>(HTTPUrl.OPERATE_COMMENT, param, {
      success: (res: Result) => {
        if (res.status === 200) {
          this.requestArticleInfo();
          this.disabledArr = [...this.disabledArr, commentId];
          console.log(this.disabledArr);
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => { }
    });
  }

}
