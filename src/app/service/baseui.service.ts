import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class BaseuiService {

    constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    }

    async showLoading(msg: string): Promise<HTMLIonLoadingElement> {
        const loader = await this.loadingCtrl.create({
            message: msg,
            duration: 2000,
        });
        await loader.present();
        return loader;
    }

    async showSuccessToast(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            color: 'success',
            position: 'bottom'
        });
        toast.present();
    }

    async showWarningToast(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            color: 'warning',
            position: 'bottom'
        });
        toast.present();
    }

    async showErrorToast(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            color: 'danger',
            position: 'bottom'
        });
        toast.present();
    }

}
