import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best', 
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }


  async presenAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitulo',
      message: 'Esta es un mensaje de alerta',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Se dio click en el boton Ok')
          }
        },
         {
          text: 'Cancelar',
          role: 'cancel'
        },
         {
          text: 'Boton extra',
          handler: () => {
            console.log('Se dio click en el boton Boton extra')
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Placeholder 1'
        },
        // Meter la fecha con un minimo o maximo
        {
          name: 'name4',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirmando cancelación')
          }
        },
        {
          text: 'Ok',
          handler: ( data: any ) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
