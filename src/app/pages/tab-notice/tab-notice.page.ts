import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { BaseuiService } from 'src/app/service/baseui.service';
import { UserService } from 'src/app/service/user.service';
import { HTTPUrl } from 'src/app/model/http';
import { NoticeInfo } from 'src/app/model/notice-info';
import { interval, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-notice',
  templateUrl: 'tab-notice.page.html',
  styleUrls: ['tab-notice.page.scss']
})
export class Tab3Page implements OnInit{
  userId: string;
  noticeList: Array<NoticeInfo> = [];
  timer: Subscription;
  constructor(private http: HttpService, private baseui: BaseuiService, private userService: UserService) { }
  async ngOnInit() {
    this.userId = await this.userService.getUserId();
    this.requestNoticeList();
  }
  async ionViewWillEnter() {
    this.timer = interval(10000).subscribe(val => {
      this.requestNoticeList();
    });
  }
  ionViewWillLeave() {
    this.timer.unsubscribe();
  }

  /**
   * 请求通知列表
   */
  requestNoticeList() {
    console.log(this.userId);
    const param = {
      userId: this.userId
    };
    console.log(HTTPUrl.GET_NOTICE_LIST);
    this.http.post<Array<NoticeInfo>>(HTTPUrl.GET_NOTICE_LIST, param, {
      success: (res: Array<NoticeInfo>) => {
        console.log(res);
        if (res) {
          this.noticeList = res;
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => { }
    })
  }
}
