import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
  appName: string;
  packageName: string;
  versionCode: any;
  versionNumber: string;
  constructor(private appVersion: AppVersion, private modalController: ModalController) { }

  ngOnInit() {
    this.appVersion.getAppName().then(v => {
      this.appName = v;
    });
    this.appVersion.getPackageName().then(v => {
      this.packageName = v;
    });
    this.appVersion.getVersionCode().then(v => {
      this.versionCode = v;
    });
    this.appVersion.getVersionNumber().then(v => {
      this.versionNumber = v;
    });
  }
  
  dismiss() {
    this.modalController.dismiss();
  }

}
