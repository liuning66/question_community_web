import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor(private storage: Storage) { }

   set(key: string, value: any) {
     return this.storage.set(key, value);
  }
  get(key: string): Promise<any> {
    return this.storage.get(key);
  }
  clear() {
    this.storage.clear();
  }


  lengths(): Promise<number> {
    return this.storage.length();
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

}
