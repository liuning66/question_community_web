import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
})
export class UserCenterComponent implements OnInit {
  user: User  = new User();
  constructor(private storage: StorageService) { }

  async ngOnInit() {
    this.user = JSON.parse(await this.storage.get('user'));
    console.log(this.user);
  }

}
