import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.page.html',
  styleUrls: ['./note-modal.page.scss'],
})
export class NoteModalPage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async addAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your To-Do has been created succesfully',
      buttons: ['OKAY']
    });

    await alert.present();
  }

  Add() {
    console.log('add');
  }
  
}
