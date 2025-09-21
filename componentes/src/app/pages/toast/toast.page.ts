import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: false
})
export class ToastPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  onClick() { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved!',
      duration: 3000,
    });
    await toast.present();
  }
  
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to close!',
      position: 'top',
      buttons:[
        {
          side: 'start',
          text: 'Favorite',
          handler: () => { 
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { 
            console.log('Cancel clicked');
          }
        }
      ],
      duration: 3000,
    });
    await toast.present();
  }
}
