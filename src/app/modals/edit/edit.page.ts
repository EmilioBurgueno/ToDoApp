import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async editAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your To-Do has been updated successfully',
      buttons: ['OKAY']
    });

    await alert.present();
  }

  Update() {
    console.log('update');
  }
}
