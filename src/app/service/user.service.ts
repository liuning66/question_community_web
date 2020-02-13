import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private storage: StorageService) { }

  async getUser(): Promise<User> {
    this.user = JSON.parse(await this.storage.get('user'));
    return this.user;
  }
}
