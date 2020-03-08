import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private storage: StorageService) { }

  async getUserId(): Promise<string> {
    this.user = JSON.parse(await this.storage.get('user'));
    return this.user.id;
  }

  async isLogin(): Promise<boolean> {
    const user = JSON.parse(await this.storage.get('user'));
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
