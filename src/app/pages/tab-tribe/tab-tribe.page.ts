import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/service/http.service';
import { BaseuiService } from 'src/app/service/baseui.service';
import { TribeDetailComponent } from 'src/app/component/tribe-detail/tribe-detail.component';
import { ArticleComponent } from 'src/app/component/article/article.component';
import { ArticleInfo } from 'src/app/model/article-info';
import { HTTPUrl } from 'src/app/model/http';
import { UserService } from 'src/app/service/user.service';
import { Result } from 'src/app/model/result';

@Component({
  selector: 'app-tab-tribe',
  templateUrl: './tab-tribe.page.html',
  styleUrls: ['./tab-tribe.page.scss'],
})
export class Tab4Page {
  userId: string;
  articleInfos: Array<ArticleInfo> = [];
  collectBtn = false;
  approvalBtn = false;
  constructor(private modalController: ModalController,
    private http: HttpService,
    private baseui: BaseuiService,
    private userService: UserService) { }

  async ionViewWillEnter() {
    this.userId = await this.userService.getUserId();
    this.requestArticleInfo();
  }
  requestArticleInfo() {
    const param = {
      userId: this.userId
    }
    this.http.post<Array<ArticleInfo>>(HTTPUrl.GET_ALL_ARTICLE, param, {
      success: (res: Array<ArticleInfo>) => {
        if (res) {
          this.articleInfos = res;
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => { }
    });
  }

  /**
   * 新增文章
   */
  async addArticle() {
    const modal = await this.modalController.create({
      component: ArticleComponent,
      animated: false,
    });
    modal.onDidDismiss().then(() => {
      this.requestArticleInfo();
    })
    await modal.present();
  }

  /**
   * 收藏
   */
  collect(data: ArticleInfo) {
    const param = {
      articleId: data.id,
      userId: this.userId,
      operateType: 1,
      type: data.collection ? 0 : 1
    };
    this.collectBtn = true;
    this.http.post<Result>(HTTPUrl.OPERATE_ARTICLE, param, {
      success: (res: Result) => {
        if (res.status === 200) {
          this.requestArticleInfo();
          if (data.collection) {
            this.baseui.showSuccessToast('取消收藏成功!');
          } else {
            this.baseui.showSuccessToast('收藏成功!');
          }
        } else {
          if (data.collection) {
            this.baseui.showSuccessToast('取消收藏失败!');
          } else {
            this.baseui.showSuccessToast('收藏失败!');
          }
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.collectBtn = false;
      }
    });
  }

  /**
   * 赞
   */
  approval(data: ArticleInfo) {
    const param = {
      articleId: data.id,
      userId: this.userId,
      operateType: 2,
      type: data.approval ? 0 : 1
    };
    this.approvalBtn = true;
    this.http.post<Result>(HTTPUrl.OPERATE_ARTICLE, param, {
      success: (res: Result) => {
        if (res.status === 200) {
          this.requestArticleInfo();
          if (data.approval) {
            this.baseui.showSuccessToast('取消点赞成功!');
          } else {
            this.baseui.showSuccessToast('点赞成功!');
          }
        } else {
          if (data.approval) {
            this.baseui.showSuccessToast('取消点赞失败!');
          } else {
            this.baseui.showSuccessToast('点赞失败!');
          }
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.approvalBtn = false;
      }
    });
  }
  doRefresh(refresher) {
    this.requestArticleInfo();
    setTimeout(() => {
      refresher.target.complete();
    }, 1000);

  }
  /**
   * 时间格式转换
   */
  dateParse(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString().replace(/\//g, '-');
  }
  /**
   * 前往问题详情页面 
   */
  async goToArticleDetail(data: ArticleInfo) {
    const modal = await this.modalController.create({
      component: TribeDetailComponent,
      componentProps: {
        userId: this.userId,
        articleId: data.id
      }
    });
    modal.onDidDismiss().then(() => {
      this.requestArticleInfo();
    })
    await modal.present();
  }
}
