import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestionComponent } from 'src/app/component/question/question.component';
import { HttpService } from 'src/app/service/http.service';
import { HTTPUrl } from 'src/app/model/http';
import { QuestionInfo } from 'src/app/model/questionInfo';
import { Router } from '@angular/router';
import { QuestionDetail } from 'src/app/model/question-detail';
import { QuestionDetailComponent } from 'src/app/component/question-detail/question-detail.component';
import { UserService } from 'src/app/service/user.service';
import { BaseuiService } from 'src/app/service/baseui.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab-index.page.html',
  styleUrls: ['tab-index.page.scss']
})
export class Tab1Page implements OnInit {
  questionInfoList: Array<QuestionInfo> = [];
  loginStatus = false;
  constructor(private modalCtrl: ModalController,
    private http: HttpService,
    private baseui: BaseuiService,
    private userService: UserService,
    private router: Router) { }

  async ngOnInit() {
    this.requestQuestionInfo();
  }
  async ionViewWillEnter() {
    this.loginStatus = await this.userService.isLogin();
  }
  /**
   * 前往提问页面
   */
  async goQuestion() {
    if (!this.loginStatus) {
      this.baseui.showWarningToast('您当前尚未登录,请先登录');
      this.router.navigate(['/tabs/tab-mine']);
      return;
    }
    const modal = await this.modalCtrl.create({
      component: QuestionComponent,
      animated: false,
    });
    modal.onDidDismiss().then(() => {
      this.requestQuestionInfo();
    })
    return await modal.present();
  }

  /**
   * 请求问题数据
   */
  requestQuestionInfo() {
    this.http.post<Array<QuestionInfo>>(HTTPUrl.GET_ALL_QUESTIONINFO, {}, {
      success: (res: Array<QuestionInfo>) => {
        if (res) {
          this.questionInfoList = res;
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => { }
    });
  }

  /**
   * 时间格式转换
   */
  dateParse(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString().replace(/\//g, '-');
  }

  /**
   * 跳转到 详情页面
   */
  async goToQuestionDetail(data: QuestionInfo) {
    if (!this.loginStatus) {
      this.baseui.showWarningToast('您当前尚未登录,请先登录');
      this.router.navigate(['/tabs/tab-mine']);
      return;
    }
    const modal = await this.modalCtrl.create({
      component: QuestionDetailComponent,
      componentProps: {
        questionId: data.id,
        questionUserId: data.userId
      }
    });
    modal.onDidDismiss().then(() => {
      this.requestQuestionInfo();
    });
    await modal.present();
  }

  /**
   *  下拉刷新
   */
  refresh(e) {
    this.requestQuestionInfo();
    setTimeout(() => {
      e.target.complete();
    }, 1000);
  }
}
