import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.page.html',
  styleUrls: ['./note-modal.page.scss']
})
export class NoteModalPage implements OnInit {

  addnoteForm: FormGroup;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private noteService: NoteService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addnoteForm = new FormGroup({
      description: new FormControl(null, [Validators.required])
    });
  }
  
  createNote(): void{
    if(this.addnoteForm.valid) {
      const desc = this.addnoteForm.controls.description.value;

      const note = {
        descripcion: desc,
        estado: false
      };

      this.noteService.createNote(note).then(() => {
        this.addAlert()
      }).catch((error) => {
        console.log(error)
      });
    }
    else{
      console.log('Error')
    }
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async addAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your To-Do has been created succesfully',
      buttons: [
        {
          text: 'OKAY',
          handler: () => {
            this.closeModal();
          }
        }
      ]
    });

    await alert.present();
  }
  
}
