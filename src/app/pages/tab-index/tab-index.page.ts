import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestionComponent } from 'src/app/component/question/question.component';
import { HttpService } from 'src/app/service/http.service';
import { HTTPUrl } from 'src/app/model/http';
import { QuestionInfo } from 'src/app/model/questionInfo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab-index.page.html',
  styleUrls: ['tab-index.page.scss']
})
export class Tab1Page implements OnInit {
  questionInfoList: Array<QuestionInfo> = [];

  constructor(private modalCtrl: ModalController, private http: HttpService) { }

  ngOnInit() {
    this.requestQuestionInfo();
  }
  /**
   * 前往提问页面
   */
  async goQuestion() {
    console.log(123);
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
          console.log(res);
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

}
